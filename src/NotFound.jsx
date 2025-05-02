import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./NotFound.css";
import NotFoundImage from "./assets/404-page.svg"; // Ensure you have a not found image

function NotFoundPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <motion.div 
      className="notfound-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="notfound-content">
        <img
          src={NotFoundImage}
          alt="404 Not Found"
          className="notfound-image"
        />
        <p className="notfound-text">Oops! Page not found.</p>
        <p className="notfound-subtext">
          The page you’re looking for might have been removed or is
          temporarily unavailable.
        </p>
        <button className="notfound-button" onClick={goHome}>
          ⬅ Back to Home
        </button>
      </div>
    </motion.div>
  );
}

export default NotFoundPage;
