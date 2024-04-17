import React from 'react';
import ProductInformation from './ProductInformation';

const Product = ({ name, price, description, addToCart }) => {
  return (
    <div>
      <ProductInformation name={name} price={price} description={description} addToCart={() => addToCart(price)} />
    </div>
  );
};

export default Product;
