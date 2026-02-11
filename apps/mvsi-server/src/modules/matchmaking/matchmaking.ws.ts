import { env } from "@mvsi/env";
import { logger } from "@mvsi/logger";
import { MAIN_WEBSOCKET, type MVSI_Websocket } from "../../websocket.elysia";
import {
  getActiveMatch,
  getPlayerPerksForMatch,
  removeTicketsFromQueue,
  stopMatchTick,
} from "./matchmaking.service";
import {
  ACTIVEMATCH_END_CHANNEL,
  type GameNotification,
  type MATCH_TYPES,
  MATCHMAKING_CANCEL_CHANNEL,
  MATCHMAKING_COMPLETE_CHANNEL,
  MATCHMAKING_GAME_SERVER_READY_CHANNEL,
  MATCHMAKING_MATCH_FOUND_CHANNEL,
  MATCHMAKING_PERKS_LOCKED_CHANNEL,
  type MatchEndMessage,
  type MatchmakingActiveMatch,
  type MatchmakingCancelMessage,
  type MatchmakingCompleteMessage,
  type MatchmakingPerksLockMessage,
  type ServerInstanceReadyMessage,
} from "./matchmaking.types";

const subscriber = MAIN_WEBSOCKET.decorator.redisSub;
const clients = MAIN_WEBSOCKET.decorator.players;

subscriber.subscribe(MATCHMAKING_GAME_SERVER_READY_CHANNEL, (message) => {
  const notification = JSON.parse(message) as ServerInstanceReadyMessage;
  handleServerInstanceReady(notification);
});

subscriber.subscribe(MATCHMAKING_COMPLETE_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingCompleteMessage;
  handleMatchMakingComplete(notification);
});

subscriber.subscribe(MATCHMAKING_CANCEL_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingCancelMessage;
  handleCancelMatchMakingMessage(notification);
});

subscriber.subscribe(MATCHMAKING_MATCH_FOUND_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingActiveMatch;
  handleMatchFound(notification);
});

subscriber.subscribe(ACTIVEMATCH_END_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchEndMessage;
  handleOnMatchEnd(notification);
});

subscriber.subscribe(MATCHMAKING_PERKS_LOCKED_CHANNEL, (message) => {
  const notification = JSON.parse(message) as MatchmakingPerksLockMessage;
  handleAllPerksLocked(notification);
});

async function handleMatchFound(notification: MatchmakingActiveMatch) {
  const arr = [env.UDP_SERVER_IP];
  const randomIndex = Math.floor(Math.random() * arr.length);
  const matchId = notification.matchConfig.MatchId;
  for (const [_id, player] of Object.entries(notification.matchConfig.Players)) {
    const client = clients.get(player.AccountId);
    if (client) {
      stopMatchTick(client);
      const message = {
        data: {
          MatchKey: notification.matchKey,
          MatchID: matchId,
          Port: env.UDP_PORT,
          template_id: "GameServerReadyNotification",
          IPAddress: client.data.ip === "127.0.0.1" ? "127.0.0.1" : arr[randomIndex],
        },
        payload: {
          match: {
            id: matchId,
          },
          custom_notification: "realtime",
        },
        header: "",
        cmd: "update",
      };

      client.data.sendHydra(client, message);
      logger.info(`Sent match to player ${player.AccountId} for match ${matchId}`);

      // Create the message to send to the players
      const gamePlayConfigMessage: GameNotification = {
        data: {
          MatchId: matchId,
          GameplayConfig: notification.matchConfig,
          template_id: "OnGameplayConfigNotified",
        },
        payload: {
          match: {
            id: matchId,
          },
          custom_notification: "realtime",
        },
        header: "",
        cmd: "update",
      };
      client.data.sendHydra(client, gamePlayConfigMessage);
    }
  }
}

async function handleOnMatchEnd(notification: MatchEndMessage) {
  const connectedClients = getConnectedClients(notification.playersIds);
  if (!connectedClients) {
    return;
  }
  const matchId = notification.matchId;
  const activeMatch = await getActiveMatch(matchId);

  for (const client of connectedClients) {
    const data = {
      data: {
        GameplayConfig: activeMatch?.matchConfig ?? {},
        template_id: "EndOfMatchPayload",
        ClientReturnData: {},
      },
      payload: {
        frm: {
          id: "internal-server",
          type: "server-api-key",
        },
        template: "realtime",
        account_id: client.data.account?.id,
        profile_id: client.data.account?.id,
      },
      header: "",
      cmd: "profile-notification",
    };
    client.data.sendHydra(client, data);
    setTimeout(() => {
      if (client.readyState === 1) {
        sendRematchDecline(client, matchId);
      }
    }, 1000);
  }
}

function sendRematchDecline(client: MVSI_Websocket, matchId: string) {
  const data = {
    data: {
      AccountId: client.data.account?.id,
      MatchId: matchId,
      template_id: "RematchDeclinedNotification",
    },
    payload: {
      frm: {
        id: "internal-server",
        type: "server-api-key",
      },
      template: "realtime",
      account_id: client.data.account?.id,
      profile_id: client.data.account?.id,
    },
    header: "",
    cmd: "profile-notification",
  };
  client.data.sendHydra(client, data);
}

async function handleMatchMakingComplete(notification: MatchmakingCompleteMessage) {
  for (const playerId of notification.playerIds) {
    const client = clients.get(playerId);
    if (client) {
      const message = {
        data: {},
        payload: {
          result: {
            id: notification.resultId,
          },
          match: {
            id: notification.containerMatchId,
          },
          id: notification.matchmakingRequestId,
          state: 2,
        },
        header: "Matchmaking request completed!",
        cmd: "matchmaking-complete",
      };
      client.data.sendHydra(client, message);
    }
  }
}

export function handleMatchTick(
  client: MVSI_Websocket,
  matchmakingRequestId: string,
  matchType: MATCH_TYPES,
) {
  client.data.matchTick = setInterval(() => {
    client.send({
      data: {},
      payload: {
        id: matchmakingRequestId,
        state: 2,
      },
      header: "matchmaking-tick",
      cmd: "matchmaking-tick",
    });
  }, 1000);

  setTimeout(() => {
    sendCancelMatchMaking(client, matchmakingRequestId, matchType);
  }, 100_000);
}

function handleCancelMatchMakingMessage(notification: MatchmakingCancelMessage) {
  for (const playerId of notification.playersIds) {
    const client = clients.get(playerId);
    if (client) {
      sendCancelMatchMaking(client, notification.matchmakingId, notification.matchType);
    }
  }
}

function sendCancelMatchMaking(
  client: MVSI_Websocket,
  matchmakingRequestId: string,
  matchType: MATCH_TYPES,
) {
  if (client.data.matchTick) {
    const message = {
      data: {},
      payload: {
        id: matchmakingRequestId,
        state: 3,
      },
      header: "Matchmaking request cancelled.",
      cmd: "matchmaking-cancel",
    };
    attemptRemoveMatchTicket(client, matchType);
    stopMatchTick(client);
    client.data.sendHydra(client, message);
  }
}

function attemptRemoveMatchTicket(playerWS: MVSI_Websocket, matchType: MATCH_TYPES) {
  if (playerWS.data.ticket) {
    removeTicketsFromQueue(matchType, [playerWS.data.ticket]);
  }
}

async function handleServerInstanceReady(notification: ServerInstanceReadyMessage) {
  for (const playerId of notification.playerIds) {
    const client = clients.get(playerId);
    if (client) {
      const message = {
        data: {},
        payload: {
          game_server_instance: {
            game_server_type_slug: "multiplay",
            port: env.UDP_PORT,
            owner_id: notification.containerMatchId,
            host: env.UDP_SERVER_IP,
            id: notification.resultId,
          },
          proxied_data: null,
        },
        header: "Your game server is ready to join.",
        cmd: "game-server-instance-ready",
      };
      client.data.sendHydra(client, message);
    } else {
      logger.error(
        `Error could not find player ${playerId} to send game server instance ready message for match ${notification.containerMatchId}`,
      );
    }
  }
}

async function handleAllPerksLocked(notification: MatchmakingPerksLockMessage) {
  const connectedClients = getConnectedClients(notification.playerIds);
  if (!connectedClients) {
    return;
  }
  const matchId = notification.containerMatchId;
  const activeMatch = await getActiveMatch(matchId);
  if (!activeMatch) {
    logger.error("Match not found");
    return;
  }
  for (const client of connectedClients) {
    if (client) {
      if (activeMatch) {
        const message = {
          data: {
            GameplayConfig: activeMatch.matchConfig,
            template_id: "PerksLockedNotification",
          },
          payload: {
            match: {
              id: activeMatch.matchConfig.MatchId,
            },
            custom_notification: "realtime",
          },
          header: "",
          cmd: "update",
        };
        client.data.sendHydra(client, message);
      }
    }
    logger.info(`Sent perks lock to player ${client.data.account?.id} for match ${matchId}`);
  }
}

function getConnectedClients(clientPlayerIds: string[]) {
  const connectedClients = clientPlayerIds.reduce((filtered: MVSI_Websocket[], playerIds) => {
    const connectedClient = clients.get(playerIds);
    if (connectedClient) {
      filtered.push(connectedClient);
    }
    return filtered;
  }, []);
  if (connectedClients.length > 0) {
    return connectedClients;
  }
  return null;
}
