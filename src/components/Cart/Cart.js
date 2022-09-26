import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping ;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
      <div className="cart">
        <h3>Order Summary</h3>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Cost: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      </div>
    );
};

export default Cart;