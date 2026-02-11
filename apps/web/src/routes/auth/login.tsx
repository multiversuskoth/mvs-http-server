import { createFileRoute, redirect } from "@tanstack/react-router";
import { fetchUser } from "../profile";
import { getSteamUrl } from "./steam";

export const Route = createFileRoute("/auth/login")({
  server: {
    handlers: {
      GET: async () => {
        const user = await fetchUser();
        if (user) {
          throw redirect({ to: "/profile/user" });
        }
        throw redirect({ href: getSteamUrl() });
      },
    },
  },
});
