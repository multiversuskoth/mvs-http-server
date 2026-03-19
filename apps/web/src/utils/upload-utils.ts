import { createServerFn } from "@tanstack/react-start";
import { getFileUploadUrl } from "@/data/admin/storage";
import { authAdminMiddleware } from "@/routes/admin/accounts";

export function BuildFormDataForUploadUrl(fields: Record<string, string>) {
  const form = new FormData();

  Object.entries(fields).forEach(([field, value]) => {
    if (field !== "acl") {
      form.append(field, value as string);
    }
  });
  return form;
}

export const getUploadUrlFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator((fileName: string) => fileName)
  .handler(async (context) => {
    const url = await getFileUploadUrl(context.data);
    return url;
  });
