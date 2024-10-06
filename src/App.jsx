import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import SolutionsPage from './components/solutions/SolutionsPage';
import BubblePage from './components/solutions/page/Bubblepage';
import Blog from './pages/Blog';
import BlogHome from './components/BlogHome';
import Marketing from './components/Marketing';
import Seo from './components/Seo';
import PPC from './components/PPC';
import SocialMedia from './components/SocialMedia';
import WebDesign from './components/WebDesign';
import Internet from './components/Internet';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import CaseHome from './components/casestudy/CaseHome';


// Authentication
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import CompleteRegister from './components/CompleteRegister';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  const { user } = useAuth0();
  console.log('Current User', user);

  return (
    <>
      <Router>
        {/* Define Routes here */}
        <Routes>
          {/* Redirect to home page on load */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/termsandConditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/completeregister" element={<CompleteRegister />} />
          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/description/:name" element={<BubblePage />} />
          </Route>

          {/* Blog Pages */}
          <Route path="/blogs" element={<Blog />}>
            <Route index element={<BlogHome />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="seo" element={<Seo />} />
            <Route path="ppc" element={<PPC />} />
            <Route path="social-media" element={<SocialMedia />} />
            <Route path="web-design" element={<WebDesign />} />
            <Route path="internet" element={<Internet />} />
            
          </Route>

          {/* Case Study */}
          <Route path="case-study" element={<CaseHome />} />
          
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
