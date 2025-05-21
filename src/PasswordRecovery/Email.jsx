import React, {useState} from "react";
import "./ForgotPassword.css";
import forgotImage from "../assets/ForgotPass.png";

function EmailForm({ onNext }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateEmail();
    if (isValid) {
      // Optional: validation or API call
        onNext(); // trigger step change
    }
  };

  const validateEmail = () => {
    const errors = {};

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }






  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <img src={forgotImage} alt="" className="forgot-icon-image" />
      <div className="email-form__group">
        <label htmlFor="email" className="email-form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Jessica@example.com"
          className="email-form__input"
        />
         {errors.email && <p className="error-text">{errors.email}</p>}
        <button type="submit" className="email-form-button">
          Send Code
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
