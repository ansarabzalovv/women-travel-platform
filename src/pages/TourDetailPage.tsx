import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TourDetail from '../components/tours/TourDetail';
import { Tour } from '../types';
import { api } from '../services/api';

const TourDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTour = async () => {
      if (!id) {
        setError('Tour ID is missing');
        setLoading(false);
        return;
      }

      try {
        const data = await api.getTourById(id);
        
        if (data) {
          setTour(data);
        } else {
          setError('Tour not found');
        }
      } catch (error) {
        console.error('Error fetching tour:', error);
        setError('Failed to load tour details');
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  const handleBack = () => {
    navigate('/tours');
  };

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
          <CircularProgress sx={{ color: '#ff6b81' }} />
        </Box>
      </Container>
    );
  }

  if (error || !tour) {
    return (
      <Container>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error || 'Tour not found'}
          </Typography>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBack}
            sx={{ 
              mt: 2,
              color: '#ff6b81',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            Back to Tours
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBack}
          sx={{ 
            mb: 3,
            color: '#ff6b81',
            '&:hover': {
              backgroundColor: 'rgba(255, 107, 129, 0.05)',
            }
          }}
        >
          Back to Tours
        </Button>
      </Container>
      
      <TourDetail tour={tour} />
    </Box>
  );
};

export default TourDetailPage; 