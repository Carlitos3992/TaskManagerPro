import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Filter tasks based on selected status
  const filteredTasks = filterStatus === 'All'
    ? tasks
    : tasks.filter(task => task.status === filterStatus);

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onAddTask={addTask} />

      <div>
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default Dashboard;
