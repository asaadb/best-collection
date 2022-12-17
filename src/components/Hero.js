import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroImage from '../assets/images/HeroImage.jpg';

const Hero = () => {
  return (
    <Box sx={{ 
      backgroundImage: `url(${HeroImage})`, 
      width: '100%', 
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
      }}>
        <Stack width="100%" height="100%" pl="20px">
          <Typography fontWeight={700} sx={{ 
            fontSize: { lg: '45px', xs: '28px'},
            mt: { lg: '60px', xs: '35px'}
            
          }}
            mb="5px"  textAlign="left" color="white">
            NEW SEASON ARRAIVALS
          </Typography>
          <Typography fontWeight={400} sx={{
             fontSize: { lg: '30px', xs: '20px'}}}
             textAlign="left" color="white">
            CHECK OUT ALL TEH TRENDS
          </Typography>
        </Stack>
    </Box>
    
  )
}

export default Hero