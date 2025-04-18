import React from 'react'
import SearchBar from './components/SearchBar'
import TaskTable from './components/TaskTable'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div>
      <TaskTable />
      <SearchBar />
      <TaskForm />
    </div>
  )
}

export default App