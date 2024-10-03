import React, { useEffect, useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom'; 
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth'; 
import Footer from './Footer';

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [fullName, setFullName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); 
  const auth = getAuth(); 
  const provider = new GoogleAuthProvider(); 

  // Load saved email and password if "Remember Me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      toast.error('Invalid email format.', { position: 'bottom-center' });
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully:', userCredential.user);
      const displayName = userCredential.user.displayName || "User"; 
      setFullName(displayName);
      localStorage.setItem("userName", displayName);
      
      // Save email and password if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
      }

      toast.success("User logged in successfully", { position: "top-center" });
      setSuccessMessage(`Welcome, ${displayName}!`); 
      navigate("/home"); 
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No user found with this email.');
          toast.error('No user found with this email.', { position: "bottom-center" });
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          toast.error('Incorrect password.', { position: "bottom-center" });
          break;
        case 'auth/invalid-email':
          setError('Invalid email format.');
          toast.error('Invalid email format.', { position: "bottom-center" });
          break;
        default:
          setError('Login failed. Please try again.');
          toast.error('Login failed. Please try again.', { position: "bottom-center" });
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const userEmail = result.user.email;
      const displayName = result.user.displayName || "User"; 
      setEmail(userEmail); 
      setFullName(displayName); 
      localStorage.setItem("userName", displayName); 
      toast.success("Signed in with Google successfully", { position: "top-center" });
      setSuccessMessage(`Welcome, ${displayName}!`); 
      navigate("/home"); 
    } catch (error) {
      setError(error.message || "Failed to sign in with Google");
      toast.error(error.message || "Failed to sign in with Google", { position: "bottom-center" });
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <div className="login-content">
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
        {!successMessage && (
          <>
            <div className="login-left">
              <img className="login-logo" src="logo.png" alt="Smart Campaigns Logo" />
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
                src="model boy.svg" 
                alt="Background" 
              />
            </div>

            <div className="login-right">
              <div className="login-form-container">
                <button onClick={handleGoogleSignIn} className="google-login-btn">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/winkl-1095.appspot.com/o/saas%2Fgoogle_icon.svg?alt=media&token=a6561d03-9cc8-4c26-903d-c796c2d448ec"
                    alt="Google logo"
                  /> 
                  Continue with Google
                </button>
                <div className="divider">or</div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="remember-forgot">
                    <div className="remember-me">
                      <input 
                        type="checkbox" 
                        id="rememberMe" 
                        checked={rememberMe} 
                        onChange={handleCheckboxChange} 
                      />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="/forgotpassword">Forgot password?</a>
                  </div>
                  <button type="submit" className="login-button">Continue</button>
                  
                  {error && <p className="error-message">{error}</p>}
                  
                  <p>
                    Don't have an account? <a href="/register" className="register-link">Register</a>
                  </p>
                </form>
              </div>
            </div>
          </>
         
        )}
      </div>
      <Footer mode="light" next="Register" />
      </div>
    </div>
  );
};

export default Login;










