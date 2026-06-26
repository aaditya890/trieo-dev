import {Sidebar,SidebarContent,SidebarMenu,SidebarMenuButton,SidebarMenuItem,} from "@/components/ui/sidebar";
import {Collapsible,CollapsibleContent,CollapsibleTrigger,} from "@/components/ui/collapsible";
import {LayoutDashboard,Truck,Settings,ChevronDown, Terminal,} from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {/* Logo */}
        <div className="border-b p-4">
          <h2 className="text-xl font-bold">
            Trieon Transport
          </h2>
          <p className="text-sm text-muted-foreground">
            Transport ERP
          </p>
        </div>

        <SidebarMenu>
          {/* Dashboard */}
         <SidebarMenuItem>
            {/* Button Dashboard */}
            <SidebarMenuButton>
              {/* Icon Dashboard */}
                <LayoutDashboard />
                <span>Label</span>
            </SidebarMenuButton>
         </SidebarMenuItem>

          <Collapsible>
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                        <Terminal />
                        <span>Terminal</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>

          {/* Transport Management */}
          <Collapsible defaultOpen>
            <SidebarMenuItem>

              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <Truck />
                  <span>Transport Management</span>

                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-8 mt-2 space-y-2">

                  <SidebarMenuButton>
                    Create DO
                  </SidebarMenuButton>

                  <SidebarMenuButton>
                    DO List
                  </SidebarMenuButton>

                  <SidebarMenuButton>
                    Create PO
                  </SidebarMenuButton>

                  <SidebarMenuButton>
                    PO List
                  </SidebarMenuButton>

                  <SidebarMenuButton>
                    DBS
                  </SidebarMenuButton>

                </div>
              </CollapsibleContent>

            </SidebarMenuItem>
          </Collapsible>

          {/* Settings */}

          <Collapsible>
            <SidebarMenuItem>

              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <Settings />
                  <span>Settings</span>

                  <ChevronDown className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="ml-8 mt-2 space-y-2">

                  <SidebarMenuButton>
                    Users
                  </SidebarMenuButton>

                  <SidebarMenuButton>
                    Roles
                  </SidebarMenuButton>

                </div>
              </CollapsibleContent>

            </SidebarMenuItem>
          </Collapsible>

        </SidebarMenu>

      </SidebarContent>
    </Sidebar>
  );
}