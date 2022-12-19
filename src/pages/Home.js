import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { useEffect, useState } from 'react';

const Home = ({products}) => {
  
  return (
    <>
        <Hero />
        <Products products={products}/>
    </>
  )
}

export default Home