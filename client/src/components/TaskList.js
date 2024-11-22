import React from 'react';

function TaskList({ tasks, onDeleteTask, onMarkAsInProgress, onMarkAsDone }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className="task-card">
          <div className="task-content">
            <h3>{task.title}</h3>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
          <div className="task-actions">
            <button
              className="btn-in-progress"
              onClick={() => onMarkAsInProgress(task._id)}
              disabled={task.status === 'In Progress'} //Aqui voy a prevenir los duplicados
            >
              Mark as In Progress
            </button>
            <button
              className="btn-done"
              onClick={() => onMarkAsDone(task._id)}
              disabled={task.status === 'Done'} //Aqui voy a prevenir los duplicados
            >
              Mark as Done
            </button>
            <button className="btn-delete" onClick={() => onDeleteTask(task._id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
