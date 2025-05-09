import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaUserCircle, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo/Logo";
import { useUser } from "../UserContext"; 
// import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLoginClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/login");
  };

  const handleRegisterClick = () => {
    if (isMobileView) toggleMobileMenu();
    navigate("/register");
  };

  const handleConsultClick = (e) => {
    if (!user) {
      e.preventDefault(); // stop the NavLink navigation
      toast.warning("You need to log in to access Consult Page.");
      if (isMobileView) toggleMobileMenu();
      return;
    }
    if (isMobileView) toggleMobileMenu();

  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    setUser(null); 
    navigate("/login"); // Redirect to login page after logout
  };

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
            className={({ isActive }) => (isActive ? "nav-link current-state" : "nav-link")}
            onClick={handleConsultClick}
          >
            Consult a Doctor
          </NavLink>
          <a
            href="#emergency"
            className="nav-link"
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Emergency Helplines
          </a>
          <NavLink
            to="/mental"
            className={({ isActive }) => (isActive ? "nav-link current-state" : "nav-link")}
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Emotional Wellbeing
          </NavLink>
          <NavLink
            to="/health"
            className={({ isActive }) => (isActive ? "nav-link current-state" : "nav-link")}
            onClick={() => isMobileView && toggleMobileMenu()}
          >
            Community/Health Support
          </NavLink>


          {/* Mobile Auth Buttons */}
          {isMobileView && (
              <div className="cart-icons">
              <FaShoppingCart
                size={22}
                className="cart-icon"
                onClick={() => navigate("/cart")}
                style={{ cursor: "pointer", marginRight: "1rem" }}
              />
              {user ? (
                <div
                  className="user-section"
                  onClick={() => navigate("/profile")}
                  title="Profile"
                  style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                >
                  <FaUserCircle size={24} className="circle-icon" />
                  <span style={{ marginLeft: "0.3rem" }}>{user.firstName}</span>
                  <button className="logout-btn" onClick={handleLogout} title="Logout">
                    <FaSignOutAlt size={15} className="signout" />
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button className="handle-login mobile-login" onClick={handleLoginClick}>
                    Login
                  </button>
                  <button className="handle-register" onClick={handleRegisterClick}>
                    Register
                  </button>
                </>
              )}
            </div>
          )}
        </nav>

        {/* Desktop Cart and User Section */}
        {!isMobileView && (
          <div className="cart-icons" title="Cart">
            <FaShoppingCart
              size={22}
              className="cart-icon"
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer", marginRight: "1rem" }}
            />
            {user ? (
              <div
                className="user-section"
                onClick={() => navigate("/profile")}
                title="Profile"
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <FaUserCircle size={24} className="circle-icon" />
                <span style={{ marginLeft: "0.3rem" }}>{user.firstName}</span>
                <button className="logout-btn" onClick={handleLogout} title="Logout">
                  <FaSignOutAlt size={15} className="signout" />
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons desktop-auth">
                <button className="handle-login" onClick={handleLoginClick}>
                  Login
                </button>
                <button className="handle-register" onClick={handleRegisterClick}>
                  Register
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

















































































// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Header.css";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Logo from "./Logo/Logo";


// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

  
//   const handleLoginClick = () => {
//     if (isMobileView) toggleMobileMenu();
//     navigate("/login");
//   }

//   const handleRegisterClick = () => {
//     if (isMobileView) toggleMobileMenu();
//     navigate("/register");
//   }



//   // Handle screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 768);
//       if (window.innerWidth > 768) {
//         setIsMobileMenuOpen(false); // Close menu when returning to desktop
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="logo">
//           <Logo />
//         </div>

//         {isMobileView && (
//           <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </div>
//         )}

//         <nav className={`navigation ${isMobileMenuOpen ? "active" : ""}`}>
//           <NavLink
//             to="/consult"
//             className={({ isActive }) =>
//               isActive ? "nav-link current-state" : "nav-link"
//             }
//             onClick={() => isMobileView && toggleMobileMenu()}
//           >
//             Consult a Doctor
//           </NavLink>
//           <a
//             href="#emergency"
//             className="nav-link"
//             onClick={() => isMobileView && toggleMobileMenu()}
//           >
//             Emergency Helplines
//           </a>
//           <NavLink
//            to="/mental"
//             className={({ isActive }) =>
//               isActive ? "nav-link current-state" : "nav-link"
//              }
//             onClick={() => isMobileView && toggleMobileMenu()}
//           >
//             Emotional Wellbeing
//           </NavLink>
//           <NavLink
//             to="/health"
//             className={({ isActive }) =>
//               isActive ? "nav-link current-state" : "nav-link"
//             }
//             onClick={() => isMobileView && toggleMobileMenu()}
//           >
//             Community/Health Support
//           </NavLink>

//           {/* Conditionally render auth buttons inside nav for mobile */}
//           {isMobileView && (
//             <div className="auth-buttons mobile-auth">
//               <button className="handle-login" onClick={handleLoginClick} >
//                 Login
//               </button>
//               <button className="handle-register" onClick={handleRegisterClick}>Register</button>
//             </div>
//           )}
//         </nav>

//         {/* Render desktop auth buttons only on larger screens */}
//         {!isMobileView && (
//           <div className="auth-buttons desktop-auth">
//             <button className="handle-login" onClick={handleLoginClick}>
//               Login
//             </button>
//             <button className="handle-register" onClick={handleRegisterClick}>Register</button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
