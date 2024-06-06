import React from 'react';
import './Product.css';

function Product({ img, name, description, price }) {
  const originalPrice = price; // Assuming the original price is provided
  const discountPrice = price + price * 0.41; // Assuming a 41% discount

  return (
    <div className="product">
      <div className="product-card">
        <img className="product-image" src={img} alt={name} />
        <div className="product-content">
          <h5>{name}</h5>
          <p className="product-description">{description}</p>
          <div className="price-container">
            <span className="original-price">₹{originalPrice.toFixed(2)}</span>
            <span className="discount-price">₹{discountPrice.toFixed(2)}</span>
            <div className="discount-badge">41% OFF</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
