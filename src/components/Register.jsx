import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Custom CSS
import { toast } from 'react-toastify';
import { signInWithPopup } from 'firebase/auth';
import { auth ,googleProvider } from './firebase'; 
import Footer from './Footer'; 
import Navbar from './Navbar';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';

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
      const {user } = await signInWithPopup(auth, googleProvider); // Use googleProvider
      console.log(user);
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
    <>
    <div className="register-page">
    <Navbar mode="light" /> 
      <div className="register-container">
      <div className="left-section">
        <div className="register-content">
          <a href="/">
            <img
              className="register-logo"
              alt="Smart Campaigns Logo"
              src="data:image/jpeg;base64,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"
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
                  <a rel="noopener noreferrer" href="/TermsAndConditions">Terms & Condition</a>, {' '}
                 <a rel="noopener noreferrer" href="/PrivacyPolicy">Privacy Policy of HOM</a>,{' '}
                 <a rel="noopener noreferrer" href="http://www.google.com/policies/privacy">Google Privacy Policy</a>.
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
    </div>
    {/* Footer Section */}
    <Footer mode="light" next="CompleteRegister" />
    </>
  );
};

export default Register;




