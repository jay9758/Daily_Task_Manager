import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import "./App.css"

const App = () => {
  return (
    <main>
      <h1 className="heading">Daily Task Manager</h1>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App