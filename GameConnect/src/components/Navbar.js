// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/messages" style={styles.link}>Messages</Link>
      <Link to="/profile" style={styles.link}>Profile</Link>
      <Link to="/login" style={styles.link}>Login</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#222',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  }
};

export default Navbar;
