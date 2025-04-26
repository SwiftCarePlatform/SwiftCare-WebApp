import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwiftCare from "./SwiftCare";
import Login from "./LoginSection/Login";
import Register from "./LoginSection/Register";
import Header from "./Header/Header";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<SwiftCare />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
