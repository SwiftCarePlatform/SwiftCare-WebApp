import React from "react";
import { Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
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
  );
};

export default App;
