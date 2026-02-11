import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/admin/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Card>
      <CardContent>Welcome to MVSI Admin Panel</CardContent>
    </Card>
  );
}
