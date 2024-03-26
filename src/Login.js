import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Login.css';
import WebSecLogo from './Websec.png'; // Ensure this path is correct

function Login() {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleAdminLogin = () => {
    // Placeholder for login logic
    navigate('/admin'); // Use navigate to redirect
  };

  const handleEmployeeLogin = () => {
    // Placeholder for login logic
    navigate('/employee'); // Use navigate to redirect
  };

  const handleCompanyLogin = () => {
    // Placeholder for login logic
    navigate('/company'); // Use navigate to redirect
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h1>Welcome to the Security Awareness System</h1>
        <img src={WebSecLogo} alt='WebSec Logo' className='login__logo' />
        <p>Please log in:</p>
        <div className='login__role'>
          <h2>Admin</h2>
          <p>Manage users, send invites, and create trainings.</p>
          <button className='login__btn admin' onClick={handleAdminLogin}>Admin Login</button>
        </div>
        <div className='login__role'>
          <h2>Employee</h2>
          <p>Access your training and check your grades.</p>
          <button className='login__btn employee' onClick={handleEmployeeLogin}>Employee Login</button>
        </div>
        <div className='login__role'>
          <h2>Company</h2>
          <p>Manage grades and adjust configurations.</p>
          <button className='login__btn company' onClick={handleCompanyLogin}>Company Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
