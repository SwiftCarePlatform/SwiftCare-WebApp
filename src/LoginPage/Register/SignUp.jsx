import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const CreateAccountForm = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      phone,
      password,
    });
  };

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        <h1>Create Your Account</h1>

        <div className="form-row">
          <div className="form-group name-field">
            <label>First name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Jessica"
            />
          </div>

          <div className="form-group name-fields">
            <label>Last name</label>
            <input 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Robinson" 
            />
          </div>
        </div>

        <div className="form-group  email-field">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Jessica@example.com" 
          />
        </div>

        <div className="form-group">
          <label>Phone number</label>
          <PhoneInput
            country={"ng"}
            value={phone}
            onChange={setPhone}
            inputClass="phone-input"
            containerClass="phone-container"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <div className="password-input">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Minimum 8 characters, 1 number, 1 special character"
            />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>
        </div>

        <button className="form-button" onClick={handleSubmit}>
          <span>CONTINUE SECURELY</span>
          <FaArrowRight />
        </button>

        <p className="login-redirect">
          Already have an account? <a href="#" onClick={handleLoginClick}>Log in</a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccountForm;