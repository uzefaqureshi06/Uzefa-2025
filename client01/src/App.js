import React from 'react'
import Home from './Home/Home'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <>
    <ToastContainer/>
    <div>
      <Home/>

    </div>
    </>
  )
}

export default App