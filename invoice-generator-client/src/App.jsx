import React from 'react';
import { Toaster } from 'react-hot-toast';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard';
import MainPage from './pages/MainPage';
import PreviewPage from './pages/PreviewPage';
import Menubar from './components/Menubar'; 

const App = () => {
  return (
    
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
         <Route path="/" element={<LandingPage/>} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/generate" element={<MainPage/>} />
         <Route path="/preview" element={<PreviewPage/>} />
         
      </Routes>
    </BrowserRouter>
  )
}

export default App;