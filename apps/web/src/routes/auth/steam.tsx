import { PlayerModel } from "@mvsi/database/models/Player";
import { env } from "@mvsi/env";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerOnlyFn } from "@tanstack/react-start";
import { SteamClient } from "steam-nodejs";
import { getSession, useAppSession } from "@/utils/session";

async function getSteamUser(steamId: string) {
  const steamClient = new SteamClient(env.STEAM_KEY);
  const user = await steamClient.user.getUser(steamId);
  return user;
}

export const getSteamUrl = createServerOnlyFn(() => {
  const APP_REALM = `${env.STEAM_REALM}:${env.PORT}`;
  const RETURN_URL = `${APP_REALM}/${env.STEAM_RETURN_URL}`;
  const params = new URLSearchParams({
    "openid.ns": "http://specs.openid.net/auth/2.0",
    "openid.mode": "checkid_setup", // This mode tells Steam to perform the redirect
    "openid.return_to": RETURN_URL,
    "openid.realm": APP_REALM,
    "openid.identity": "http://specs.openid.net/auth/2.0/identifier_select",
    "openid.claimed_id": "http://specs.openid.net/auth/2.0/identifier_select",
  });
  return `https://steamcommunity.com/openid/login?${params.toString()}`;
});

export const Route = createFileRoute("/auth/steam")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const verifyParams = url.searchParams;
        verifyParams.set("openid.mode", "check_authentication");
        const verificationResponse = await fetch(
          "https://steamcommunity.com/openid/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: verifyParams.toString(),
          },
        );

        const verificationText = await verificationResponse.text();
        if (verificationText.includes("is_valid:true")) {
          const claimedId = verifyParams.get("openid.claimed_id");
          const steamIdMatch = claimedId?.match(/\d{17}/); // More robust regex for 64-bit ID
          const steamId = steamIdMatch ? steamIdMatch[0] : null;
          if (!steamId) {
            return new Response("Error steam login");
          }
          const steamUser = await getSteamUser(steamId);

          // Find the user
          const user = await PlayerModel.findOne({
            steam_id: steamUser.steamid,
          });
          if (user) {
            // Check if the user exists

            // Create a session
            const session = await getSession();

            await session.update({
              id: user._id.toHexString(),
              steam_id: user.steam_id,
              displayName: user.name,
              admin: user.admin,
              role: user.role,
            });
            throw redirect({ to: "/profile" });
          }
          throw redirect({ to: "/" });
        }
        return new Response("Error Login!");
      },
    },
  },
});
