import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Burger from "../components/Header/Burger";
import { useBurger } from "../context/ContextForBurger";
import BestAudioGear from "../components/bestAudioGear/bestAudioGear";

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
          <BestAudioGear />
          <Footer />
        </Burger>
      ) : (
        <>
          <Header />
          {children}
          <BestAudioGear />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
