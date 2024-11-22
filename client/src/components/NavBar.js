import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Chequear si el tokin existe
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, [localStorage.getItem('token')]);

  // Aqui ando manejando el LogOut
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav>
      <h1>TaskManagerPro</h1>
      <ul>
        {!isLoggedIn ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
          
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/report">Report</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
