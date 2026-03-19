import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import {
  getUserData,
  updateDisplayName,
  updateUserSettings,
} from "@/data/profile";
import { useAppSession } from "@/utils/session";

export const fetchUser = createServerFn({ method: "GET" }).handler(async () => {
  // We need to auth on the server so we have access to secure cookies
  const session = await useAppSession();
  if (!session.data.steam_id) {
    return null;
  }

  return session.data as Required<typeof session.data>;
});

export const updateUserNameFn = createServerFn({ method: "POST" })
  .inputValidator((newName: string) => newName)
  .handler(async ({ data }) => {
    const session = await useAppSession();
    if (session.data.steam_id) {
      const filteredName = await updateDisplayName(session.data.steam_id, data);
      await session.update({
        ...session.data,
        displayName: filteredName,
      });
      return { success: true, name: filteredName };
    }
    return { success: false, name: session.data.displayName! };
  });

export const getUserDetailsFn = createServerFn({ method: "GET" }).handler(
  async () => {
    const session = await useAppSession();
    if (session.data.steam_id) {
      const user = await getUserData(session.data.steam_id);
      if (user) {
        return {
          birthday: user.birthday,
          country: user.country,
          language: user.language,
        };
      }
    }
    return null;
  },
);

export const updateUserSettingsFn = createServerFn({ method: "POST" })
  .inputValidator(
    (data: { birthday?: Date; country?: string; language?: string }) => {
      return {
        birthday: data["birthday"]?.toString(),
        country: data["country"]?.toString(),
        language: data["language"]?.toString(),
      };
    },
  )
  .handler(async ({ data }) => {
    const session = await useAppSession();
    if (session.data.steam_id) {
      await updateUserSettings(session.data.steam_id, data);
      return { success: true };
    }
    return { success: false };
  });

export const Route = createFileRoute("/profile")({
  beforeLoad: async () => {
    const user = await fetchUser();
    if (user) {
      return {
        user,
      };
    }
    throw redirect({ to: "/" });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet></Outlet>;
}
