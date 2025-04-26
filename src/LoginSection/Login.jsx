import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaUserMd } from 'react-icons/fa';
import "./LogIn.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-containerr">
      <div className="login-left-side">
        <div className="login-logo-side">
            <div className="login-house">
            <FaUserMd className="login-icon" />
            </div>
          <span>SWIFTCARE</span>
        </div>
        <div className="login-left-text">
        <h1>Let’s set you up on your journey to quality health</h1>
        <p>Create your secure account to access compassionate care and support.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-form">
          <h2>Log in</h2>
          <label>Email</label>
          <input type="email" placeholder="Jessica@example.com" />

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"} className="password-input"
              placeholder="Minimum 8 characters, 1 number, 1 special character"
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <button className="login-btnn">Log in</button>

          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <p>
              New to Swiftcare? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;