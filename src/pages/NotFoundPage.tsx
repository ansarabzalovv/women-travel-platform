import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          textAlign: 'center',
          py: 8
        }}
      >
        <Typography 
          variant="h1" 
          component="h1" 
          sx={{ 
            fontSize: { xs: '6rem', md: '10rem' },
            fontWeight: 700,
            color: '#ff6b81',
            mb: 2,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          404
        </Typography>
        
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 3,
            fontFamily: "'Playfair Display', serif",
            color: '#333'
          }}
        >
          Page Not Found
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            component={Link} 
            to="/" 
            variant="contained"
            sx={{ 
              py: 1,
              px: 3,
              backgroundColor: '#ff6b81',
              '&:hover': {
                backgroundColor: '#ff4757',
              }
            }}
          >
            Back to Home
          </Button>
          
          <Button 
            component={Link} 
            to="/tours" 
            variant="outlined"
            sx={{ 
              py: 1,
              px: 3,
              borderColor: '#ff6b81', 
              color: '#ff6b81',
              '&:hover': {
                borderColor: '#ff4757',
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            Explore Tours
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFoundPage; 