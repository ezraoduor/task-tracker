import React from 'react';

const TaskTable = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-table">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Category</th>
            <th>Due</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>{task.description}</td>
              <td>{task.category}</td>
              <td>{task.due}</td>
              <td>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
