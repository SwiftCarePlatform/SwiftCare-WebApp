import React from "react";
import { Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
<<<<<<< HEAD
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
    
=======
import Login from "./LoginSection/Login";
import "./index.css";
import Register from "./LoginSection/register";
import MentalService from "./SubHeader/Mental";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<SwiftCare />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="/health" element={<HealthSupport />} />
      <Route path="/mental" element={<MentalService/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
>>>>>>> 7aa1fce1e4514694d02493b18571656cf249d086
  );
};

export default App;
