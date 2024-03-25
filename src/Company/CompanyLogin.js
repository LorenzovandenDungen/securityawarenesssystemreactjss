import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function CompanyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/companypage");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h2>Company Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default CompanyLogin;
