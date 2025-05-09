import React, { useState } from "react";
import ProgressSteps from "../ProgressSteps";
import "./StepThree.css";
import newImage from "../../assets/newpassword.png";
import { FaUserMd } from "react-icons/fa";

function StepThree({ currentStep, onNext }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // clear any existing errors
    onNext();
  };

  return (
    <section className="reset-container">
      <div className="reset-left">
        <div className="new-password">
          <div className="new-password-box">
            <FaUserMd className="new-password-icon" />
          </div>
          <span>SWIFTCARE</span>
        </div>
        <div className="new-password-text">
          <h2>Create New Password</h2>
          <p>Your new password must be unique from those previously used.</p>
        </div>
      </div>

      <form className="reset-form" onSubmit={handleSubmit}>
        <div className="reset-progress">
          <ProgressSteps currentStep={currentStep} />
        </div>

        <img src={newImage} alt="New Password" className="forgot-icon-image" />

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
        </div>

        <button type="submit" className="new-form-button">
          Reset Password
        </button>
      </form>
    </section>
  );
}

export default StepThree;
