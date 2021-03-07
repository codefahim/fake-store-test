import React, { useContext, useEffect, useState } from "react";
import { providerFahim } from "../../App";
import Nati from "../Naji/Nati";
import ProductDetail from "../ProductDetail/ProductDetail";

const Home = (props) => {
  const [product, setProduct] = useState([]);

  const categoryName = useContext(providerFahim);
  let item = categoryName;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  const matched = product.filter((products) => products.category === item);

  return (
    <div>
      {matched.map((pd) => (
        <ProductDetail product={pd}></ProductDetail>
      ))}
    </div>
  );
};

export default Home;
