export type PlayerPresence = {
  currentLobbyId: string;
  profileId: string;
  status: "online" | "offline";
  ip: string;
};
