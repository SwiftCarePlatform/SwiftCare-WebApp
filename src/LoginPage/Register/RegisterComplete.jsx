import React from "react";
import "./RegisterComplete.css";
import RegisterCompleteImage from "../../assets/registercomplete.png";

function RegisterComplete({resetToLogin}) {

  const handleGoToLogin = () => {
    resetToLogin();
 
  }
 
  return (
    <div className="registration-complete-container">
      <img
        src={RegisterCompleteImage}
        alt="Registration Complete"
        className="registration-image"
      />
      <h2 className="registration-title">Congratulations!</h2>
      <p className="registration-text">Registration Complete</p>
      <button to="/login" className="registration-button"  onClick={handleGoToLogin}>
      Go to Log in
      </button>
    </div>
  );
}


export default RegisterComplete;