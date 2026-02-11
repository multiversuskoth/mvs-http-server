import { MAIN_WEBSOCKET } from "../../websocket.elysia";
import type { MatchmakingTicket } from "../matchmaking/matchmaking.types";
import { handleMatchTick } from "../matchmaking/matchmaking.ws";
import { updatePlayerStatus } from "../playerPresence/playerPresence.service";
import {
  LOBBY_CREATED_CHANNEL,
  LOBBY_MODE_UPDATED_CHANNEL,
  LOBBY_QUEUED_CHANNEL,
  type Lobby,
} from "./lobby.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(LOBBY_CREATED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as Lobby;
  handleOnLobbyCreated(notification);
});

subscriber.subscribe(LOBBY_MODE_UPDATED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as Lobby;
  handleOnLobbyModeChanged(notification);
});

subscriber.subscribe(LOBBY_QUEUED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingTicket;
  handlePartyQueued(notification);  
});

function handleOnLobbyCreated(newLobby: Lobby) {
  const client = clients.get(newLobby.LeaderID);
  if (client) {
    client.data.lobbyId = newLobby.MatchID;
  }
}

function handleOnLobbyModeChanged(lobby: Lobby) {
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
      await updatePlayerStatus(playerId, "queued");
      client.data.sendHydra(client, {
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
      });
      client.data.ticket = notification;
      handleMatchTick(client, notification.matchmakingRequestId, notification.matchType);
    }
  }
}
