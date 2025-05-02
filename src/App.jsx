import React from "react";
import { Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
import "./index.css";
import MentalService from "./SubHeader/Mental";
import LoginPage from "./LoginPage/Login";
import CreateAccountForm from "./LoginPage/Register/SignUp";
import ConfirmationEmail from "./LoginPage/Register/ConfirmEmail";
import RegisterComplete from "./LoginPage/Register/RegisterComplete";
import NotFoundPage from "./NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SwiftCare />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="/health" element={<HealthSupport />} />
      <Route path="/mental" element={<MentalService/>} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<CreateAccountForm />} />
      <Route path="/register/confirm" element={<ConfirmationEmail />} />
      <Route path="/register/complete" element={<RegisterComplete />} />




      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
