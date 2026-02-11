import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerOnlyFn } from "@tanstack/react-start";
import { useAppSession } from "@/utils/session";

export const logoutFn = createServerOnlyFn(async () => {
  const session = await useAppSession();
  if (session) {
    await session.clear();
  }
});

export const Route = createFileRoute("/auth/logout")({
  server: {
    handlers: {
      GET: async () => {
        await logoutFn();
        throw redirect({ to: "/" });
      },
    },
  },
});
