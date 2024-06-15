import { Link } from "react-router-dom";
import styles from "./burger.module.css";
import logo from "../../../public/shared/audiophile.png";
import cart from "../../../public/shared/cart.png";
import Facebook from "../../../public/social/Facebook.png";
import Instagram from "../../../public/social/Instagram.png";
import Linkedin from "../../../public/social/linkedin.png";
import { ReactNode, useEffect, useRef } from "react";
import { useBurger } from "../../context/ContextForBurger";

type BurgerChildren = {
  children: ReactNode;
};

const Burger = ({ children }: BurgerChildren) => {
  const { setIsBurger } = useBurger();
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsBurger(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsBurger]);

  const handleBurger = () => {
    setIsBurger(false);
  };

  return (
    <div className={styles.burger}>
      <div className={styles.burgerContainer} ref={burgerRef}>
        <button className={styles.closeButton} onClick={handleBurger}>
          X
        </button>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className={styles.burgerLinks}>
          <Link to="/">HOME</Link>
          <Link to="/products/headphones">HEADPHONES</Link>
          <Link to="/products/speakers">SPEAKERS</Link>
          <Link to="/products/earphones">EARPHONES</Link>
        </nav>

        <button
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <img src={cart} alt="shoping cart" />
        </button>

        <div className={styles.burgerSocial}>
          <Link to="https://www.facebook.com/bibilashvili.nugo" target="_blank">
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
              className={styles.burgerLinks}
            >
              <img
                src={Facebook}
                alt="Facebook"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </Link>
          <Link
            to="https://www.linkedin.com/in/nugzar-bibilashvili-93b84629a/"
            target="_blank"
          >
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
              className={styles.burgerLinks}
            >
              <img
                src={Linkedin}
                alt="Linkedin"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </Link>
          <Link
            to="https://www.instagram.com/bibilashvili_nugo/"
            target="_blank"
          >
            <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
              className={styles.burgerLinks}
            >
              <img
                src={Instagram}
                alt="Instagram"
                style={{ width: "25px", height: "25px" }}
              />
            </button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Burger;
