import HeadphoneImg from "../../../public/shared/products-section/image-headphone.png";
import SpeakersImg from "../../../public/shared/products-section/image-speakers.png";
import EarphonesImg from "../../../public/shared/products-section/image-earphones.png";
import ProductCard from "./ProductCard";
import styles from "./productsSection.module.css";

export type productInfoType = {
  name: string;
  img: string;
  url: string;
};

const productsArr: productInfoType[] = [
  {
    name: "headphones",
    url: "/products/headphones",
    img: HeadphoneImg,
  },
  {
    name: "speakers",
    url: "/products/speakers",
    img: SpeakersImg,
  },
  {
    name: "earphones",
    url: "/products/earphones",
    img: EarphonesImg,
  },
];

const ProductsSection = () => {
  return (
    <section className={styles.productsSection}>
      <div className={`container ${styles.productsSectionContainer} `}>
        {/* 1 */}
        {productsArr.map((prod) => {
          return <ProductCard key={prod.name} productInfo={prod} />;
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
