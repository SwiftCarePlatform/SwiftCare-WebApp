import React from "react";
import "./Login.css";
import { FaUserMd } from 'react-icons/fa';

function LeftSide() {
  return (
    <div className="left-side-login">
      <div className="left-side-logo">
        <div className="left-side-box">
          <FaUserMd className="left-side-icon" />
        </div>
        <span>SWIFTCARE</span>
      </div>
      <div className="left-side-text">
        <h1>Let’s set you up on your journey to quality health</h1>
        <p>
          Create your secure account to access compassionate care and support.
        </p>
      </div>
    </div>
  );
}

export default LeftSide;