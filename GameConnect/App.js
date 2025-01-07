// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Messages from './src/pages/Messages';
import Profile from './src/pages/Profile';
import Navbar from './src/components/Navbar';

function App() {
  return (
    <Router>
      {/* We can conditionally show a navigation bar if user is logged in */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;