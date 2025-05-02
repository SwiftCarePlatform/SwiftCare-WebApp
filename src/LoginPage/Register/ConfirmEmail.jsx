import React from "react";
import "./ConfirmEmail.css";
import ConfirmEmailImage from "../../assets/confirmEmail.png"

function ConfirmationEmail({ onNext }) {
  return (
    <div className="confirmation-container">
      <img
        src={ConfirmEmailImage}
        alt="Confirmation"
        className="confirmation-image"
      />
      <h2 className="confirmation-title">Confirmation Email</h2>
      <p className="confirmation-text">
        Click on the button below to validate your registration
      </p>
      <button className="confirmation-button" onClick={onNext}>
        Validate Registration
      </button>
    </div>
  );
}

export default ConfirmationEmail;