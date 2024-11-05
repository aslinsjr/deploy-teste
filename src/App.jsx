import { useState } from 'react'

import './App.css'

import { Outlet } from 'react-router-dom'

import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
