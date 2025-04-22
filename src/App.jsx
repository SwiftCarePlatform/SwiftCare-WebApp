import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import ConsultPage from "./SubHeader/Consult";
import HealthSupport from "./SubHeader/Health";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<SwiftCare />} />
        <Route path="/consult" element={<ConsultPage />} />
        <Route path="/health" element={<HealthSupport />} />
      </Routes>
    </Router>
  );
};

export default App;
