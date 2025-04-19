import React from 'react';

const TaskForm = ({ form, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="task" placeholder="Expense" value={form.expense} onChange={onChange} />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={onChange} />
      <input type="text" name="category" placeholder="Category" value={form.category} onChange={onChange} />
      <input type="time" name="due" placeholder="Amount" value={form.due} onChange={onChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
