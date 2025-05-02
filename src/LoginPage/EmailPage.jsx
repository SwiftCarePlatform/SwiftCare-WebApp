import React, {useState} from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Login.css";
// import { useNavigate } from "react-router-dom";

function EmailPage({onSignupClick}) {
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: validation or API call
    // navigate("/home"); // Redirect to the home page after successful login
  };

  const handleSignup = () => {
    onSignupClick(2); 
  };


  return (
    <form className="Email-form" onSubmit={handleSubmit} >
      <h2>Log in</h2>
      <label>Email</label>
      <input type="email" placeholder="Jessica@example.com" />

      <label>Password</label>
      <div className="password-field">
        <input
          type={showPassword ? "text" : "password"}
          className="password-input"
          placeholder="Minimum 8 characters, 1 number, 1 special character"
        />
        <span
          className="email-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
      </div>

      <button className="Email-button">Log in</button>
      <div className="Email-links">
        <a href="#">Forgot Password?</a>
        <p>
          New to Swiftcare?{" "}
          <a href="#" onClick={handleSignup}>
            Sign up
          </a>
        </p>
      </div>
     
    </form>
  );
}
export default EmailPage;