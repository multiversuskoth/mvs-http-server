export interface MatchPlayer {
  id: string;
  skill: number;
  region: string;
  //partyId: string;
}

export interface QueuedPlayer {
  id: string;
  status: string;
}

export interface MatchTicket {
  party_size: number;
  players: MatchPlayer[];
  created_at: number;
  partyId: string;
  matchmakingRequestId: string;
}

export interface Match {
  matchId: string;
  id: string;
  tickets: MatchTicket[];
  status: string;
  createdAt: number;
  matchType: string;
  totalPlayers: number;
}

export interface TeamEntry {
  playerId: string;
  partyId: string;
  playerIndex: number;
  teamIndex: 0 | 1;
}