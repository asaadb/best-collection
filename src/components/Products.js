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
        <Stack direction="row" justifyContent='center' mt='40px' spacing={2}>
            <Button variant="outlined"  sx={{ color: 'black', borderColor: 'black'}}>All</Button>
            <Button variant="outlined"  sx={{ color: 'black', borderColor: 'black'}}>Men's Clothing</Button>
            <Button variant="outlined"  sx={{ color: 'black', borderColor: 'black'}}>Women's Clothing</Button>
            <Button variant="outlined"  sx={{ color: 'black', borderColor: 'black'}}>Jewelery</Button>
            <Button variant="outlined"  sx={{ color: 'black', borderColor: 'black'}}>Electronic</Button>
        </Stack>
        <Stack direction="row" 
          sx={{ 
            gap: '30px'
          }}
          flexWrap="wrap" 
          justifyContent="center"
          mt='35px'
        >
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Stack>
    </Box>
  )
}

export default Products