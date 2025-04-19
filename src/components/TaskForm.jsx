import React, { useState, useEffect } from 'react';

const TaskForm = ({ onTaskAdd, search, taskToEdit, onTaskUpdate }) => {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    category: "",
    due: ""
  });

  
  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskToEdit) {
      
      onTaskUpdate(formData);
    } else {
      
      onTaskAdd(formData);
    }

    setFormData({
      task: "",
      description: "",
      category: "",
      due: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Task" value={formData.task} onChange={handleChange}/>
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
      <input type="time" name="due" value={formData.due} onChange={handleChange}/>
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
