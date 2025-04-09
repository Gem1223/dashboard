import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      // Mock OTP generation and display
      const mockOTP = Math.floor(100000 + Math.random() * 900000); // 6-digit number
      setMessage(`Mock OTP sent to ${email}: ${mockOTP}`);
      navigate('/verify-otp', { 
        state: { 
          email,
          mockOTP // Passing the OTP for verification
        } 
      });
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Reset Password</h2>
        </div>

        {error && <div className="login-error">{error}</div>}
        {message && <div className="login-success">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Send Reset Link
          </button>
        </form>

        <div className="login-footer">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
