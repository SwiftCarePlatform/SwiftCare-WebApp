import React from "react";
import { Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
import "./index.css";
import MentalService from "./SubHeader/Mental";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<SwiftCare />} />
      <Route path="/consult" element={<ConsultPage />} />
      <Route path="/health" element={<HealthSupport />} />
      <Route path="/mental" element={<MentalService/>} />
    </Routes>
  );
};

export default App;
