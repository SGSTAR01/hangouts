import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    
    SidebarFooter,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"



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
        url: "#",
        icon: Settings,
    },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="sidebar" collapsible="icon" {...props}>
            {/* <SidebarHeader>
                Header
            </SidebarHeader> */}

            <SidebarContent className="flex justify-center">
                <SidebarGroup className="text-xl" >
                    {/* <SidebarGroupLabel className=" pl-18">Application</SidebarGroupLabel> */}
                    <SidebarGroupContent>
                        {/* pl-18 grid justify-items-center*/}
                        <SidebarMenu className="text-xl pl-6 ">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="" size={"lg"} asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span className="px-4" >{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
                <SidebarFooter>
                <div className="text-center">User: Sachin</div>
                </SidebarFooter>
        </Sidebar>
    )
}
