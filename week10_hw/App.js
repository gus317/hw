import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoList from './components/ToDoList'
const App = () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<ToDoList />} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
