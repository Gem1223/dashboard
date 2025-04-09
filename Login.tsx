import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    if (email === 'xthasubas@gmail.com' && password === '1234') {
      navigate('/food');
      alert("Login successfully!!!")
    } else {
      setError('Invalid credentials');
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign in</h2>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="login-form-group">
            <input type="email"placeholder="Email address"value={email}onChange={(e) => setEmail(e.target.value)}required
            />
          </div>
          <div className="login-form-group">
             <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
            />
          </div>
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <Link to="/forgot-password">Forgot your password?</Link>
          <div>
            <p>
              Or <Link to="/signup">create a new account</Link>
            </p>
          </div>
            <button type="submit" className="login-button">  Sign in </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
