import React from 'react';
import { Link } from "react-router-dom";
import { FaUserMd } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";

function CartNav({ cartItemCount }) {
  return (
    <div className="cart-nav-container">
      <div className="cart-logo">
        <div className="cart-logo-box">
          <FaUserMd className="cart-logo-icon" />
        </div>
        <span>SWIFTCARE</span>
      </div>
      <div className="cart-icon-container">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart className="cart-icon" />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </Link>
      </div>
    </div>
  );
}

{/* <div className="cart-nav-container">
  <div className="cart-logo">
    <div className="cart-logo-box">
      <FaUserMd className="cart-logo-icon" />
    </div>
    <span>SWIFTCARE</span>
  </div>
</div>; */}

export default CartNav;
