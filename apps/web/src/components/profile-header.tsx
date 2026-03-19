import { useMutation } from "@tanstack/react-query";
import { Link, useRouteContext } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateUserNameFn } from "@/routes/profile";

export function ProfileHeader() {
  const { user } = useRouteContext({ from: "/profile" });
  const updateNameMutation = useMutation({
    mutationFn: useServerFn(updateUserNameFn),
  });
  const [displayName, setDisplayName] = useState(user.displayName);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [tempName, setTempName] = useState(displayName);

  const handleSave = () => {
    updateNameMutation.mutate(
      { data: tempName },
      {
        onSuccess: (result) => {
          setDisplayName(result.name);
          setIsEditOpen(false);
        },
      },
    );
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.15),transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-6 p-8 sm:flex-row">
        <Avatar className="h-32 w-32 border-4 border-primary/50 shadow-2xl ring-2 ring-primary/20">
          <AvatarImage
            src="/fighting-game-character-avatar.jpg"
            alt={user?.id}
          />
          <AvatarFallback className="bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-3xl font-bold">
            {displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <h1
              className="text-4xl font-bold tracking-wider text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {displayName}
            </h1>
            <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-primary/20 hover:text-primary"
                  onClick={() => setTempName(displayName)}
                >
                  <Pencil className="h-4 w-4" />
                  <span className="sr-only">Edit display name</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Display Name</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      placeholder="Enter your display name"
                    />
                  </div>
                  <Button onClick={handleSave} className="w-full">
                    Save Changes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-6 text-sm sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground uppercase tracking-wider text-xs">
                Rank:
              </span>
              <span className="font-mono text-lg font-bold text-accent text-amber-400 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">
                MASTER
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground uppercase tracking-wider text-xs">
                Level:
              </span>
              <span className="font-mono text-lg font-bold text-primary drop-shadow-[0_0_8px_rgba(120,119,198,0.5)]">
                47
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
            >
              View Match History
            </Button>
          </div>
          {user.role !== "basic" && (
            <div>
              <Link reloadDocument={true} to="/admin">
                <Button variant="default" className="bg-amber-400">
                  Admin
                </Button>
              </Link>
            </div>
          )}
          <div>
            <Link reloadDocument={true} to="/auth/logout">
              <Button variant="destructive">Logout</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
