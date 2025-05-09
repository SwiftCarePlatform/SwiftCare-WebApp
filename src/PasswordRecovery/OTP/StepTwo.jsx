import React, { useState } from "react";
import "./StepTwo.css";
import ProgressSteps from "../ProgressSteps";
import otpImage from "../../assets/otp.png";
import { FaUserMd } from "react-icons/fa";

function StepTwo({ currentStep, onNext }) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1); // only keep last digit
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Move to next input if value entered
    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(Code entered: ${code.join("")});
    onNext();
  };

  return (
    <section className="otp-container">
      <div className="otp-left">
        <div className="otp">
          <div className="otp-box">
            <FaUserMd className="otp-icon" />
          </div>
          <span>SWIFTCARE</span>
        </div>
        <div className="otp-text">
          <h1 className="otp-title">OTP Verification</h1>
          <p className="otp-description">
            Enter the verification code sent to your email address.
          </p>
        </div>
      </div>

      <form className="otp-form" onSubmit={handleSubmit}>
        <ProgressSteps currentStep={currentStep} />
        <img src={otpImage} alt="Otp Image" className="forgot-image" />
        <div className="otp-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="otp-input"
            />
          ))}
        </div>
        <button type="submit" className="otp-form-button">
          Verify
        </button>
        <p className="otp-resend-text">
          Didn't receive the code?{" "}
          <a href="#" className="otp-resend">
            Resend
          </a>
        </p>
      </form>
    </section>
  );
}

export default StepTwo;