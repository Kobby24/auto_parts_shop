import React from "react";
import { useParams } from "react-router-dom";


const Product = () => {
  const { brandName, modelName,prod } = useParams(); // Extract brandName and modelName from the URL parameters
  // det: [image, price, description, relatedParts, name]
  // relatedParts: array of { part_pic, part_name, part_price }

  return (
    <h1>{brandName} {modelName} {prod}</h1>
  );
};

export default Product;