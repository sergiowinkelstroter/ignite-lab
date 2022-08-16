import { ReactNode, useState } from "react";
import { createContext } from "react";

export type SidebarContext = {
  sidebarOpen: boolean;
  toogleSidebar: () => void;
};
export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

export default function SidebarContextProvider(props: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toogleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toogleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
}
