import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UploadPakComponent } from "@/components/upload-pak";
import { getVersions } from "@/data/admin/versions";
import { authAdminMiddleware } from "./accounts";

export const getVersionsFn = createServerFn({ method: "GET" })
  .middleware([authAdminMiddleware])
  .handler(async () => {
    const versions = await getVersions();

    return versions;
  });

export const Route = createFileRoute("/admin/versions")({
  ssr: "data-only",
  loader: async () => {
    return await getVersionsFn();
  },
  component: RouteComponent,
});

function formatBytes(bytes: number, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Calculate the index for the correct unit (0 for Bytes, 1 for KB, 2 for MB, etc.)
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Use toFixed() to round the number to the specified decimal places and append the unit
  return `${parseFloat((bytes / k ** i).toFixed(decimals))} ${sizes[i]}`;
}

function RouteComponent() {
  const data = Route.useLoaderData();
  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>
            Current Game Version:{" "}
            <Badge className="bg-green-300">{data.currentVersion}</Badge>
            <div>Files</div>
          </CardTitle>
          <CardAction>
            <UploadPakComponent></UploadPakComponent>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Version</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.versions.map((file) => (
                <TableRow key={file._id}>
                  <TableCell className="w-75">
                    <div className="w-75 truncate overflow-hidden whitespace-nowrap">
                      {file.filename}
                    </div>
                  </TableCell>
                  <TableCell className="w-150">
                    <div className="w-150 truncate overflow-hidden whitespace-nowrap">
                      <a className="hover:underline " href={file.url}>
                        {file.url}
                      </a>
                    </div>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Badge
                      className={
                        file.type === "new" ? "bg-green-500" : "bg-yellow-500"
                      }
                      variant={"default"}
                    >
                      {file.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(file.createdAt).toLocaleDateString()}{" "}
                    {new Date(file.createdAt).toLocaleTimeString()}
                  </TableCell>
                  <TableCell>{formatBytes(file.size)}</TableCell>
                  <TableCell>
                    <Badge variant={"default"}>{file.version}</Badge>
                  </TableCell>

                  <TableCell>
                    {file.version === data.currentVersion && (
                      <Badge className="bg-green-500" variant={"default"}>
                        Current
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
