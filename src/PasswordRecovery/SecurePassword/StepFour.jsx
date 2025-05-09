import React from "react";
import ProgressSteps from "../ProgressSteps";
import "./StepFour.css";
import secureImage from "../../assets/welcomeimage.png";
import { FaUserMd } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function StepFour({ currentStep }) {
  const navigate = useNavigate(); // Initialize useNavigate
  const handleGoToLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <section className="step-four-container">
      <div className="step-four-left">
        <div className="otp">
          <div className="otp-box">
            <FaUserMd className="otp-icon" />
          </div>
          <span>SWIFTCARE</span>
        </div>
        <div className="welcome-text">
          <h1>Welcome Back!</h1>
          <p>Keep your password secured to protect your account.</p>
        </div>
      </div>

      <div className="step-four-right">
        <div className="step-four-progress">
          <ProgressSteps currentStep={currentStep} />
        </div>

        <img src={secureImage} alt="Welcome Image" className="forgot-image" />
        <h3>Password has been reset successfully</h3>
        <button className="welcome-form-button" onClick={handleGoToLogin}>
          Go to Log In
        </button>
      </div>
    </section>
  );
}

export default StepFour;