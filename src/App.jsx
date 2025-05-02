import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
import Login from "./LoginPage/Login"; // Import the Login component
import Register from "./LoginPage/Register/RegisterComplete"; // Import the Register component
import ConfirmationEmail from "./LoginPage/Register/ConfirmEmail";

// import Login from "./LoginSection/Login";
// import Register from "./LoginSection/register";
// import EmailConfirmation from "./LoginSection/EmailConfirmation"; // Import the EmailConfirmation component

import "./index.css"; // Import your global CSS file

const App = () => {
  return (
    
      <Routes>
        <Route path="/*" element={<SwiftCare />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/health" element={<HealthSupport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/email-confirmation" element={<ConfirmationEmail />} /> 
      </Routes>
    
  );
};

export default App;
