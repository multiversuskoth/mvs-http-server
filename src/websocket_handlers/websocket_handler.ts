import { HydraEncoder } from "mvs-dump";
import { websocket_clients, WebSocketPlayer } from "../websocket";
import ObjectID from "bson-objectid";
import { GAME_SERVER_PORT } from "../game/udp";
import { sleep } from "../utils/sleep";
import env from "../env/env";

export interface OnMatchmakerStarted {
  MatchmakingRequestId: string;
  partyId: string;
}

let count = 0;
const ips = ["127.0.0.1", "127.0.0.1", env.LOCAL_PUBLIC_IP, env.LOCAL_PUBLIC_IP];
let playerCount = 0;

let playerIndexCount = 0;
const playersIndexes = [
  [1, 0],
  [0, 1],
];

export async function onMatchmakerStarted(data: OnMatchmakerStarted) {
  const client = Array.from(websocket_clients.entries())[playerCount++][1];
  if (client) {
    const encoder = new HydraEncoder(true);
    encoder.encodeValue({
      data: {
        template_id: "OnMatchmakerStarted",
        MatchmakingRequestId: data.MatchmakingRequestId,
      },
      payload: {
        match: {
          id: data.partyId,
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
    await sleep(2000);
    clearInterval(interval);
    gameServerReadyNotification(client, newMatchId);
    await sleep(300);
    gameServerInstanceReady(client, newMatchId);
    await sleep(300);
    onGameplayConfigNotified(client, newMatchId);
    matchmakingComplete(client, newMatchId, data.MatchmakingRequestId);
    await sleep(8000);
    perksLockedNotification(client, newMatchId);
  }
}

export function matchmakingTick(client: WebSocketPlayer, data: OnMatchmakerStarted) {
  console.log("matchmakingTick");
  const encoder = new HydraEncoder(true);
  encoder.encodeValue({
    data: {},
    payload: {
      id: data.partyId,
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
      MatchID: ObjectID().toHexString(),
      Port: GAME_SERVER_PORT,
      template_id: "GameServerReadyNotification",
      IPAddress: ips[count++],
    },
    payload: {
      match: {
        id: ObjectID().toHexString(),
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
        host: ips[count++],
        // ?? what is this? not sure
        id: Id,
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
            Taunts: [
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
            ],
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
            TeamIndex: playersIndexes[playerIndexCount][0],
            ProfileIcon: "",
            WinStreak: null,
            RankedTier: null,
            Handicap: 0,
            RingoutVfx: "ring_out_vfx_rising_stars",
            Character: "character_wonder_woman",
            Banner: "banner_foretold_champion_epic2",
            StatTrackers: [
              ["stattracking_ranked_seasonfive_charactersingold_1v1", 1],
              ["stat_tracking_bundle_ranked_season_two_wins_1v1", 779],
            ],
            Perks: [],
            PlayerIndex: playersIndexes[playerIndexCount][0],
            PartyId: "67d8dba624caa7eb9f093373",
            Username: {},
            Buffs: [],
            Skin: "skin_wonder_woman_default",
            BotDifficultyMin: 0,
          },
          [client.account.id]: {
            Taunts: [
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
            ],
            BotBehaviorOverride: "",
            AccountId: client.account.id,
            bAutoPartyPreference: true,
            Gems: [],
            PartyMember: null,
            GameplayPreferences: 544,
            BotDifficultyMax: 0,
            bIsBot: false,
            RankedDivision: null,
            bUseCharacterDisplayName: false,
            StartingDamage: 0,
            TeamIndex: playersIndexes[playerIndexCount][1],
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
            PlayerIndex: playersIndexes[playerIndexCount][1],
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
  const newMatchmakingId = NewMatchmakingId;
  const message = {
    data: {},
    payload: {
      result: {
        // New ID, I thinks its to store the matchingmaking ID
        id: newMatchmakingId.toHexString(),
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
            Taunts: [
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
            ],
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
            TeamIndex: playersIndexes[playerIndexCount][0],
            ProfileIcon: "",
            WinStreak: null,
            RankedTier: null,
            Handicap: 0,
            RingoutVfx: "ring_out_vfx_rising_stars",
            Character: "character_wonder_woman",
            Banner: "banner_foretold_champion_epic2",
            StatTrackers: [
              ["stattracking_ranked_seasonfive_charactersingold_1v1", 1],
              ["stat_tracking_bundle_ranked_season_two_wins_1v1", 779],
            ],
            Perks: ["perk_gen_well_rounded", "perk_purest_of_motivations", "perk_team_speed_force_assist", "perk_gen_boxer"],
            PlayerIndex: playersIndexes[playerIndexCount][0],
            PartyId: "67d8dba624caa7eb9f093373",
            Username: {},
            Buffs: [],
            Skin: "skin_wonder_woman_default",
            BotDifficultyMin: 0,
          },
          "680c459a69f798cb6846c35c": {
            Taunts: [
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
              "taunt_wonder_woman_hands_on_hips",
            ],
            BotBehaviorOverride: "",
            AccountId: "680c459a69f798cb6846c35c",
            bAutoPartyPreference: true,
            Gems: [],
            PartyMember: null,
            GameplayPreferences: 544,
            BotDifficultyMax: 0,
            bIsBot: false,
            RankedDivision: null,
            bUseCharacterDisplayName: false,
            StartingDamage: 0,
            TeamIndex: playersIndexes[playerIndexCount][1],
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
            PlayerIndex: playersIndexes[playerIndexCount][1],
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
  console.log(playersIndexes[playerIndexCount]);
  playerIndexCount++;
  let encoder = new HydraEncoder(true);
  encoder.encodeValue(message);
  console.log("perksLockedNotification");
  client.send(encoder.returnValue());
}
