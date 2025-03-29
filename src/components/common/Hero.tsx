import React, { memo } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
}

// Используем мемоизацию для предотвращения ненужных ре-рендеров
const Hero: React.FC<HeroProps> = memo(({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '80vh', md: '90vh' },
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        mb: 8
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '30%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
            zIndex: 1
          }
        }}
      >
        <Box
          component="img"
          src={backgroundImage}
          alt="Hero background"
          loading="lazy" // Добавляем ленивую загрузку изображения
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="lg">
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '65%' },
            position: 'relative',
            zIndex: 2,
            color: 'white',
            textAlign: { xs: 'center', md: 'left' },
            animation: 'fadeIn 1s ease-in',
            padding: { xs: 2, md: 0 }
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 400,
              lineHeight: 1.5,
              textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              maxWidth: '800px',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
            }}
          >
            {subtitle}
          </Typography>
          
          <Button
            component={Link}
            to={buttonLink}
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: '50px',
              backgroundColor: '#ff6b81',
              fontSize: '1.1rem',
              fontWeight: 500,
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              '&:hover': {
                backgroundColor: '#ff4757',
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
});

// Добавляем имя для отладки в инструментах разработчика
Hero.displayName = 'Hero';

export default Hero; 