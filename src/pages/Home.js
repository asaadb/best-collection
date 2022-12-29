import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import Loader from '../components/Loader';

const Home = ({products, categories}) => {
  return (
    <>
        <Hero />
        {products.length > 0 ? (
          <Products products={products} categories={categories}/>
        ) : (
            <Loader/>
        )
           
         }
        
    </>
  )
}

export default Home