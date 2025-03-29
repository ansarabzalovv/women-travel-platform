import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip,
  Button
} from '@mui/material';
import { Tour } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }
      }}
      elevation={2}
    >
      <CardMedia
        component="img"
        height="200"
        image={tour.images[0]}
        alt={tour.title}
        sx={{ objectFit: 'cover' }}
      />
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <Chip 
            label={tour.format} 
            size="small" 
            sx={{ 
              backgroundColor: '#ffd3da', 
              color: '#ff6b81',
              fontWeight: 500,
              fontSize: '0.7rem'
            }} 
          />
          {tour.featured && (
            <Chip 
              label="Featured" 
              size="small" 
              sx={{ 
                ml: 1,
                backgroundColor: '#e0f7fa', 
                color: '#00acc1',
                fontWeight: 500,
                fontSize: '0.7rem'
              }} 
            />
          )}
        </Box>
        
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 600,
            fontFamily: "'Playfair Display', serif",
            color: '#333'
          }}
        >
          {tour.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LocationOnIcon sx={{ fontSize: 16, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {tour.location}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarTodayIcon sx={{ fontSize: 16, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {tour.date}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AccessTimeIcon sx={{ fontSize: 16, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {tour.duration}
          </Typography>
        </Box>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {tour.description}
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
          <Typography 
            variant="h6" 
            color="#ff6b81"
            sx={{ fontWeight: 'bold' }}
          >
            {tour.price}
          </Typography>
          
          <Button 
            component={Link} 
            to={`/tours/${tour.id}`}
            variant="outlined" 
            size="small"
            sx={{ 
              borderColor: '#ff6b81', 
              color: '#ff6b81',
              '&:hover': {
                borderColor: '#ff4757',
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TourCard; 