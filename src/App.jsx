import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TaskTable from './components/TaskTable';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);

  
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  
  const handleTaskAdd = (newTask) => {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newTask)
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, data]);
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  
  const handleTaskUpdate = (updatedTask) => {
    fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(updatedTask)
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prevTasks) =>
          prevTasks.map((task) => (task.id === data.id ? data : task))
        );
        setTaskToEdit(null); 
      })
      .catch((error) => console.error('Error updating task:', error));
  };
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  
  const handleSearchChange = (searchValue) => {
    setSearch(searchValue);
  };

  
  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase()) ||
    task.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm
        onTaskAdd={handleTaskAdd}
        search={search}
        taskToEdit={taskToEdit}
        onTaskUpdate={handleTaskUpdate}
      />
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <TaskTable tasks={filteredTasks} onDelete={handleDelete} onEdit={setTaskToEdit} />
    </div>
  );
}

export default App;
