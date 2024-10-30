import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import NavBar from './components/NavBar';

function App() {
  const [tasks, setTasks] = useState([]); // assuming tasks are managed here

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard tasks={tasks} />} />
        <Route path="/report" element={<Report tasks={tasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
