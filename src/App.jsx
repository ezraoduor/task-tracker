import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  
  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  
  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  
  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  
  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase()) ||
    task.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Task Manager</h1>
      <p>Take charge of your tasks</p>
      <TaskForm onTaskAdd={handleTaskAdd} search={search} />
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <TaskTable tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
