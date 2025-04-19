import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd, search }) => {
  const [formData, setFormData] = useState({
    expense: "",
    description: "",
    category: "",
    amount: "",
    date: ""
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
      expense: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  
  const isMatchingSearch = (value) => {
    if (!search) return true;
    return value.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="expense" placeholder="Expense" value={formData.expense} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
      <input type="time" name="due" value={formData.due} onChange={handleChange}/>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
