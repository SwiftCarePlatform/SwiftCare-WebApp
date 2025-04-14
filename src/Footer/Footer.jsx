import React from 'react';
import './Footer.css';
import { FaUserMd } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
        <div className="footer-section footer-brand">
          <div className="footer-row">
            <div className="footer-box">
              <FaUserMd className="doctor-icon" />
            </div>
            <span className="footer-text">SWIFTCARE</span>
          </div>
          <p className="logo-description">
            Swiftcare champions your holistic health, guiding you through grief with compassionate services, and ensuring your well-being is a priority.
          </p>
        </div>

        <div className="footer-section">
          <p className='footer-para'>Company</p>
          <ul>
            <li>About</li>
            <li>Features</li>
          </ul>
        </div>

        <div className="footer-section">
          <p className='footer-para'>Help</p>
          <ul>
            <li>Customer Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <p className='footer-para'>Newsletter</p>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy;{new Date().getFullYear()} All Rights Reserved by ClarityUI</p> 
      </div>
    </footer>
  );
};

export default Footer;










// .footer p{
//     color: #fff;
//     text-align: center;
//     margin-top: 15px;
//     margin-bottom: 10px;
//     font-size: 1rem;

//   }
