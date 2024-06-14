import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Burger from "../components/Header/Burger";
import { useBurger } from "../context/ContextForBurger";

type LayoutPros = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPros) => {
  const { isBurger } = useBurger();
  return (
    <>
      {isBurger ? (
        <Burger>
          <Header />
          {children}
          <Footer />
        </Burger>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
