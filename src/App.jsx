import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { useUser } from "./UserContext.jsx";
// import { ToastContainer } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css"; 
import Cart from "./CartPage/CartView.jsx";


const App = () => {

  const { isLoggedIn} = useUser(); // Access the isLoggedIn state from UserContext
  return (
    <>
    <Routes>
      <Route path="/" element={<SwiftCare isLoggedIn={isLoggedIn} />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="/health" element={<HealthSupport />} />
      <Route path="/mental" element={<MentalService/>} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<CreateAccountForm />} />
      <Route path="/register/confirm" element={<ConfirmationEmail />} />
      <Route path="/register/complete" element={<RegisterComplete />} />

      {/* 404 Not Found Route */}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    

    {/* Toast notifications will appear at the top center of the screen */}

    {/* <ToastContainer position="top-center" autoClose={5000} />   */}
    </>
  );
};

export default App;
