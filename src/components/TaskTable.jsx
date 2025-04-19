import React from 'react';

const TaskTable = ({ task, onDelete }) => {
  return (
    <div className="task-table">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Category</th>
            <th>due</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {task.map((expense, index) => (
            <tr key={index}>
              <td>{expense.task}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.due}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
  </div>
  );
};

export default TaskTable;
