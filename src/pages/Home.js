import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { useEffect, useState } from 'react';

const Home = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.log('ERROR OCCURED WHILE FETCHING PRODUCTS:', err))
  }, [])

  return (
    <>
        <Hero />
        <Products products={products}/>
    </>
  )
}

export default Home