import React from 'react';

const ProductInformation = ({ name, price, description, addToCart }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{descriptions}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductInformation;
