import React from 'react';
import './Product.css';

const Product = ({ product, handalCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product-card">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-title">{name}</p>
        <p>Price: ${price}</p>
        <p>Manufatures by: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button onClick={() => handalCart(product)} className="cart-btn">
        Add To Cart
        <i style={{marginLeft: '10px'}} class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default Product;

    