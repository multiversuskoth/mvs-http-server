import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getDataAsset } from "@/data/admin/assets";
import { sessionQueryOptions } from "@/hooks/useSession";
import type { GetPaginatedTableParams } from "@/utils/searchValidators";
import { authAdminMiddleware } from "./admin/accounts";

type DataAssetPaginatedTableParams = GetPaginatedTableParams & {
  assetType:
    | "TauntData"
    | "EmoteData"
    | "BannerData"
    | "RingOutVfxData"
    | "ProfileIconData"
    | "AnnouncerPackData"
    | "StatTrackingBundleData"
    | "MvsGemHsda"
    | "MvsPerkHsda"
    | "CharacterData"
    | "SkinData";
};

export const getDataAssetsFn = createServerFn({ method: "GET" })
  .middleware([authAdminMiddleware])
  .inputValidator((type: DataAssetPaginatedTableParams) => type)
  .handler(async ({ data }) => {
    const assets = await getDataAsset(
      data.assetType,
      data.paginationParams,
      data.filters,
    );
    return {
      pagination: assets.pagination,
      data: assets,
    };
  });

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
  staleTime: 500000,
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(sessionQueryOptions);

    if (user) {
      if (user.role === "basic") {
        throw redirect({ to: "/" });
      }
      return {
        user,
      };
    }
    throw redirect({ to: "/" });
  },
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background bg-blend-overlay bg-[url(/bg.webp)] bg-no-repeat bg-cover">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Outlet></Outlet>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
