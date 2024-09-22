import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './ForgotPassword.css'; // Make sure to create this CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    toast.success("Password reset link sent successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <img className="forgot-password-logo" src="logo.png" alt="logo" />
        <h2>
          Login to access <br /> <span>Smart Campaigns</span>
        </h2>
        <p>Get 100+ influencers to boost your reach</p>
        <ul className="register-points">
          <li>
            <i className="bi bi-check2"></i>
            Guaranteed results on all your spends
          </li>
          <li>
            <i className="bi bi-check2"></i>
            100k nano and micro Influencers
          </li>
          <li>
            <i className="bi bi-check2"></i>
            ROI-focused campaigns
          </li>
        </ul>
        <img 
          className="login-background-image" 
          src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db" 
          alt="background" 
        />
      </div>

      <div className="forgot-password-right">
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <h2>Reset <span>your password</span></h2>
          <p>Enter the email address associated with your account and we'll send you a password reset link.</p>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Continue</button>

          <p>
            Don't have an account? <a href="/register">Sign up for free</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;







