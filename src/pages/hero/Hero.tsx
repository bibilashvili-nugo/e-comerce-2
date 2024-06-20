// import heroImg from "../../../public/assets/home/desktop/image-hero.png";
import ButtonWeb from "../../components/ui/button/ButtonWeb";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroLeft}>
          <p>NEW PRODUCT</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          {/* <Link to="/products/headphones/4">See Product</Link> */}
          <ButtonWeb isLink={true} to="/products/headphones/4">
            See Product
          </ButtonWeb>
        </div>
      </div>
    </section>
  );
};

export default Hero;
