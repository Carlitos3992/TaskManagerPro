import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Not Started');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando
    if (!taskName || !description) {
      alert('You need to put both fields to make the task! ');
      return;
    }

    // Preparando todo para los task
    const newTask = {
      title: taskName, // Match the backend field
      description,
      status,
    };

    // Call the parent function to handle API communication
    onAddTask(newTask);

    // Reset the form
    setTaskName('');
    setDescription('');
    setStatus('Not Started');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
