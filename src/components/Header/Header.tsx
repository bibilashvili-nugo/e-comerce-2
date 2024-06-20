import { Link } from "react-router-dom";
import styles from "./header.module.css";
import BurgerMenuIcon from "../../../public/mobile/BurgerMenuIcon.png";
import logo from "../../../public/shared/audiophile.png";
import cart from "../../../public/shared/cart.png";
import { useBurger } from "../../context/ContextForBurger";
import LogIn from "../modalWindows/LogIn";
import Register from "../modalWindows/Register";

const Header = () => {
  const { setIsBurger, setOpen, open, openRegister, setOpenRegister } =
    useBurger();

  const handleBurger = () => {
    setIsBurger(true);
  };

  const openLoginModal = () => {
    setOpen(true);
  };

  const openRegisterModal = () => {
    setOpenRegister(true);
  };

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className={styles.navbarLinks}>
          <Link to="/">HOME</Link>
          <Link to="/products/headphones">HEADPHONES</Link>
          <Link to="/products/speakers">SPEAKERS</Link>
          <Link to="/products/earphones">EARPHONES</Link>
        </nav>
        <div className={styles.rightSideLRS}>
          <button className={styles.logIn} onClick={openLoginModal}>
            Log In
          </button>
          <button className={styles.Register} onClick={openRegisterModal}>
            Register
          </button>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img src={cart} alt="shoping cart" />
          </button>
        </div>
        {open ? <LogIn /> : openRegister ? <Register /> : null}
      </div>
      <div className={`container ${styles.burgerMenu}`}>
        <div className={styles.burgerMenuLeftSide}>
          <button
            onClick={handleBurger}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img
              src={BurgerMenuIcon}
              alt="Burger Menu"
              style={{ width: "16px", height: "15px" }}
            />
          </button>

          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.burgerMenuRightSide}>
          <button className={styles.logIn} onClick={openLoginModal}>
            Log In
          </button>
          <button className={styles.Register} onClick={openRegisterModal}>
            Register
          </button>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <img src={cart} alt="shoping cart" />
          </button>
          {/* {open ? <LogIn /> : null} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
