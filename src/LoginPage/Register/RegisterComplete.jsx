import React from "react";
import "./RegisterComplete.css";
import { useNavigate } from "react-router-dom";
import RegisterCompleteImage from "../../assets/registercomplete.png";

function RegisterComplete() {
  const navigate = useNavigate();
  const handleGoToLogin = () => {
    navigate("/login"); // Navigate back to login page
  };

  // you uncomment the above code when you implement the onClick inside the button.


  return (
    <div className="registration-complete-container">
      <img
        src={RegisterCompleteImage}
        alt="Registration Complete"
        className="registration-image"
      />
      <h2 className="registration-title">Congratulations!</h2>
      <p className="registration-text">Registration Complete</p>
      <button className="registration-button" onClick={handleGoToLogin}> 
        Go to Log in
      </button>
    </div>
  );
}


export default RegisterComplete;