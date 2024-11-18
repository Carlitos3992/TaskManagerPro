import React from 'react';

function TaskList({ tasks, onDeleteTask, onUpdateTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <div className="task-content">
            <h3>{task.title}</h3>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
          <div className="task-actions">
            <button
              className="update-button"
              onClick={() => onUpdateTask(task._id, { status: 'Done' })}
            >
              Mark as Done
            </button>
            <button
              className="delete-button"
              onClick={() => onDeleteTask(task._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
