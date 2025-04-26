// import React, { useState } from "react";
import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaUserMd } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Register.css";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility


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
          <p>
            Create your secure account to access compassionate care and support.
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-text">
          <h4>Create Your Account</h4>
        </div>

        <form action="signup">
          {/* Row for First Name and Last Name */}
          <div className="name-row">
            <div className="firstname">
              <label>First Name</label>
              <input type="text" placeholder="Jessica" required />
            </div>
            <div className="lastname">
              <label>Last Name</label>
              <input type="text" placeholder="Smith" required />
            </div>
          </div>

          {/* Row for Email */}
          <div className="email-row">
            <label>Email</label>
            <input type="email" placeholder="jessica@example.com" required />
          </div>

          {/* Row for Phone number */}
          <div className="phone-row">
            <label>Phone Number</label>
            <PhoneInput
              country={"ng"} // Default country
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                padding: "26px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            />
          </div>

          {/* Row for Password */}
          <div className="password-row">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {/* Row for Confirm Password */}
          <div className="confirm-password-row">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="register-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
