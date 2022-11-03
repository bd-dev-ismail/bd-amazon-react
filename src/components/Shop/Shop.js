import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    // const {products, count} = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [cart , setCart] = useState([]);
    const pages = Math.ceil(count / size);
    useEffect(()=>{
      fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
      .then(res=> res.json())
      .then(data => {
        setProducts(data.products);
        setCount(data.count);
      })
    },[page, size])
    const clearCart = ()=>{
      setCart([]);
      deleteShoppingCart();
    }
    useEffect(()=>{
      const storedCart = getStoredCart();
      const savedCart = [];
      const ids = Object.keys(storedCart);
      fetch("http://localhost:5000/productsByIds", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ids),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("ids", data);
          for(const id in storedCart){
            const addedProduct = data.find(product => product._id === id);

            if(addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity = quantity;
              savedCart.push(addedProduct)
            }
          }
          setCart(savedCart)
        });
     
    },[products])
    const handalCart = (selectedProduct) =>{
      let newCart = [];
        const exist = cart.find(product => product._id = selectedProduct._id);
        if(!exist){
          selectedProduct.quantity = 1;
          newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id)
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
                <i style={{marginLeft: '10px'}} className="fa-solid fa-arrow-right-long"></i>
              </button>
            </Link>
          </Cart>
        </div>
        <div className="pagination">
          <p>Currenly Selected Page ${page} & size ${size}</p>
          {
            [...Array(pages).keys()].map(number => <button key={number} onClick={()=> setPage(number)} className={page === number ? 'selected' : ''}>
              {number + 1}
            </button>)
          }
          <select onChange={(e)=> setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    );
};

export default Shop;