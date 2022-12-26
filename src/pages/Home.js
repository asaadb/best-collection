import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { useEffect, useState } from 'react';

const Home = ({products, categories}) => {
  
  return (
    <>
        <Hero />
        {products.length > 0  &&
           <Products products={products} categories={categories}/>
         }
        
    </>
  )
}

export default Home