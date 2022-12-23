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
  let [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log('ERROR OCCURED WHILE FETCHING PRODUCTS:', err));
  }, [])

function handlleAddToCart(item) {

  if (cart.length && cart.find((t) => t.productId === item.productId)) {
    setCart(cart.map((i) => {
      if (i.productId === item.productId) {
        return {...i,  quantity: i.quantity + 1}
       } else {
        return i
       }
    }
    ))
  } else {
    setCart([...cart, item])
  }
}

let cartLength = cart.length ? cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0) : 0;

  return (
    <Box>
        <Navbar cartLength={cartLength}/>
        <Routes>
            <Route  path="/" element={<Home products={products}/>}/>
            <Route path='/products/:id' element={<ProductDetail handlleAddToCart={handlleAddToCart}/>}/>
            <Route path='/cart' element={<Cart cart={cart} products={products}  handlleAddToCart={handlleAddToCart}/>}/>
        </Routes>
    </Box>
  )
}

export default App