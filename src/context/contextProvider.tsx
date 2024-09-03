import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
  useState,
} from "react";

// Define the shape of Props for active Meny

interface ContextProps {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
}

// Export the Menu Context

export const StateContext = createContext<ContextProps>({
  activeMenu: true,
  setActiveMenu: () => {},
});

type ContextProviderProps = {
  children?: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
