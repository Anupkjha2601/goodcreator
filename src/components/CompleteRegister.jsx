import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CompleteRegister.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from './firebase';
import { toast } from "react-toastify"; // Add this import
import { setDoc, doc } from "firebase/firestore";

const CompleteRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91"); // Start with +91
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
      return;
    }
  
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedNumber.length !== 12 || !cleanedNumber.startsWith("91")) {
      setError("Please enter a valid phone number with country code +91 followed by 10 digits.");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Registered Successfully!!");
     
      // Show toast notification
      toast.success("User Registered Successfully!!", {
        position: "top-center",
        autoClose: 3000,
      });
  
      // Redirect to login after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already in use. Please use a different email.');
        toast.error('This email is already in use. Please use a different email.', { position: "bottom-center" });
      } else {
        console.log(error.message);
        toast.error("Registration failed. Please try again.", { position: "bottom-center" });
      }
    }
  };
  
  return (
    <div className="complete-register-container">
      <div className="left-section">
        <img className="complete-register-logo" src="logo.png" alt="logo" />
        <br />
        <h2>
          Login to access <br /> <span>Smart Campaigns</span>
        </h2>
        <p>Get 100+ influencers to boost your reach</p>
        <ul>
          <li>Guaranteed results on all your spends</li>
          <li>100k nano and micro Influencers</li>
          <li>ROI-focused campaigns</li>
        </ul>
        <img
          className="complete-register-background-image"
          src="model boy.svg"
          alt="background"
        />
      </div>

      <div className="right-section">
        <h2>Enter your details</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ID"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.startsWith("+91") ? e.target.value : "+91" + e.target.value)} // Ensure +91 stays
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Set Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="show-password-btn"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <p className="password-requirements">
            Passwords must contain at least 8 characters, including at least 1
            uppercase letter, 1 lowercase letter, 1 number, and 1 special
            character.
          </p>

          <div className="input-group">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {passwordError && <p className="error-message">{passwordError}</p>}

          <button type="submit">Register My Account</button>
        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default CompleteRegister;


























