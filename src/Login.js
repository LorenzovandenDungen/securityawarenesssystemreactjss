import React from "react";
import "./Login.css";
import WebSecLogo from "./Websec.png"; // Path needs to be set correctly

function Login() {
  // Add your login logic here for each role

  return (
    <div className="login">
      <div className="login__container">
        <h1>Welcome to the Security Awareness System</h1>
        <img src={WebSecLogo} alt="WebSec Logo" className="login__logo" /> {/* This line will insert the logo */}
        <p>Please log in:</p>
        <div className="login__role">
          <h2>Admin</h2>
          <p>Manage users, send invites, and create trainings.</p>
          <button className="login__btn admin">Admin Login</button>
        </div>
        <div className="login__role">
          <h2>Employee</h2>
          <p>Access your training and check your grades.</p>
          <button className="login__btn employee">Employee Login</button>
        </div>
        <div className="login__role">
          <h2>Company</h2>
          <p>Manage grades and adjust configurations.</p>
          <button className="login__btn company">Company Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;