import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';

function App() {
  // Declare isLoggedIn and setIsLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Check if a token exists in local storage to set logged-in state
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Sets to true if token exists
  }, []);




  
  return (
    <Router>
      
      {/* Pass isLoggedIn and setIsLoggedIn to NavBar as props */}
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        {/* Pass setIsLoggedIn as a prop to Login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={isLoggedIn ? <Report tasks={tasks} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
