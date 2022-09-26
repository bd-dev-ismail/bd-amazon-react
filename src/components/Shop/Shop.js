import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
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
          {products.map((product) => (
            <Product product={product} key={product.id} handalCart={handalCart}></Product>
          ))}
        </div>
        <div className="order-container">
          <Cart cart={cart}/>
        </div>
      </div>
    );
};

export default Shop;