import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import Logo from "./Logo/Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false); // Close menu when returning to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Logo />
        </div>

        {isMobileView && (
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        )}

        <nav className={`navigation ${isMobileMenuOpen ? "active" : ""}`}>
          <a href="#consult" className="nav-link" onClick={() => isMobileView && toggleMobileMenu()}>
            Consult a doctor
          </a>
          <a href="#emergency" className="nav-link" onClick={() => isMobileView && toggleMobileMenu()}>
            Emergency
          </a>
          <a href="#mental-health" className="nav-link" onClick={() => isMobileView && toggleMobileMenu()}>
            Mental health
          </a>
          <a href="#community" className="nav-link" onClick={() => isMobileView && toggleMobileMenu()}>
            Community/health support
          </a>

          {/* Conditionally render auth buttons inside nav for mobile */}
          {isMobileView && (
            <div className="auth-buttons mobile-auth">
              <button className="login-btn">Login</button>
              <button className="register-btn">Register</button>
            </div>
          )}
        </nav>

        {/* Render desktop auth buttons only on larger screens */}
        {!isMobileView && (
          <div className="auth-buttons desktop-auth">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
