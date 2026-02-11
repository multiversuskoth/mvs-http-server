import { useSession } from "@tanstack/react-start/server";

type SessionUser = {
  id: string;
  displayName: string;
  player_id: string;
  steam_id: string;
  role: string;
  admin: boolean;
};

export function useAppSession() {
  return useSession<SessionUser>({
    password: "dsdsdasd223vcvx3453tgr232323232sds",
  });
}

export function getSession() {
  return useSession<SessionUser>({
    password: "dsdsdasd223vcvx3453tgr232323232sds",
  });
}