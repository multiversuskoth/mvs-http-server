import { logger } from "@mvsi/logger";
import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import type { MatchmakingTicket } from "../matchmaking/matchmaking.types";
import {
  LOBBY_JOINED_CHANNEL,
  LOBBY_QUEUED_CHANNEL,
  type LobbyCreatedMessage,
} from "./lobby.types";
import { leaveLobby } from "./lobby.service";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(LOBBY_JOINED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as LobbyCreatedMessage;
  handleOnLobbyJoined(notification);
});

subscriber.subscribe(LOBBY_QUEUED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingTicket;
  handlePartyQueued(notification);
});

async function handleOnLobbyJoined(message: LobbyCreatedMessage) {
  const client = clients.get(message.accountId);
  if (client) {
    if (client.data.lobbyId) {
      client.unsubscribe(client.data.lobbyId);
      await leaveLobby(client.data.lobbyId, message.accountId, false);
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
