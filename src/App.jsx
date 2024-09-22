import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from "react-toastify";

import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import SolutionsPage from './components/solutions/SolutionsPage';
import BubblePage from './components/solutions/page/Bubblepage';

import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import PrivateRoutes from './utils/PrivateRoutes';
import CompleteRegister from './components/CompleteRegister';

function App() {
  const { user } = useAuth0();
  console.log('Current User', user);

  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to home page on load */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/completeregister" element={<CompleteRegister />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/description/:name" element={<BubblePage />} />
          </Route>
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;


