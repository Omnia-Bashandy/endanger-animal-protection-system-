import React from "react";
import Product from "./Product";

const ProductList = props => {
  const { products } = props;

  const renderProducts = products.map(({ id, title, category }) => {
    return (
      <li className="Alaali" key={id}>
        <Product title={title} category={category} />
      </li>
    );
  });

  return <ul className="Alaa">{renderProducts}</ul>;
};

export default ProductList;
