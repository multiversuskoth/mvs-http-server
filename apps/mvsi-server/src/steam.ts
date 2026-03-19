import { env } from "@mvsi/env";

export const STEAM_PRIVATE_KEY = Buffer.from([
  0xed,
  0x93,
  0x86,
  0x07,
  0x36,
  0x47,
  0xce,
  0xa5,
  0x8b,
  0x77,
  0x21,
  0x49,
  0x0d,
  0x59,
  0xed,
  0x44,
  0x57,
  0x23,
  0xf0,
  0xf6,
  0x6e,
  0x74,
  0x14,
  0xe1,
  0x53,
  0x3b,
  0xa3,
  0x3c,
  0xd8,
  0x03,
  0xbd,
  0xbd,
]);

export async function fetchSteamUser(steamId: string) {
  const url = new URL("https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/");
  url.searchParams.set("key", env.STEAM_KEY);
  url.searchParams.set("steamids", steamId);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  const players = data?.response?.players ?? [];
  return players[0] || null;
}
