import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CompleteRegister.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { toast } from "react-toastify"; 
import { setDoc, doc } from "firebase/firestore";
import Footer from './Footer';
import {v4 as uuidv4} from "uuid";
import Navbar from "./Navbar";

const CompleteRegister = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(""); // Full Name Error State
  const [companyName, setCompanyName] = useState("");
  const [companyNameError, setCompanyNameError] = useState(""); // Company Name Error State
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [phoneNumberError, setPhoneNumberError] = useState(""); // Phone Number Error State
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

const submithandle = async (e)=> {
  e.preventDefault();
  try {
    const response = await fetch('https://backend-dashboard-dsw0.onrender.com/api/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: "uuid",
      })
    });
    console.log(response);
    const data = await response.json(
      {
        _id: "uuid"
      }
    );
    console.log(data);
    if (response.ok) {
      setSuccess(true);
      console.log('User registered successfully:', data);
    } else {
      setError(data.message || 'Registration failed');
      console.error('Error registering user:', data);
    }
  } catch (error) {
    setError('Error registering user');
    console.error('Error registering user:', error);
  }

}

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    // Reset all error states
    setFullNameError("");
    setCompanyNameError("");
    setPhoneNumberError("");
    setPasswordError("");
  
    // Validate Full Name
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
      setFullNameError("Full name should only contain alphabets and spaces.");
      hasError = true;
    }
  
    // Validate Company Name
    if (!/^[A-Za-z\s]+$/.test(companyName)) {
      setCompanyNameError("Company name should only contain alphabets and spaces.");
      hasError = true;
    }
  
    // Validate Phone Number
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    if (cleanedNumber.length !== 12 || !cleanedNumber.startsWith("91")) {
      setPhoneNumberError("Please enter a valid phone number with country code +91 followed by 10 digits.");
      hasError = true;
    }
  
    // Validate Password
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      hasError = true;
    }
  
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
      hasError = true;
    }
  
    // If there are any errors, return and do not proceed with registration
    if (hasError) return;
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("User Registered Successfully!!", {
        position: "top-center",
        autoClose: 3000,
      });
      
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
    <>
     <div className="navbar-container">
      <Navbar />
    </div>
    <div className ="Complete-register-page">
      <div className="complete-register-container">
        {/* Left Section */}
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

        {/* Right Section */}
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
              {fullNameError && <p className="error-message">{fullNameError}</p>} {/* Full Name Error Message */}
            </div>

            <div className="input-group">
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                required
              />
              {companyNameError && <p className="error-message">{companyNameError}</p>} {/* Company Name Error Message */}
            </div>

            <div className="input-group">
  <input
    type="text"
    value={phoneNumber}
    onChange={(e) => {
      const value = e.target.value.startsWith("+91") ? e.target.value : "+91" + e.target.value;
      setPhoneNumber(value);
      // Removed validation here
    }} // Ensure +91 stays
    placeholder="Phone Number"
    required
  />
  {phoneNumberError && <p className="error-message">{phoneNumberError}</p>} {/* Phone Number Error Message */}
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
      </div>
      {/* Footer Section */}
      <Footer mode="light" next="Login" />
     
    </>
  );
};

export default CompleteRegister;




























