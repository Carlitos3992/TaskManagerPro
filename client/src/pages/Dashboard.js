import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks/all', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      if (response.ok) {
        setTasks([...tasks, data.task]);
      } else {
        console.error(data.message || 'Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (taskId, updatedFields) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/update/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updatedFields),
      });

      const data = await response.json();

      if (response.ok) {
        setTasks(tasks.map((task) => (task._id === taskId ? data.task : task)));
      } else {
        console.error(data.message || 'Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const markTaskAsInProgress = (taskId) => {
    updateTask(taskId, { status: 'In Progress' });
  };

  const markTaskAsDone = (taskId) => {
    updateTask(taskId, { status: 'Done' });
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/delete/${taskId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task._id !== taskId));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        onMarkAsInProgress={markTaskAsInProgress}
        onMarkAsDone={markTaskAsDone}
      />
    </div>
  );
}

export default Dashboard;
