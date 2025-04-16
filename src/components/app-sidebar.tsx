import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  SidebarHeader,
  SidebarFooter,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// import { NavUser } from "@/components/nav-user"
import ModeToggle from "@/components/ui/modetoggle";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { NavUser } from "./nav-user";



// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Post",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <Sidebar variant="sidebar" collapsible="icon" {...props}>

      <SidebarHeader>

        <div className=" flex items-center justify-between px-6 text-2xl font-bold">
          {/* <Avatar src="public/assets/logo/logo_ryokou.svg"> </Avatar> */}
          {/* <img src="public/assets/logo/logo_ryokou.svg" alt="L" /> */}
          <span>旅 - Ryokou</span>
          <ModeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="flex justify-center">
        <SidebarGroup className="text-xl">
          {/* <SidebarGroupLabel className=" pl-18">Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            {/* pl-18 grid justify-items-center*/}
            <SidebarMenu className="text-xl pl-6 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="" size={"lg"} asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="px-4 ">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>

        <NavUser />

      </SidebarFooter>
    </Sidebar>
  );
}
