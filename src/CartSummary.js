import React from 'react';

const CartSummary = ({ totalProducts, totalPrice }) => {
  return (
    <div>
      <h1>E-Commerce App</h1>
      <h3>Cart Summary</h3>
      <p>Total Products: {totalProducts}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default CartSummary;