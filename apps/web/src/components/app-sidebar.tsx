import { Link, useLocation } from "@tanstack/react-router";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Accounts",
      items: [
        {
          title: "Accounts",
          route: "/admin/accounts",
        },
      ],
    },
    {
      title: "Assets",
      items: [
        {
          title: "Characters",
          route: "/admin/assets/characters",
        },
        {
          title: "Perks",
          route: "/admin/assets/perks",
        },
        {
          title: "Emotes",
          route: "/admin/assets/emotes",
        },
        {
          title: "Banners",
          route: "/admin/assets/banners",
        },
        {
          title: "Taunts",
          route: "/admin/assets/taunts",
        },
        {
          title: "Ringouts",
          route: "/admin/assets/ringouts",
        },
        {
          title: "Profile Icons",
          route: "/admin/assets/profileIcons",
        },
        {
          title: "Announcer Paks",
          route: "/admin/assets/announcerPaks",
        },
        {
          title: "Stats",
          route: "/admin/assets/stats",
        },
        {
          title: "Gems",
          route: "/admin/assets/gems",
        },
      ],
    },
    {
      title: "Paks",
      route: "#",
      items: [
        {
          title: "Versions",
          route: "/admin/versions",
        },
      ],
    },
    {
      title: "Events",
      route: "#",
      items: [
        {
          title: "Announcements",
          route: "/admin/announcements",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => {
          return (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => {
                    const isActive =
                      location.pathname === item.route ||
                      (item.route !== "/" &&
                        location.pathname.startsWith(item.route));
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={isActive}>
                          <Link to={item.route}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
