import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => { 
    const { products, inititalCart } = useLoaderData();
    const [cart, setCart] = useState(inititalCart);
    
    return (
      <div className="shop-container">
        <div className="orders-container">
            {
                cart.map(product => <ReviewItem product={product} key={product.id}></ReviewItem>)
            }
        </div>
        <div className="order-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Orders;