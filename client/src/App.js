import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/report" element={isLoggedIn ? <Report /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
