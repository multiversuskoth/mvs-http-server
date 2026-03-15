import { logger } from "@mvsi/logger";
import { encodeHydraWS, MAIN_WEBSOCKET } from "../../websocket.elysia";
import type { MatchmakingTicket } from "../matchmaking/matchmaking.types";
import { getLobby } from "./lobby.service";
import {
  LOBBY_CREATED_CHANNEL,
  LOBBY_MODE_UPDATED_CHANNEL,
  LOBBY_QUEUED_CHANNEL,
  type PartyLobby,
} from "./lobby.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(LOBBY_CREATED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as PartyLobby;
  handleOnLobbyCreated(notification);
});

subscriber.subscribe(LOBBY_MODE_UPDATED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as PartyLobby;
  handleOnLobbyModeChanged(notification);
});

subscriber.subscribe(LOBBY_QUEUED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingTicket;
  handlePartyQueued(notification);
});

async function handleOnLobbyCreated(newLobby: PartyLobby) {
  const client = clients.get(newLobby.LeaderID);
  if (client) {
    if (client.data.lobbyId) {
      const oldLobby = await getLobby(client.data.lobbyId);
      if (oldLobby && oldLobby.LeaderID !== newLobby.LeaderID) {
        client.unsubscribe(oldLobby.MatchID);
      }
    }
    client.data.lobbyId = newLobby.MatchID;
    client.subscribe(newLobby.MatchID);
    logger.verbose(`Player ${client.data.account?.id} joined lobby ${client.data.lobbyId}`);
  }
}

function handleOnLobbyModeChanged(lobby: PartyLobby) {
  for (const playerId of Object.keys(lobby.Teams[0].Players)) {
    const client = clients.get(playerId);
    if (client) {
      const message = {
        data: {
          template_id: "OnLobbyModeUpdated",
          LobbyId: lobby.MatchID,
          ModeString: lobby.ModeString,
        },
        payload: {
          custom_notification: "realtime",
        },
        header: "",
        cmd: "update",
      };
      client.data.sendHydra(client, message);
    }
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
