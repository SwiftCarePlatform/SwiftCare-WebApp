import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Login.css";
// import { useNavigate } from "react-router-dom";

function EmailPage({ onSignupClick }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
      errors.password = "Password must be at least 8 characters and include a number and special character.";
    }
    

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Logging in with:", { email, password });
      // navigate("/home"); // Uncomment if using React Router
    }
  };

  const handleSignup = () => {
    onSignupClick(2);
  };

  return (
    <form className="Email-form" onSubmit={handleSubmit}>
      <h2>Log in</h2>

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Jessica@example.com"
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <label>Password</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Minimum 8 characters, 1 number, 1 special character"
        />
        <span
          className="email-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>
      {errors.password && <p className="error-text">{errors.password}</p>}

      <button className="Email-button">Log in</button>

      <div className="Email-links">
        <a href="#">Forgot Password?</a>
        <p>
          New to Swiftcare?{" "}
          <a href="#" onClick={handleSignup}>
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}

export default EmailPage;
