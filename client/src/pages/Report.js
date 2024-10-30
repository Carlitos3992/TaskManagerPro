import React from 'react';

function Report({ tasks }) {
  // Calculate statistics
  const totalTasks = tasks.length;
  const tasksByStatus = tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="report-container">
      <h2>Task Report</h2>
      <div className="report-summary">
        <p>Total Tasks: {totalTasks}</p>
        <p>Not Started: {tasksByStatus['Not Started'] || 0}</p>
        <p>In Progress: {tasksByStatus['In Progress'] || 0}</p>
        <p>Done: {tasksByStatus['Done'] || 0}</p>
      </div>
    </div>
  );
}

export default Report;
