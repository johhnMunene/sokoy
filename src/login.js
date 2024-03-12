import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './login';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here (e.g., API request)
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit">Log In</button>
          <div className="forgot-password">Forgot Password?</div>
        </form>

        {/* "Sign Up" link to navigate to the sign-up page or show a sign-up modal */}
        <div className="signup-link">
          <Link to='./sign-up.js'>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
