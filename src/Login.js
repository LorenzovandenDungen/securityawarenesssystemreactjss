import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("Company");
  const [inviteCode, setInviteCode] = useState("");
  const [isCodeActivated, setIsCodeActivated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "Company") {
      navigate("/company");
    } else if (role === "Admin") {
      navigate("/admin");
    }
  };

  const handleInviteCode = () => {
    // Placeholder for invite code validation logic
    // This is where you'd check if the invite code is valid
    // For demonstration, we'll assume any input activates the code
    if (inviteCode.trim() !== "") {
      setIsCodeActivated(true);
    } else {
      setIsCodeActivated(false); // Keep button disabled if no code is entered
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <select
          className="login__roleSelect"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Company">Company</option>
          <option value="Admin">Admin</option>
        </select>
        <div className="login__inviteCode">
          <input
            type="text"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Enter Invite Code"
          />
          <button onClick={handleInviteCode}>Activate</button>
        </div>
        {isCodeActivated ? (
          <button className="login__btn" onClick={handleLogin}>
            Login
          </button>
        ) : (
          <p className="login__msg">
            Please enter a valid invite code to activate login.
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
