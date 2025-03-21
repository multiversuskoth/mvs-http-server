import { HydraEncoder } from "mvs-dump";
import { websocket_clients, WebSocketPlayer } from "../websocket";
import ObjectID from "bson-objectid";
import { GAME_SERVER_PORT } from "../game/udp";
import { sleep } from "../utils/sleep";

export interface OnMatchmakerStarted {
  MatchmakingRequestId: string;
  matchId: string;
}

export async function onMatchmakerStarted(data: OnMatchmakerStarted) {
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
    }, 1000);

    // Once match found send gameServerReadyNotification
    await sleep(1000);
    const newMatchId = ObjectID();
    clearInterval(interval);
    gameServerReadyNotification(client, newMatchId);
    await sleep(200);
    gameServerInstanceReady(client, newMatchId);
    await sleep(200);
    onGameplayConfigNotified(client, newMatchId);
    matchmakingComplete(client, newMatchId, data.MatchmakingRequestId);
    await sleep(5000);
    perksLockedNotification(client, newMatchId);
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
      MatchID: matchId.toHexString(),
      Port: GAME_SERVER_PORT,
      template_id: "GameServerReadyNotification",
      IPAddress: "127.0.0.1",
    },
    payload: {
      match: {
        id: matchId.toHexString(),
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
        port: GAME_SERVER_PORT,
        owner_id: matchId.toHexString(),
        host: "127.0.0.1",
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
      MatchId: matchId.toHexString(),
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
        MatchId: matchId.toHexString(),
        bIsOnlineMatch: true,
        ModeString: "1v1",
        Map: "M016_V3",
        bIsRift: false,
      },
      template_id: "OnGameplayConfigNotified",
    },
    payload: {
      match: {
        id: matchId.toHexString(),
      },
      custom_notification: "realtime",
    },
    header: "",
    cmd: "update",
  };
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("onGameplayConfigNotified");
  client.send(encoder.returnValue());
}

export function matchmakingComplete(client: WebSocketPlayer, matchId: ObjectID, matchmakingRequestId: string) {
  const newMatchmakingId =  ObjectID();
  const message = {
    data: {},
    payload: {
      result: {
        // New ID, I thinks its to store the matchingmaking ID
        id: newMatchmakingId.toHexString()
      },
      match: {
        id: matchId.toHexString(),
      },
      id: matchmakingRequestId,
      state: 2,
    },
    header: "Matchmaking request completed!",
    cmd: "matchmaking-complete",
  };
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("matchmakingComplete");
  client.send(encoder.returnValue());
}

export function perksLockedNotification(client: WebSocketPlayer, matchId: ObjectID) {
  const message = {
    data: {
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
            Perks: ["perk_char_one_last_zoinks", "perk_gen_fire_projectile", "perk_gen_jump_on_kb", "perk_static_electricity"],
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
            Perks: ["perk_gen_well_rounded", "perk_purest_of_motivations", "perk_team_speed_force_assist", "perk_gen_boxer"],
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
        Cluster: "",
        WorldBuffs: [],
        bIsTutorial: false,
        MatchId: matchId.toHexString(),
        bIsOnlineMatch: true,
        ModeString: "1v1",
        Map: "M016_V3",
        bIsRift: false,
      },
      template_id: "PerksLockedNotification",
    },
    payload: {
      match: {
        id: matchId.toHexString(),
      },
      custom_notification: "realtime",
    },
    header: "",
    cmd: "update",
  };
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("perksLockedNotification");
  client.send(encoder.returnValue());
}
