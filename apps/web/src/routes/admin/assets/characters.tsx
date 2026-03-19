import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AssetTableComponent } from "@/components/assetTable";

import { getDataAssetsFn } from "@/routes/admin";
import { searchValidator } from "@/utils/searchValidators";

export const Route = createFileRoute("/admin/assets/characters")({
  validateSearch: (search) => searchValidator(10).parse(search),
  loaderDeps: ({ search: { page, limit, name } }) => ({ page, limit, name }),
  loader: async ({ deps: { page, limit, name } }) => {
    return await getDataAssetsFn({
      data: {
        assetType: "CharacterData",
        filters: { name },
        paginationParams: { page, limit },
      },
    });
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  return (
    <AssetTableComponent
      name="Characters"
      page={page}
      data={data.data}
      navigate={(name) =>
        navigate({
          to: Route.fullPath,
          search: (prev) => {
            if (name) {
              return { ...prev, page: 1, name };
            }
            return { ...prev, name };
          },
        })
      }
    ></AssetTableComponent>
  );
}
