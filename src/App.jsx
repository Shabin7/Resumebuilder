import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './Component/Home';
import HomeBody from './Component/HomeBody';
import Reaumeform from './Component/Reaumeform';
import Resumeshow from './Component/Resumeshow';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<HomeBody/>}/>
      <Route path='/resumeform' element={<Reaumeform/>}/>
      <Route path='/resumeshow' element={<Resumeshow/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

