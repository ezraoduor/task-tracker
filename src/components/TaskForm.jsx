import React, { useState } from 'react';

const TaskForm = () => {
  const [formData, setFormData] = useState({
    task: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setFormData({
      task: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="expense" placeholder="Expense" value={formData.expense} onChange={handleOnChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleOnChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleOnChange} />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleOnChange} />
      <input type="date" name="date" value={formData.date} onChange={handleOnChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default TaskForm;
