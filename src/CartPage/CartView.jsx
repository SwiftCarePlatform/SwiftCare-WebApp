import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartView.css";
import CartNav from "./CartNav"; 
// import { div } from "framer-motion/client";
import ConsultationImage from "../assets/BasicConsultation.jpeg";
import MentalImage from "../assets/Mentalhealth.avif";
import CounselingImage from "../assets/Counceling.jpeg";
import LegacyImage from "../assets/LegacyMemory.jpeg";

const initialCartItems = [
  {
    id: 1,
    title: "Basic Consultation",
    description: "Speak with a licensed healthcare provider about general symptoms and physical wellbeing",
    price: 5000,
    quantity: 1,
    image: ConsultationImage,
  },
  {
    id: 2,
    title: "Mental Health Therapy",
    description: "One-on-one session with a certified therapist to support your mental and emotional well-being",
    price: 5000,
    quantity: 1,
    image: MentalImage,
  },
  {
    id: 3,
    title: "Grief Counseling",
    description:
      "Find comfort through guided sessions designed to help you process loss and heal",
    price: 5000,
    quantity: 1,
    image: CounselingImage,
  },
  {
    id: 4,
    title: "Legacy & Memories Keeping",
    description:
      "Preserve your loved one’s story through audio, video, or written digital keepsakes",
    price: 5000,
    quantity: 1,
    image: LegacyImage,
  },
];

export default function CartView() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [ setPromoApplied] = useState(false);

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
  // const taxAndFees = 15;
  // const privateServiceFee = 5;
  // const total = subtotal; 
  // + taxAndFees + privateServiceFee;

  const handleApplyPromo = () => {
    if (promo === "DISCOUNT10") {
      setDiscount(subtotal * 0.1); // Apply a 10% discount
      setPromoApplied(true);
    } else {
      setDiscount(0); // No discount if promo code is invalid
      setPromoApplied(false);
      alert("Invalid Promo Code");
    }
  };

  const total = subtotal - discount;

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
                <span className="item-price">#{item.price}</span>
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
      <h2>Order Summary</h2>
        <div className="promo-section">
          <input
            type="text"
            placeholder="Promo code"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button className="apply-button" onClick={handleApplyPromo}>Apply</button>
        </div>
        <div className="summary-details">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>#{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Discount</span>
            <span>#{discount.toLocaleString()}</span>
          </div>
          {/* <div className="summary-row">
            <span>Private service</span>
            <span>#{privateServiceFee.toFixed(2)}</span>
          </div> */}
          <div className="summary-row total">
            <span>
              Total
             
            </span>
            <span>#{total.toLocaleString()}</span>
          </div>
        </div>
        <button className="checkout-button" onClick={() => navigate('/checkout')}>CHECKOUT</button>
      </div>
    </div>
    </div>
  );
}
