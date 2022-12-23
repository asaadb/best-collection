import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const Cart = ({cart, products, handlleAddToCart, handleDeleteFromCart, handleRemoveFromCart}) => {
  return (
    <Stack spacing={4} width='100%'>
                <Typography variant='h2' 
                    mt='30px' 
                    mb='30px'
                    sx={{
                        fontSize: {lg: '60px', xs: '40px'}
                    }}>Shopping Cart</Typography>
        {cart.length ? (cart.map((product) => {
            let item = products.find((i) => i.id === product.productId)
            
            return (
            <Box key={product.productId} boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                p='10px'
            >
                <Stack maxWidth='800px'
                    mr='auto'
                    ml='auto'
                    alignItems='center' 
                    sx={{
                        flexDirection: {lg: 'row', sm: 'row', xs: 'column'},
                        gap: '30px',
                        }}
                        
                >
                    <img src={item.image} style={{
                        width: '150px',
                        hieght: ' 150px',
                    }} 
                    />
                    <Stack spacing={1} maxWidth='300x'>
                        <Typography variant='h3' 
                            fontSize='25px'
                            fontWeight={700}>{item.title}</Typography>
                        <Typography variant='h3' 
                            fontSize='18px' 
                            sx={{ 
                                textAlign: {lg: 'left', sm: 'left', xs: 'center'}
                            }}
                            fontWeight={700}>{product.quantity} x {item.price} = ${product.quantity * item.price}</Typography>
                        <Stack direction='row'
                            spacing={2}
                            sx={{ 
                                justifyContent: {lg: 'start', sm: 'start', xs: 'center'
                                }}}>
                            <Button variant="outlined"
                                sx={{
                                    borderColor: 'black',
                                    color: 'black'
                                }}
                                onClick={() => {handlleAddToCart(product)}}
                                
                                >+</Button>
                            <Button variant="outlined"   
                                sx={{
                                    borderColor: 'black',
                                    color: 'black',
                                }}
                                onClick={() => {
                                    if( product.quantity > 1) {
                                        handleRemoveFromCart(product)
                                    } else {
                                        handleDeleteFromCart(product)
                                    }
                                } }
                                
                                >-</Button>
                                <Button onClick={() => handleDeleteFromCart(product)}>Delete</Button>
                        </Stack>
                        
                    </Stack>  
                </Stack>
            </Box>
        )})) : (
            <Typography variant='h4'
                textAlign='center'
                sx={{ 
                    backgroundColor: '#eaeded',
                    p:'20px'
                }}
            > Your Cart is empty</Typography>
        )}
    </Stack>
  )
}

export default Cart