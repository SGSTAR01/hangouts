
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function AfterLogin({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="px-7">
            <SidebarProvider>
                <AppSidebar className="md:ml-7" />
                {/* make sidebar 2/3 width when screen < lg */}


                {children}

            </SidebarProvider>
        </div>

    );
}
