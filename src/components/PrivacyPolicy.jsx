import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer'; // Importing the Footer component

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar mode="light" />  {/* Adding the Navbar here */}
      <div 
        className="terms-container" 
        style={{ 
          padding: '20px', 
          fontFamily: 'Arial, sans-serif', 
          marginTop: '80px' // Add margin-top to push content down
        }}
      >
      <h1>Privacy Policy for House of Marktech</h1>

      <p>
        At House of Marktech, accessible from www.houseofmarktech.com, your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information we collect and how we use, disclose, and protect that information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information from you in various ways, including when you visit our site, register on the site, place an order, subscribe to our newsletter, or fill out a form. The personal information we may collect includes:
      </p>
      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Mailing Address</li>
        <li>Payment Information</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We may use the information we collect from you in the following ways:</p>
      <ul>
        <li>To personalize your experience</li>
        <li>To improve our website</li>
        <li>To process transactions</li>
        <li>To send periodic emails regarding your order or other products and services</li>
        <li>To respond to inquiries, and/or other requests or questions</li>
      </ul>

      <h2>How We Protect Your Information</h2>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        House of Marktech reserves the right to update or change our Privacy Policy at any time. Any changes will be posted on this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@houseofmarktech.com">support@houseofmarktech.com</a>.
      </p>
    </div>
    <Footer /> {/* Adding the Footer component here */}
    </div>
  );
};

export default PrivacyPolicy;
