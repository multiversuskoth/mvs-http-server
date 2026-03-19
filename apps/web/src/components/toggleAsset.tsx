import { useRouter } from "@tanstack/react-router";

import { createServerFn } from "@tanstack/react-start";
import { toggleDataAsset } from "@/data/admin/assets";
import { authAdminMiddleware } from "@/routes/admin/accounts";
import { Switch } from "./ui/switch";

type ToggleAssetFnParams = {
  assetId: string;
  value: boolean;
};

export const toggleAssetFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator((data: ToggleAssetFnParams) => data)
  .handler(async ({ data }) => {
    try {
      await toggleDataAsset(data.assetId, data.value);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  });

export function ToggleAsset(data: ToggleAssetFnParams) {
  const router = useRouter();
  return (
    <Switch
      onCheckedChange={async () => {
        await toggleAssetFn({
          data: { assetId: data.assetId, value: !data.value },
        });
        await router.invalidate();
      }}
      checked={data.value}
    />
  );
}
