import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>}/>
        </Routes>
    </Box>
  )
}

export default App