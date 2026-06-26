import { Sidebar } from "lucide-react";
import { SidebarContent, SidebarGroup, SidebarGroupContent } from "./ui/sidebar";

export default function DummyComponent() {
    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <div className="border-b p-4">
                        <h2 className="text-xl font-bold">
                            Trieon Transport
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Fleet ERP
                        </p>
                    </div>

                    <SidebarGroup>
                        <SidebarGroupContent>
                            
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}