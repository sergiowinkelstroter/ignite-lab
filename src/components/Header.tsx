import { Logo } from "./Logo";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContextProvider";
import HamburguerSidebar from "./HamburguerSidebar";
import CloseSidebar from "./CloseSidebar";

export function Header() {
  const { sidebarOpen, toogleSidebar } = useContext(SidebarContext);

  return (
    <header className="w-full py-5 flex items-center lg:justify-center justify-between lg:px-0 px-4 bg-gray-700 border-b border-gray-600">
      <Logo />
      <div className="flex items-center gap-2 lg:hidden">
        Aulas
        <button className="transition-all" onClick={toogleSidebar}>
          {sidebarOpen ? <HamburguerSidebar /> : <CloseSidebar />}
        </button>
      </div>
    </header>
  );
}
