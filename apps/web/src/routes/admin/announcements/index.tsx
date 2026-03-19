import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import { Pencil, Plus, Trash } from "lucide-react";
import { ConfirmDialog } from "@/components/confirm-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteAnnouncement, getAnnouncements } from "@/data/admin/announcements-data";
import { authAdminMiddleware } from "../accounts";

export const getAnnouncementsFn = createServerFn({ method: "GET" })
  .middleware([authAdminMiddleware])
  .handler(async () => {
    return await getAnnouncements();
  });

export const deleteAnnouncementFn = createServerFn({ method: "POST" })
  .middleware([authAdminMiddleware])
  .inputValidator((id: string) => id)
  .handler(async (ctx) => {
    return await deleteAnnouncement(ctx.data);
  });

export const Route = createFileRoute("/admin/announcements/")({
  component: RouteComponent,
  ssr: "data-only",
  loader: async () => {
    return await getAnnouncementsFn();
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  const router = useRouter();
  const deleteAnnouncementUse = useServerFn(deleteAnnouncementFn);
  async function onDeleteAnnouncement(id: string) {
    await deleteAnnouncementUse({ data: id });
    await router.invalidate({ filter: (match) => match.routeId === "/admin/announcements/" });
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
        <CardAction>
          <Link to="/admin/announcements/$announcementId" params={{ announcementId: "new" }}>
            <Button variant="default">
              <Plus />
              Add
            </Button>
          </Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Thumnbnail Title</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Thumbnail</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((announcement) => (
              <TableRow key={announcement.title}>
                <TableCell>{announcement.title}</TableCell>
                <TableCell>{announcement.thumbnailTitle}</TableCell>
                <TableCell> {new Date(announcement.start_at).toLocaleDateString()} </TableCell>
                <TableCell>
                  {announcement.end_at ? new Date(announcement.end_at).toLocaleDateString() : ""}
                </TableCell>
                <TableCell className="w-150">
                  <img
                    className="aspect-video h-32"
                    aria-label="thumbnail"
                    src={announcement.image}
                  ></img>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Link
                      to="/admin/announcements/$announcementId"
                      params={{ announcementId: announcement.id }}
                    >
                      <Button variant="outline" size="icon">
                        <Pencil />
                      </Button>
                    </Link>
                    <ConfirmDialog
                      confirm="Delete"
                      onConfirm={() => onDeleteAnnouncement(announcement.id)}
                    >
                      <Button variant="outline" size="icon">
                        <Trash />
                      </Button>
                    </ConfirmDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
