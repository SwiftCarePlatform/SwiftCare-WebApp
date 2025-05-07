import React, { useState } from "react";
import "./CartView.css";
import CartNav from "./CartNav"; 
// import { div } from "framer-motion/client";
import DiabetesImage from "../assets/Diabetes.png";
import GeneralImage from "../assets/General.png";
import DNAImage from "../assets/DNA.png";
import FluImage from "../assets/Flu.png";

const initialCartItems = [
  {
    id: 1,
    title: "Diabetes Checkup Package",
    description: "Includes blood sugar, cholesterol, and HbA1c tests",
    price: 90,
    quantity: 1,
    image: DiabetesImage,
  },
  {
    id: 2,
    title: "General Health Screening",
    description: "Includes CBC, urinalysis, liver & kidney function tests",
    price: 80,
    quantity: 1,
    image: GeneralImage,
  },
  {
    id: 3,
    title: "DNA Ancestry Test",
    description:
      "Explore your heritage with a full DNA analysis and health risk report",
    price: 80,
    quantity: 1,
    image: DNAImage,
  },
  {
    id: 4,
    title: "Flu Vaccine (Quadrivalent)",
    description:
      "Annual influenza shot, protects against 4 strains of the flu virus",
    price: 80,
    quantity: 1,
    image: FluImage,
  },
];

export default function CartView() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promo, setPromo] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxAndFees = 15;
  const privateServiceFee = 5;
  const total = subtotal + taxAndFees + privateServiceFee;

  return (
    <div>
      <CartNav cartItemCount={cartItems.length} />
    <div className="cart-container">
      <div className="cart-items-section">
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
              </div>
              <div className="item-controls">
                <span className="item-price">${item.price}</span>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity.toString().padStart(2, "0")}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="delete-button"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="summary-section">
        <div className="promo-section">
          <input
            type="text"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button className="apply-button">Apply</button>
        </div>
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Tax and Fees</span>
            <span>${taxAndFees.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Private service</span>
            <span>${privateServiceFee.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>
              Total ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
    </div>
  );
}
