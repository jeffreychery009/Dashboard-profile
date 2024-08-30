import React from "react";

// Define the type of the context

interface MenuContextType {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void;
}

const MenuContext = React.createContext<MenuContextType>({} as MenuContextType);

export default MenuContext;
