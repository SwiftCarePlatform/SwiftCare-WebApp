import React from "react";
import "./ForgotPassword.css";
import { FaUserMd } from "react-icons/fa";

function LeftPanel() {
  return (
    <div className="green-container">
      <div className="forgot">
        <div className="forgot-box">
          <FaUserMd className="forgot-icon" />
        </div>
        <span>SWIFTCARE</span>
      </div>

      <div className="forgot-text">
        <h1>Forgot password?</h1>
        <p>
          Don’t worry! It occurs. Please enter the email address linked to your
          account.
        </p>
      </div>
    </div>
  );
}

export default LeftPanel;