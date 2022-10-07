import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product, handalRemove }) => {
  const { img, name, price, quantity, shipping, id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img? img : 'No Image Found'} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h5>{name}</h5>
          <p>
            Price: <span style={{ color: "orange" }}>${price}</span>
          </p>
          <p>
            Quantity: <span style={{ color: "orange" }}>{quantity}</span>
          </p>
          <p>
            Shipping: <span style={{ color: "orange" }}>${shipping}</span>
          </p>
        </div>
        <div>
          <button onClick={()=>handalRemove(id)} className="delete-btn">
            <i className="fa-solid fa-trash-can delete-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;