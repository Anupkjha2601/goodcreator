import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Importing the Footer component

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar mode="light" /> {/* Adding the Navbar here */}
      <div
        className="terms-container"
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          marginTop: '80px',
        }}
      >
        <h1>Terms and Conditions</h1>
        {/* Terms and Conditions Content */}
        <p>Welcome to House of Marktech!</p>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of House of Marktech's Website, located at
          www.houseofmarktech.com.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use House of Marktech if you do not
          agree to all of the terms and conditions stated on this page.
        </p>

        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing House of Marktech, you
          agreed to use cookies in agreement with the House of Marktech's
          Privacy Policy.
        </p>

        <h2>License</h2>
        <p>
          Unless otherwise stated, House of Marktech and/or its licensors own
          the intellectual property rights for all material on House of
          Marktech. All intellectual property rights are reserved. You may
          access this from House of Marktech for your own personal use subjected
          to restrictions set in these terms and conditions.
        </p>

        <ul>
          <li>You must not republish material from House of Marktech</li>
          <li>You must not sell, rent, or sub-license material from House of Marktech</li>
          <li>You must not reproduce, duplicate or copy material from House of Marktech</li>
          <li>You must not redistribute content from House of Marktech</li>
        </ul>

        <h2>Content Liability</h2>
        <p>
          We shall not be held responsible for any content that appears on your
          website. You agree to protect and defend us against all claims arising
          on your website.
        </p>

        <h2>Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our website. You approve to immediately remove all
          links to our website upon request.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Insert Your Location], and you irrevocably submit to
          the exclusive jurisdiction of the courts in that state or location.
        </p>

        <p>
          If you have any questions about these Terms, please contact us at{' '}
          <a href="mailto:support@houseofmarktech.com">support@houseofmarktech.com</a>.
        </p>
      </div>
      <Footer /> {/* Adding the Footer component here */}
    </div>
  );
};

export default TermsAndConditions;



