import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";
import Login from "./LoginSection/Login";
import Register from "./LoginSection/Register";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<SwiftCare />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/health" element={<HealthSupport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};


export default App;
