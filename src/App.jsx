
import React from 'react'
import './App.css'
import Additem from './Additem.jsx'
import Showitem from './Showitem.jsx'
import { TodoProvider } from './TodoProvider.jsx'

function App() {


  return (
    <>
      <TodoProvider>
      <h1>Todo List using useReducer and useContext hooks</h1>
      <Additem />
      <Showitem />
    </TodoProvider>
    </>
  )
}

export default App
