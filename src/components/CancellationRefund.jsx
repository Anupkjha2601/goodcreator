import React, { useState } from 'react';
import './CancellationPage.css'; // Assume you have some custom styles

const CancellationPage = () => {
  const [orderId, setOrderId] = useState('');
  const [reason, setReason] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Handle the cancellation logic, such as sending details to the backend
    console.log(`Order ID: ${orderId}, Reason: ${reason}`);
  };

  if (isSubmitted) {
    return (
      <div className="cancellation-page">
        <h1>Cancellation Request Submitted</h1>
        <p>Thank you! Your request for cancellation has been submitted. We will process it shortly.</p>
      </div>
    );
  }

  return (
    <div className="cancellation-page">
      <h1>Cancel Your Order</h1>
      <p>Please provide the details below to cancel your order.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orderId">Order ID:</label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            placeholder="Enter your order ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Cancellation:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            placeholder="Please provide a reason"
          />
        </div>

        <button type="submit" className="submit-button">Submit Cancellation</button>
      </form>
    </div>
  );
};

export default CancellationPage;
