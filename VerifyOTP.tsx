import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './login.css';

const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (otp !== location.state?.mockOTP?.toString()) {
      setError('Invalid OTP code');
      return;
    }
    
    alert(`Password reset successfully for ${email}!`);
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Reset Password</h2>
        <p>Enter OTP sent to {email}</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
