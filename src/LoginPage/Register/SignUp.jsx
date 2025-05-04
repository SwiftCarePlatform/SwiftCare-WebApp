import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useUser } from "../../UserContext.jsx";

const CreateAccountForm = ({ onNext }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); 
  const { setIsLoggedIn } = useUser(); // Access the setIsLoggedIn function from UserContext

  
  const validateForm = () => {
    const errors = {};

    if (!firstName.trim()) errors.firstName = "First name is required.";
    if (!lastName.trim()) errors.lastName = "Last name is required.";
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address.";
    }

    if (!phone.trim()) errors.phone = "Phone number is required.";
    if (!password) {
      errors.password = "Password is required.";
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      errors.password = "Password must be at least 8 characters and include a number and special character.";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    setErrors(validationErrors);
  
    //  Only proceed if no validation errors
    if (Object.keys(validationErrors).length > 0) {
      return; // Stop here, don't move forward
    }

    
    const userData = { firstName, lastName, email, phone };
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Account created:", userData);

    setIsLoggedIn(true); 

    navigate("/"); // redirect to home page
  
    onNext(); // move to next UI step ONLY when valid
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
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className="form-group name-fields">
            <label>Last name</label>
            <input 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Robinson" 
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
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
          {errors.email && <p className="error-text">{errors.email}</p>}
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
          {errors.phone && <p className="error-text">{errors.phone}</p>}
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
          {errors.password && <p className="error-text">{errors.password}</p>}
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
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
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