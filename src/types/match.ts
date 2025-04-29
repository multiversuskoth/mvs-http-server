

export interface QueuedPlayer {
  id: string;
  status: string;
}



export interface TeamEntry {
  playerId: string;
  partyId: string;
  playerIndex: number;
  teamIndex: 0 | 1;
}