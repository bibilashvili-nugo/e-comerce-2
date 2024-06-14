import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface BurgerContextType {
  isBurger: boolean;
  setIsBurger: Dispatch<SetStateAction<boolean>>;
}

const initialContext: BurgerContextType = {
  isBurger: false,
  setIsBurger: () => {},
};

const BurgerContext = createContext<BurgerContextType>(initialContext);

type BurgerProviderChildren = {
  children: ReactNode;
};

const BurgerProvider = ({ children }: BurgerProviderChildren) => {
  const [isBurger, setIsBurger] = useState(false);

  const value: BurgerContextType = {
    isBurger,
    setIsBurger,
  };

  return (
    <BurgerContext.Provider value={value}>{children}</BurgerContext.Provider>
  );
};

const useBurger = () => {
  const context = useContext(BurgerContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
};

export { BurgerProvider, useBurger };
