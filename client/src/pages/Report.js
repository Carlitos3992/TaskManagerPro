import React, { useState, useEffect } from 'react';

function Report() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/tasks/all', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        const data = await response.json();
        setTasks(data); 
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); 


  const totalTasks = tasks.length;
  const tasksByStatus = tasks.reduce(
    (acc, task) => {
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    },
    { 'Not Started': 0, 'In Progress': 0, Done: 0 }
  );

  return (
    <div className="report-container">
      <h2>Task Report</h2>
      <div className="report-summary">
        <p>Total Tasks: {totalTasks}</p>
        <p>Not Started: {tasksByStatus['Not Started']}</p>
        <p>In Progress: {tasksByStatus['In Progress']}</p>
        <p>Done: {tasksByStatus['Done']}</p>
      </div>
    </div>
  );
}

export default Report;
