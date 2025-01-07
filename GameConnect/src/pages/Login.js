// pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic - for now, just navigate to Home
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>GameConnect Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label>Email:</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px'
  }
};

export default Login;
