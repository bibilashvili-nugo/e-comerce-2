import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import Logo from "../../../public/shared/audiophile.png";
import Facebook from "../../../public/social/Facebook.png";
import Instagram from "../../../public/social/Instagram.png";
import Linkedin from "../../../public/social/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <nav className={styles.footerLinks}>
          <Link to="/">HOME</Link>
          <Link to="/products/headphones">HEADPHONES</Link>
          <Link to="/products/speakers">SPEAKERS</Link>
          <Link to="/products/earphones">EARPHONES</Link>
        </nav>
      </div>
      <div className={`container ${styles.footerSectionContainer}`}>
        <div className={styles.footerContent}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className={styles.socialAndCopy}>
            <p>Copyright 2021. All Rights Reserved</p>

            <div className={styles.footerSocial}>
              <Link
                to="https://www.facebook.com/bibilashvili.nugo"
                target="_blank"
              >
                <button
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  className={styles.linkButton}
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
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  className={styles.linkButton}
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
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                  className={styles.linkButton}
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
