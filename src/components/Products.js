import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import ProductCard from './ProductCard'

const Products = ({products}) => {
  return (
    <Box mt='50px'>
        <Typography variant='h3' 
            textAlign='center' 
            pb='15px'
            borderBottom='1px solid black'
            width='85%' 
            ml='auto' 
            mr='auto'>
            Products
        </Typography>
        <Stack direction="row" 
          sx={{ 
            gap: { lg: '110px', xs: '50px'}
          }}
          flexWrap="wrap" 
          justifyContent="center"
        >
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
    </Box>
  )
}

export default Products