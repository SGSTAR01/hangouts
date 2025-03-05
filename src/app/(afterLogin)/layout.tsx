
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function AfterLogin({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <SidebarProvider>
            <AppSidebar />
            {children}

        </SidebarProvider>

    );
}
