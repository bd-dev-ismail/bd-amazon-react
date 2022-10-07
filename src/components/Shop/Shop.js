import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const products = useLoaderData();
    const [cart , setCart] = useState([]);
    const clearCart = ()=>{
      setCart([]);
      deleteShoppingCart();
    }
    useEffect(()=>{
      const storedCart = getStoredCart();
      const savedCart = [];
      for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        
        if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct)
        }
      }
      setCart(savedCart)
    },[products])
    const handalCart = (selectedProduct) =>{
      let newCart = [];
        const exist = cart.find(product => product.id = selectedProduct.id);
        if(!exist){
          selectedProduct.quantity = 1;
          newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
      <div className="shop-container">
        <div className="product-container">
          {products.map((product, index) => (
            <Product
              product={product}
              key={index}
              handalCart={handalCart}
            ></Product>
          ))}
        </div>
        <div className="order-container">
          <Cart cart={cart} clearCart={clearCart}>
            <Link to="/orders">
              <button className="review-btn">
                Review Order
                <i style={{marginLeft: '10px'}} class="fa-solid fa-arrow-right-long"></i>
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    );
};

export default Shop;