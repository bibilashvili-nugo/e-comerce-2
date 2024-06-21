import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Burger from "../components/Header/Burger";
import { useBurger } from "../context/ContextForBurger";
import BestAudioGear from "../components/bestAudioGear/bestAudioGear";
import ProductsSection from "../components/products-section/ProductsSection";

type LayoutPros = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPros) => {
  const {
    isBurger,
    open,
    setIsBurger,
    openRegister,
    burgerMenuClick,
    setBurgerMenuClick,
  } = useBurger();

  if (open || openRegister || burgerMenuClick) {
    setIsBurger(false);
    setBurgerMenuClick(false);
  }

  return (
    <>
      {isBurger ? (
        <Burger>
          <Header />
          {children}
          <ProductsSection />
          <BestAudioGear />
          <Footer />
        </Burger>
      ) : (
        <>
          <Header />
          {children}
          <ProductsSection />
          <BestAudioGear />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
