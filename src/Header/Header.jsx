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

  const navigate = useNavigate();

  // const navigate = useNavigate();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const handleLoginClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/login");
  }

  const handleRegisterClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/register");
  }
  

  // const handleLoginClick = () => {
  //   if (isMobileView) toggleMobileMenu();
  //   navigate("/login");
  // };


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

              <button className="login-btn" onClick={handleLoginClick}>Login</button>
              <button className="register-btn" onClick={handleRegisterClick}>Register</button>

            

            </div>
          )}
        </nav>

        {/* Render desktop auth buttons only on larger screens */}
        {!isMobileView && (
          <div className="auth-buttons desktop-auth">

            <button className="login-btn" onClick={handleLoginClick}>Login</button>
            <button className="register-btn" onClick={handleRegisterClick}>Register</button>

           

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
