import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';
import SwiftCareLogo from '../Feature2/SwiftCareLogo';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    saveToAccount: false
  });

  // This would typically come from a cart context/state management
  const subtotal = 35000.00;
  const fee = 0.00;
  const total = subtotal + fee;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    const handler = PaystackPop.setup({
      key: 'pk_test_3b49f4de38f5761b49c8cdc3680407411f0da646', // Paystack public key
      email: formData.email,
      amount: total * 100, // Convert to kobo
      currency: 'NGN',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      firstname: formData.firstName,
      lastname: formData.lastName,
      onClose: function() {
        alert('Payment window closed');
      },
      callback: function(response) {
        // Handle successful payment
        alert('Payment complete! Reference: ' + response.reference);
        navigate('/payment-success');
      }
    });

    handler.openIframe();
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <SwiftCareLogo />
      </div>
      
      <div className="checkout-content">
        <div className="checkout-form-section">
          <Link to="/cart" className="back-to-cart">
            ← Back to cart
          </Link>
          
          <h2 className="checkout-title">Checkout when you are ready. No rush.</h2>
          
          <form onSubmit={handlePayment} className="checkout-form">
            <div className="form-section">
              <h3>Patient Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="checkout-summary">
          <div className="summary-section">
            <h3>Booking Summary</h3>
            <div className="service-item">
              <span>SwiftCare Service</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="pricing-breakdown">
            <h3>Pricing Breakdown</h3>
            <div className="price-row">
              <span>Subtotal</span>
              <span>₦{subtotal.toFixed(2)}</span>
            </div>
            <div className="price-row">
              <span>Fee</span>
              <span>₦{fee.toFixed(2)}</span>
            </div>
            <div className="price-row total">
              <span>Total</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="payment-section">
            <div className="secured-by">
              <span>Secured by Paystack</span>
              <div className="payment-logos">
                <img src="https://assets.paystack.com/assets/img/logos/cards.png" alt="Payment methods" />
              </div>
            </div>

            <div className="save-account">
              <input
                type="checkbox"
                id="saveToAccount"
                name="saveToAccount"
                checked={formData.saveToAccount}
                onChange={handleInputChange}
              />
              <label htmlFor="saveToAccount">Save to account</label>
            </div>

            <p className="privacy-notice">
              Your personal data will be used to process your order, support your
              experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>

            <button 
              className="pay-now-button"
              onClick={handlePayment}
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
