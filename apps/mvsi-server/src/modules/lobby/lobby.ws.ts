import { logger } from "@mvsi/logger";
import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import type { MatchmakingTicket } from "../matchmaking/matchmaking.types";
import {
  LOBBY_CREATED_CHANNEL,
  LOBBY_QUEUED_CHANNEL,
  type LobbyCreatedMessage,
} from "./lobby.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(LOBBY_CREATED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as LobbyCreatedMessage;
  handleOnLobbyCreated(notification);
});

subscriber.subscribe(LOBBY_QUEUED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingTicket;
  handlePartyQueued(notification);
});

async function handleOnLobbyCreated(message: LobbyCreatedMessage) {
  const client = clients.get(message.accountId);
  if (client) {
    if (client.data.lobbyId) {
      client.unsubscribe(client.data.lobbyId);
    }
    client.data.lobbyId = message.lobbyId;
    client.subscribe(message.lobbyId);
    logger.verbose(`Player ${client.data.account?.id} joined lobby ${client.data.lobbyId}`);
  }
}

async function handlePartyQueued(notification: MatchmakingTicket) {
  for (const playerId of notification.playerIds) {
    const client = clients.get(playerId);
    if (client) {
      client.data.ticket = notification;
      client.subscribe(notification.matchmakingRequestId);
    }
    const data = {
      data: {
        template_id: "OnMatchmakerStarted",
        MatchmakingRequestId: notification.matchmakingRequestId,
      },
      payload: {
        match: {
          id: notification.partyId,
        },
        custom_notification: "realtime",
      },
      header: "",
      cmd: "update",
    };
    MAIN_WEBSOCKET.server?.publish(notification.partyId, encodeHydraWS(data));
  }
}
