import { Link, useParams } from "react-router-dom";
import styles from "./products.module.css";
import { useEffect, useState } from "react";

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

  return (
    <div className={styles.products}>
      <div className={styles.productsName}>
        <h1>{params.productName}</h1>
      </div>
      <div className={`container ${styles.productsContainer}`}>
        {products
          ?.filter((product) => product.category === params.productName)
          .map((product) => {
            return (
              <div className={styles.productContainer} key={product.id}>
                <img
                  width={400}
                  src={`/${product.image.desktop}`}
                  alt="image"
                />
                <div>
                  <p className={styles.productFullName}>{product.name}</p>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>

                  <Link to={`/products/${params.productName}/${product.id}`}>
                    See details
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
