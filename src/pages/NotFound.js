import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h1" sx={{ color: 'black' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ color: 'black', textAlign: 'center', mb: '20px' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: 'black'}}><Link to='/' style={{textDecoration: 'none', color: 'white'}}>Back Home</Link></Button>
    </Box>
  )
}

export default NotFound