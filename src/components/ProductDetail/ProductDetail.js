import React from "react";

const ProductDetail = (props) => {
  console.log(props.product);
  const { title, price, description, category, image } = props.product;
  return (
    <div>
      <h4>Product Details</h4>
      <img src={image} style={{ width: "200px", height: "200px" }} alt="" />
      <code>Name: {title}</code>
      <p>{description}</p>
      <p>{category}</p>
    </div>
  );
};

export default ProductDetail;
