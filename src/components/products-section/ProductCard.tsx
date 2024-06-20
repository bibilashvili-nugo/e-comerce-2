import ButtonWeb from "../ui/button/ButtonWeb";
import { productInfoType } from "./ProductsSection";
import ShadowImg from "../../../public/shared/products-section/shadow.png";
import styles from "./productsSection.module.css";

type Props = {
  productInfo: productInfoType;
};

const ProductCard = ({ productInfo }: Props) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productCardImgDiv}>
        <img src={productInfo.img} alt="" />
        <img src={ShadowImg} className={styles.shadowImg} alt="" />
      </div>
      <h3>{productInfo.name}</h3>
      <ButtonWeb to={`/products/${productInfo.name}`} isLink={true} type="link">
        Shop
      </ButtonWeb>
    </article>
  );
};

export default ProductCard;
