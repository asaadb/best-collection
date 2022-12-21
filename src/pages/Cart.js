import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'

const Cart = ({products}) => {

  return (
    <Stack spacing={4} width='100%'>
                <Typography variant='h2' 
                    mt='30px' 
                    mb='30px'
                    sx={{
                        fontSize: {lg: '60px', xs: '40px'}
                    }}>Shopping Cart</Typography>
        {products && products.map((product) => (
            <Box boxShadow= 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
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
                    <img src={product.image} style={{
                        width: '150px',
                        hieght: ' 150px',
                    }} 
                    />
                    <Stack spacing={1} maxWidth='300x'>
                        <Typography variant='h3' 
                            fontSize='25px'
                            fontWeight={700}>{product.title}</Typography>
                        <Typography variant='h3' 
                            fontSize='18px' 
                            sx={{ 
                                textAlign: {lg: 'left', sm: 'left', xs: 'center'}
                            }}
                            fontWeight={700}>2 x ${product.price} = ${product.price * 2}</Typography>
                        <Stack direction='row'
                            spacing={2}
                            sx={{ 
                                justifyContent: {lg: 'start', sm: 'start', xs: 'center'
                                }}}>
                            <Button variant="outlined"
                                sx={{
                                    borderColor: 'black',
                                    color: 'black'
                                }}>+</Button>
                            <Button variant="outlined"   
                                sx={{
                                    borderColor: 'black',
                                    color: 'black',
                                }}>-</Button>
                        </Stack>
                    </Stack>  
                </Stack>
            </Box>
        ))}
    </Stack>
  )
}

export default Cart