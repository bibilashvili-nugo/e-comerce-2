import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface BurgerContextType {
  isBurger: boolean;
  setIsBurger: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  openRegister: boolean;
  setOpenRegister: Dispatch<SetStateAction<boolean>>;
  burgerMenuClick: boolean;
  setBurgerMenuClick: Dispatch<SetStateAction<boolean>>;
}

const initialContext: BurgerContextType = {
  isBurger: false,
  setIsBurger: () => {},
  open: false,
  setOpen: () => {},
  openRegister: false,
  setOpenRegister: () => {},
  burgerMenuClick: false,
  setBurgerMenuClick: () => {},
};

const BurgerContext = createContext<BurgerContextType>(initialContext);

type BurgerProviderChildren = {
  children: ReactNode;
};

const BurgerProvider = ({ children }: BurgerProviderChildren) => {
  const [isBurger, setIsBurger] = useState(false);
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [dataDummy, setDataDummy] = useState([]);
  const [burgerMenuClick, setBurgerMenuClick] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:3000/products");
      const res = await data.json();
      setDataDummy(res);
    }
    fetchData();
  }, []);

  console.log(dataDummy);

  const value: BurgerContextType = {
    isBurger,
    setIsBurger,
    open,
    setOpen,
    openRegister,
    setOpenRegister,
    burgerMenuClick,
    setBurgerMenuClick,
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
