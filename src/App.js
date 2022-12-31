import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { useState, useEffect } from 'react';
import { getProducts, getCategories } from './utils/fetchData';
import NotFound from './pages/NotFound';
import { ProductsContext, CartContext } from './contexts/Contexts';

const App = () => {
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
  getProducts().then((data) => setProducts(data))
  getCategories().then((data) => setCategories(data))
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

function handleDeleteFromCart(item) {
  setCart(cart.filter((i) => i.productId !== item.productId))
}

function handleRemoveFromCart(item) {
  setCart(cart.map((t) => {
    if(t.productId === item.productId) {
      return {...t, quantity: t.quantity - 1}
    } else {
      return t
    }
  }))
}

let cartLength = cart.length ? cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0) : 0;

  return (
    <Box>
        <Navbar cartLength={cartLength}/>
        <ProductsContext.Provider value ={{ products, categories }}>
          <CartContext.Provider value = {{ cart, handleDeleteFromCart, handleRemoveFromCart, handlleAddToCart }}>
            <Routes>
                <Route  path="/" element={<Home products={products} categories={categories}/>}/>
                <Route  path="/" element={<Home/>}/>
                <Route path='/products/:id' element={<ProductDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path="/*" element={<NotFound/>}/>    
            </Routes>
          </CartContext.Provider>
        </ProductsContext.Provider>
    </Box>
  )
}

export default App
