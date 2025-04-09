import React, { useState } from 'react';
import { Link, } from 'react-router-dom';  
import './signup.css';


const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      setSuccess('');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      alert('Password do not match');
      return;
    }

    // Simulate signup success
    setError('');
    alert('Signup Successful!');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"  placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>

      {/* Log In button with link */}
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default Signup;
