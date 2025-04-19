import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd, search }) => {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    category: "",
    due: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { ...formData };

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Task added:", data);
        if (onTaskAdd) onTaskAdd(data); 
      })
      .catch(err => console.error(err));

    setFormData({
      task: "",
      description: "",
      category: "",
      due: ""
    });
  };

  const isMatchingSearch = (value) => {
    if (!search) return true;
    return value.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        placeholder="Task"
        value={formData.task}
        onChange={handleChange}
        className={isMatchingSearch(formData.task) ? '' : 'dimmed'}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className={isMatchingSearch(formData.description) ? '' : 'dimmed'}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="time"
        name="due"
        value={formData.due}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
