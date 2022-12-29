import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Loader from '../components/Loader';

const ProductDetail = ({handlleAddToCart}) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
    }, [id])

  return (
    <Box m='50px'> 
        {product ? (
            <Stack direction='row' 
                gap='30px'
                justifyContent='center'
                alignItems='center'
                sx={{ 
                    flexDirection: { lg: 'row', md: 'row',  xs: 'column'}, 
                    }}
            >
                <Box width='50%' textAlign='center'>
                     <img src={product.image} alt={product.title} style={{maxWidth: '400px', maxHeight: '400px'}}/>                  
                </Box>
            <Stack spacing={2}>
                <Typography variant='h4' 
                    color='#878787'
                    sx={{ fontSize: { lg: '35px', xs: '25px'}}}
                >{product.category.toUpperCase()}
                </Typography>
                <Typography variant='h2' 
                    color='#2a2a2b' 
                    fontWeight={400}
                    sx={{ fontSize: { lg: '45px', xs: '35px'}}}
                    >{product.title}
                    </Typography>
                <Typography variant='h4' 
                    fontWeight={700}
                    sx={{ 
                        fontSize: { lg: '38px', xs: '28px'}
                    }}
                >
                    ${product.price}
                </Typography>
                <Typography variant='body1' paragraph>{product.description}</Typography>
                <Stack direction='row' spacing={2}>
                    <Button 
                        variant="contained" sx={{
                        backgroundColor: 'black'
                        }}
                        onClick={() => handlleAddToCart({productId: product.id, quantity: 1})}
                    >Add to Cart
                    </Button>
                    <Link to='/cart'>
                        <Button variant="contained" 
                            sx={{
                                backgroundColor: 'black',
                                textDecoration: 'none'
                                }}
                        >
                        Go to Cart
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            </Stack>
        ): (<Loader/>)}
    </Box>
  )
}

export default ProductDetail