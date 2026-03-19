import { useRouter } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { confirmFileUpload } from "@/data/admin/versions";
import { authAdminMiddleware } from "@/routes/admin/accounts";
import { useAppSession } from "@/utils/session";
import {
  BuildFormDataForUploadUrl,
  getUploadUrlFn,
} from "@/utils/upload-utils";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "./file-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const confirmUploadFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator(
    (data: { key: string; type: string; fileSize: number }) => data,
  )
  .handler(async (context) => {
    const session = await useAppSession();

    const url = await confirmFileUpload({
      filename: context.data.key,
      type: context.data.type,
      uploaded_by: session.data.steam_id || "",
      fileSize: context.data.fileSize,
    });
    return url;
  });

export function UploadPakComponent() {
  const [file, setFile] = useState<File[] | undefined>();
  const [open, setOpen] = useState(false);
  const [fileType, setFileType] = useState<string>("new");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [uploadDisabled, setUploadSiabled] = useState<boolean>(true);
  const getUrlFn = useServerFn(getUploadUrlFn);
  const router = useRouter();

  const handleDrop = (file: File[]) => {
    setFile(file);
    setUploadSiabled(false);
  };

  const handleUpload = async () => {
    setDisabled(true);
    if (file?.[0].name) {
      const result = await getUrlFn({ data: file[0].name });
      if (!result.error && result.value) {
        try {
          const form = BuildFormDataForUploadUrl(result.value.fields);
          form.append("file", file[0], file[0].name);
          const response = await fetch(result.value.url, {
            method: "POST",
            body: form,
          });

          if (response.ok) {
            await confirmUploadFn({
              data: {
                key: result.value.fields.key,
                type: fileType,
                fileSize: file[0].size,
              },
            });

            setDisabled(false);
            setUploadSiabled(true);
            setOpen(false);
            setFile(undefined);
            router.invalidate();
          } else {
            console.error("Upload failed:", response.statusText);
          }
        } catch (error) {
          console.error("Network error:", error);
        }
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="default">
            <Plus />
            Upload
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-150">
          <DialogHeader>
            <DialogTitle>Upload File</DialogTitle>
            <DialogDescription>
              Upload a new file. This will increment the version and will
              require an update for players
              <br />
              <br />
              Files should be nested starting from the MultiVersus Folder. Ex:
              MultiVersus\Content\Paks will require this whole folder structure
              <br />
              <br />
              Pak Types:
              <br />
              "new" requires full files to be included in the zip
              <br />
              "patch" are incremental and only require the new files in the zip
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label
                htmlFor="pakType"
                className="text-xs uppercase tracking-wider text-muted-foreground w-fit"
              >
                Pak Type
              </Label>
              <Select
                disabled={disabled}
                onValueChange={(val) => setFileType(val)}
                value={fileType}
              >
                <SelectTrigger
                  id="pakType"
                  className="border-border/50 bg-background/50"
                >
                  <SelectValue
                    defaultValue={"new"}
                    placeholder="Select pak type"
                  ></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">new</SelectItem>
                  <SelectItem value="patch">patch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-3">
              <Dropzone
                disabled={disabled}
                accept={{ "application/zip": [".zip"] }}
                maxFiles={1}
                onDrop={handleDrop}
                onError={console.error}
                maxSize={200 * 1024 * 1024}
                src={file}
              >
                <DropzoneEmptyState />
                <DropzoneContent />
              </Dropzone>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button disabled={disabled} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={uploadDisabled}
              onClick={handleUpload}
              type="submit"
            >
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
