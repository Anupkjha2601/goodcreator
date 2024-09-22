import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Custom CSS
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { auth ,googleProvider } from './firebase'; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log('Email submitted:', email);
    navigate('/completeregister', { state: { email } });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider); // Use googleProvider
      const userEmail = result.user.email;
      localStorage.setItem("email", userEmail);
      toast.success("Signed in with Google successfully", { position: "top-center" });
      navigate("/home");
    } catch (error) {
      console.error(error.message);
      setError(error.message || "Failed to sign in with Google");
      toast.error(error.message || "Failed to sign in with Google", { position: "bottom-center" });
    }
};


  return (
    <div className="register-container">
      <div className="left-section">
        <div className="register-content">
          <a href="/">
            <img
              className="register-logo"
              alt="Smart Campaigns Logo"
              src="https://d22h6s1qvdt49m.cloudfront.net/tr:w-600/static/6488b8ee7318f95df6f16d75.png"
            />
          </a>
          <div>
            <h2>
              Register to get a
              <br />
              <span>FREE Campaign worth ₹10,000</span>
            </h2>
            <p className="register-desc">*Offer valid for limited period only.</p>
            <ul className="register-points">
              <li><i className="bi bi-check2"></i>Guaranteed results on all your spends</li>
              <li><i className="bi bi-check2"></i>100k nano and micro Influencers</li>
              <li><i className="bi bi-check2"></i>ROI-focused campaigns</li>
            </ul>
          </div>
        </div>
        <img
          className="register-background-image"
          src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fauth_modal_boy.svg?alt=media&token=cb98e0da-ec4b-4483-854d-db7abf6f71db"
          alt="Background"
        />
      </div>

      <div className="right-section">
        <div className="form-container">
          <div className="login-box">
            <div className="google-login-container">
              <button onClick={handleGoogleSignIn} className="google-login-btn">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fgoogle_icon.svg?alt=media&token=a6561d03-9cc8-4c26-903d-c796c2d448ec"
                  alt="Google Logo"
                /> 
                Continue with Google
              </button>
            </div>
            <div className="divider">or</div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button className="submit-button" type="submit">
                Continue
              </button>
              {error && <p className="error-message">{error}</p>}
              <div className="terms">
                <label htmlFor="terms">
                  By proceeding, I agree to{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://goodcreator.co/terms">T&amp;C</a>,{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://goodcreator.co/privacy-policy">Privacy Policy of GCC</a>,{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>, and{' '}
                  <a target="_blank" rel="noopener noreferrer" href="http://www.google.com/policies/privacy">Google Privacy Policy</a>.
                </label>
              </div>
              <p className="already-account">
                Already have an account? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;




