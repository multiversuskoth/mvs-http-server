import { HydraEncoder } from "mvs-dump";
import { websocket_clients, WebSocketPlayer } from "../websocket";
import ObjectID from "bson-objectid";

export interface OnMatchmakerStarted {
  MatchmakingRequestId: string;
  matchId: string;
}

export function onMatchmakerStarted(data: OnMatchmakerStarted) {
  const client = websocket_clients.values().next().value;
  if (client) {
    const encoder = new HydraEncoder(true);
    encoder.encodeValue({
      data: {
        template_id: "OnMatchmakerStarted",
        MatchmakingRequestId: data.MatchmakingRequestId,
      },
      payload: {
        match: {
          id: data.matchId,
        },
        custom_notification: "realtime",
      },
      header: "",
      cmd: "update",
    });
    client.send(encoder.returnValue());

    const interval = setInterval(() => {
      if (client.deleted) {
        clearInterval(interval);
      }
      matchmakingTick(client, data);
    }, 2000);

    // Once match found send gameServerReadyNotification
    setTimeout(() => {
      const newMatchId = ObjectID();
      clearInterval(interval);
      gameServerReadyNotification(client, newMatchId);
      setTimeout(() => {
        gameServerInstanceReady(client, newMatchId);

        setTimeout(() => {
          onGameplayConfigNotified(client, newMatchId);

          matchmakingComplete(client, newMatchId, data.MatchmakingRequestId);
        }, 1000);
      }, 1000);
    }, 2000);
  }
}

export function matchmakingTick(client: WebSocketPlayer, data: OnMatchmakerStarted) {
  console.log("matchmakingTick");
  const encoder = new HydraEncoder(true);
  encoder.encodeValue({
    data: {},
    payload: {
      id: data.matchId,
      state: 2,
    },
    header: "matchmaking-tick",
    cmd: "matchmaking-tick",
  });
  client.send(encoder.returnValue());
}

export function gameServerReadyNotification(client: WebSocketPlayer, matchId: ObjectID) {
  // Create matchID in MONGO instead

  const message = {
    data: {
      MatchKey: "a58hIiIGSr+o3ObwYn7EMYqHMhuT2ENij9K+I/OCL+k=",
      MatchID: matchId,
      Port: 8577,
      template_id: "GameServerReadyNotification",
      IPAddress: "148.72.170.223",
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
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("gameServerReadyNotification");
  client.send(encoder.returnValue());
}

export function gameServerInstanceReady(client: WebSocketPlayer, matchId: ObjectID) {
  const message = {
    data: {},
    payload: {
      game_server_instance: {
        game_server_type_slug: "multiplay",
        port: 8577,
        owner_id: matchId,
        host: "148.72.170.223",
        // ?? what is this? not sure
        id: ObjectID(),
      },
      proxied_data: null,
    },
    header: "Your game server is ready to join.",
    cmd: "game-server-instance-ready",
  };
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("gameServerInstanceReady");
  client.send(encoder.returnValue());
}

export function onGameplayConfigNotified(client: WebSocketPlayer, matchId: ObjectID) {
  const message = {
    data: {
      MatchId: matchId,
      GameplayConfig: {
        ArenaModeInfo: null,
        RiftNodeId: "",
        ScoreEvaluationRule: "TargetScoreIsWin",
        bIsPvP: true,
        ScoreAttributionRule: "AttributeToAttacker",
        MatchDurationSeconds: 420,
        Created: {
          _hydra_unix_date: 1742265276,
        },
        EventQueueSlug: "",
        bModeGrantsProgress: true,
        TeamData: [],
        Spectators: {},
        bIsRanked: false,
        bIsCustomGame: false,
        Players: {
          "63b3b7c7fc8aef5b5da03139": {
            Taunts: ["taunt_shaggy_default", "taunt_shaggy_default", "taunt_shaggy_default", "taunt_shaggy_default"],
            BotBehaviorOverride: "",
            AccountId: "63b3b7c7fc8aef5b5da03139",
            bAutoPartyPreference: true,
            Gems: [],
            PartyMember: null,
            GameplayPreferences: 964,
            BotDifficultyMax: 0,
            bIsBot: false,
            RankedDivision: null,
            bUseCharacterDisplayName: false,
            StartingDamage: 0,
            TeamIndex: 1,
            ProfileIcon: "",
            WinStreak: null,
            RankedTier: null,
            Handicap: 0,
            RingoutVfx: "ring_out_vfx_rising_stars",
            Character: "character_shaggy",
            Banner: "banner_foretold_champion_epic2",
            StatTrackers: [
              ["stat_tracking_bundle_shaggy_wins", 77],
              ["stat_tracking_bundle_shaggy_wins", 77],
              ["stat_tracking_bundle_shaggy_wins", 77],
            ],
            Perks: [],
            PlayerIndex: 1,
            PartyId: "67d8dba624caa7eb9f093373",
            Username: {},
            Buffs: [],
            Skin: "skin_shaggy_default",
            BotDifficultyMin: 0,
          },
          "63cef97ced0619f458cfac8f": {
            Taunts: [
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
            ],
            BotBehaviorOverride: "",
            AccountId: "63cef97ced0619f458cfac8f",
            bAutoPartyPreference: true,
            Gems: [],
            PartyMember: null,
            GameplayPreferences: 544,
            BotDifficultyMax: 0,
            bIsBot: false,
            RankedDivision: null,
            bUseCharacterDisplayName: false,
            StartingDamage: 0,
            TeamIndex: 0,
            ProfileIcon: "",
            WinStreak: null,
            RankedTier: null,
            Handicap: 0,
            RingoutVfx: "ring_out_vfx_default",
            Character: "character_wonder_woman",
            Banner: "banner_foretold_champion_rare",
            StatTrackers: [
              ["stattracking_ranked_seasonfive_charactersingold_1v1", 1],
              ["stat_tracking_bundle_ranked_season_two_wins_1v1", 779],
            ],
            Perks: [],
            PlayerIndex: 0,
            PartyId: "67d8db9c0bd3637fea0c872e",
            Username: {},
            Buffs: [],
            Skin: "skin_wonder_woman_default",
            BotDifficultyMin: 0,
          },
        },
        CustomGameSettings: {
          bHazardsEnabled: true,
          bShieldsEnabled: true,
          MatchTime: 420,
          NumRingouts: 3,
        },
        HudSettings: {
          bDisplayPortraits: true,
          bDisplayStocks: true,
          bDisplayTimer: true,
        },
        bIsCasualSpecial: false,
        bAllowMapHazards: true,
        RiftNodeAttunement: "Attunements:None",
        CountdownDisplay: "CountdownTypes:XvY",
        Cluster: "ec2-us-east-1-dokken",
        WorldBuffs: [],
        bIsTutorial: false,
        MatchId: matchId,
        bIsOnlineMatch: true,
        ModeString: "1v1",
        Map: "M016_V3",
        bIsRift: false,
      },
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
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("onGameplayConfigNotified",message);
  client.send(encoder.returnValue());
}

export function matchmakingComplete(client: WebSocketPlayer, matchId: ObjectID, matchmakingRequestId: string) {
  const message = {
    data: {},
    payload: {
      result: {
        // New ID, I thinks its to store the matchingmaking ID
        id: ObjectID(),
      },
      match: {
        id: matchId,
      },
      id: matchmakingRequestId,
      state: 2,
    },
    header: "Matchmaking request completed!",
    cmd: "matchmaking-complete",
  };
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("matchmakingComplete",message);
  client.send(encoder.returnValue());
}
