import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "./components/AppSidebar";
// import DummyComponent from "./components/DummyComponent";
import { AppSidebar } from "./components/AppSidebar";

function App() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
      <AppSidebar />

       
          <h1 className="text-3xl font-bold">
            Trieon Transport Dashboard
          </h1>
      
      </div>
    </SidebarProvider>
  );
}

export default App;