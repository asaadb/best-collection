import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { useState, useEffect } from 'react';

const App = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log('ERROR OCCURED WHILE FETCHING PRODUCTS:', err));
  }, [])

  return (
    <Box>
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home products={products}/>}/>
            <Route path='/products/:id' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart products={products}/>}/>
        </Routes>
    </Box>
  )
}

export default App