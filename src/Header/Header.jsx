import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Logo from "./Logo/Logo";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  // const navigate = useNavigate();
>>>>>>> 5d1b9e69dc186d4cf4217e5b01e457ca36c32402

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

<<<<<<< HEAD
  const handleLoginClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/login");
  }

  const handleRegisterClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/register");
  }
  
=======
  // const handleLoginClick = () => {
  //   if (isMobileView) toggleMobileMenu();
  //   navigate("/login");
  // };

>>>>>>> 5d1b9e69dc186d4cf4217e5b01e457ca36c32402
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
          <NavLink
            to="/consult"
            className={({ isActive }) =>
              isActive ? "nav-link current-state" : "nav-link"
            }
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Consult a doctor
          </NavLink>
          <a
            href="#emergency"
            className="nav-link"
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Emergency
          </a>
          <a
            href="#mental-health"
            className="nav-link"
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Mental health
          </a>
          <NavLink
            to="/health"
            className={({ isActive }) =>
              isActive ? "nav-link current-state" : "nav-link"
            }
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Community/health support
          </NavLink>

          {/* Conditionally render auth buttons inside nav for mobile */}
          {isMobileView && (
            <div className="auth-buttons mobile-auth">
<<<<<<< HEAD
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="register-btn" onClick={handleRegisterClick}>Register</button>
=======
              <button className="login-btn" >
                Login
              </button>
              <button className="register-btn">Register</button>
>>>>>>> 5d1b9e69dc186d4cf4217e5b01e457ca36c32402
            </div>
          )}
        </nav>

        {/* Render desktop auth buttons only on larger screens */}
        {!isMobileView && (
          <div className="auth-buttons desktop-auth">
<<<<<<< HEAD
            <button className="login-btn" onClick={handleLoginClick}>Login</button>
            <button className="register-btn" onClick={handleRegisterClick}>Register</button>
=======
            <button className="login-btn">
              Login
            </button>
            <button className="register-btn">Register</button>
>>>>>>> 5d1b9e69dc186d4cf4217e5b01e457ca36c32402
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
