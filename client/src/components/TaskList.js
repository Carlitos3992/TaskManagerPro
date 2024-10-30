import React from 'react';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <h3>Your Tasks</h3>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
