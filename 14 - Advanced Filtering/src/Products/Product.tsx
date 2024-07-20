import { ProductsProps } from "../types";
import "./Product.css";

const Product = ({ result }: ProductsProps) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Product;
