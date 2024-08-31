import React, {
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";

interface StateContextType {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuStateContext = createContext<StateContextType>({
  activeMenu: true,
  setActiveMenu: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [activeMenu, setActiveMenu] = React.useState<boolean>(true);

  return (
    <MenuStateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuStateContext.Provider>
  );
};

export const useStateContext = () => useContext(MenuStateContext);
