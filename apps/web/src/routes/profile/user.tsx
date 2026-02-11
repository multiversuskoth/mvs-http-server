import { createFileRoute } from "@tanstack/react-router";

import { ProfileHeader } from "@/components/profile-header";
import { SettingsSection } from "@/components/settings-section";

import { getUserDetailsFn } from "../profile";
export const Route = createFileRoute("/profile/user")({
  loader: async (context) => {

    return await getUserDetailsFn();
  },
  component: ProfilePage,
});

export default function ProfilePage() {
  const data = Route.useLoaderData();
  return (
    <main className="min-h-screen bg-background bg-blend-overlay bg-[url(/bg.webp)] bg-no-repeat bg-cover">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(74,222,128,0.05),transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProfileHeader />
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <SettingsSection data={data} />
          </div>
          {/*    <div>
            <StatsGrid />
          </div> */}
        </div>
      </div>
    </main>
  );
}
