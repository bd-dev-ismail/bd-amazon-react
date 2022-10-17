import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => { 
    const {  inititalCart } = useLoaderData();
    const [cart, setCart] = useState(inititalCart);
    const handalRemove = (id)=>{
        const remaning = cart.filter(product => product.id !== id);
        setCart(remaning);
        removeFromDb(id);
    }
    const clearCart = () => {
      setCart([]);
      deleteShoppingCart();
    };
    return (
      <div className="shop-container">
        <div className="orders-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.id}
              handalRemove={handalRemove}
            ></ReviewItem>
          ))}
          {cart.length === 0 && (
            <h2>
              No Item to Review. Please <Link to="/">Shop More</Link>
            </h2>
          )}
        </div>
        <div className="order-container">
          <Cart cart={cart} clearCart={clearCart}>
            <Link to="/shipping">
              <button className="review-btn">
                Procced to Shipping
                <i
                  style={{ marginLeft: "10px" }}
                  className="fa-solid fa-arrow-right-long"
                ></i>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Orders;