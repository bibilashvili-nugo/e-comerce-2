// import heroImg from "../../../public/assets/home/desktop/image-hero.png";
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
          <button>see porn</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
