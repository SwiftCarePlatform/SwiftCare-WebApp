import React from "react";
import doctorImage from '../assets/doctors.png';  
import './SwiftCareLogo.css'; 
import { FaUserDoctor } from "react-icons/fa6";


const SwiftCareLogo = () => {

  return (
    <div className="image-container">
    <div className="image-overlay"></div>
    <img src={doctorImage} alt="Doctors smiling" className="doctor-image" />
      <div className="logo-icon-container">
        <FaUserDoctor className="icon-ll"/>
      </div>
      <div className="heading">
      <h2 className="logo-text">SWIFTCARE</h2>
      </div>

    </div>
  );
};

export default SwiftCareLogo;
