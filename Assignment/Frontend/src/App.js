import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Homepage from './Components/Homepage'
import Signin from './Components/Signin';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Signin />} />
      </Routes>
    </Router>

  )
}

export default App
