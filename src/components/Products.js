import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import ProductCard from './ProductCard';
import { useState } from 'react'

const Products = ({products, categories}) => {
  
  const [filteredItems, setFilteredItems] = useState([...products])
  
  return (
    <Box id='products' mt='50px'>
        <Typography variant='h3' 
            textAlign='center' 
            pb='15px'
            borderBottom='1px solid black'
            width='85%' 
            ml='auto' 
            mr='auto'>
            Products
        </Typography>
        {categories.length > 0 && (
          <Stack direction="row" justifyContent='center' mt='40px' spacing={2}>
            <Button variant="outlined"  sx={{ 
                  color: 'black',
                  borderColor: 'black'}}
                  onClick={() => setFilteredItems([...products])}>All</Button>
          {categories.map((category) => (
              <Button key={category} variant="outlined"  
                sx={{ 
                  color: 'black',
                  borderColor: 'black'
                }}

                onClick={() => setFilteredItems(products.filter((item) => item.category === category))}>{category}</Button>
          ))}
        </Stack>
        )}
          
        <Stack direction="row" 
          sx={{ 
            gap: '30px'
          }}
          flexWrap="wrap" 
          justifyContent="center"
          mt='35px'
        >
          {filteredItems.length > 0 && filteredItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
    </Box>
  )
}

export default Products