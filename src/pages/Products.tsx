import { useParams } from "react-router-dom";
import styles from "./products.module.css";
import { useEffect, useState } from "react";
import ButtonWeb from "../components/ui/button/ButtonWeb";
import useWindowDimensions from "../hooks/getWindowDimensions";

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

export type ProductsType = ProductType[];

const Products = () => {
  const params = useParams();
  const [products, setProducts] = useState<null | ProductsType>(null);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");

    const data = await res.json();

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const { width } = useWindowDimensions();

  return (
    <div className={styles.products}>
      <div className={styles.productsName}>
        <h1>{params.productName}</h1>
      </div>
      <div className={`container ${styles.productsContainer}`}>
        {products
          ?.filter((product) => product.category === params.productName)
          .map((product) => {
            const name: string = product.name;
            const spaceIndex = name.indexOf(" ");
            const nameWithBreak = (
              <>
                {name.slice(0, spaceIndex)}
                <br />
                {name.slice(spaceIndex + 1)}
              </>
            );
            return (
              <div className={styles.productContainer} key={product.id}>
                {width > 768 ? (
                  <img
                    width={400}
                    src={`/${product.image.desktop}`}
                    alt="image"
                  />
                ) : width <= 768 ? (
                  <div className={styles.backgroundColor}>
                    <div className={styles.backgroundColorImagePosition}>
                      <img
                        width={400}
                        src={`/${product.image.tablet}`}
                        alt="image"
                      />
                    </div>
                  </div>
                ) : null}

                <div className={styles.productInfo}>
                  <p className={styles.productFullName}>{nameWithBreak}</p>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                  <div className={styles.buttonProduct}>
                    <ButtonWeb
                      isLink={true}
                      to={`/products/${params.productName}/${product.id}`}
                      type="primary"
                    >
                      SEE PRODUCT
                    </ButtonWeb>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
