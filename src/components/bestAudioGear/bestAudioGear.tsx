import Bitmap from "../../../public/shared/Bitmap.png";
import BitmapTablet from "../../../public/shared/BitmapTablet.png";
import useWindowDimensions from "../../hooks/getWindowDimensions";
import styles from "./bestAudioGear.module.css";

const BestAudioGear = () => {
  const { width } = useWindowDimensions();
  return (
    <div className={`${styles.bestAudioGear} container`}>
      <div className={styles.leftSide}>
        {width > 768 ? (
          <p className={styles.text}>
            Bringing you the <br />
            <span className={styles.insideText}>best</span> audio gear
          </p>
        ) : (
          <div className={styles.text}>
            Bringing you the
            <span style={{ color: "var(--color-primary)" }}>
              {""} best
            </span>{" "}
            <br /> audio gear
          </div>
        )}
        <p className={styles.textP}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.rightSide}>
        <img src={width > 768 ? Bitmap : BitmapTablet} alt="Best Audio Gear" />
      </div>
    </div>
  );
};

export default BestAudioGear;
