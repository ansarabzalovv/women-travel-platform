import React from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import TourCard from './TourCard';
import { Tour } from '../../types';

interface TourListProps {
  tours: Tour[];
  loading: boolean;
}

const TourList: React.FC<TourListProps> = ({ tours, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress sx={{ color: '#ff6b81' }} />
      </Box>
    );
  }

  if (tours.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No tours found matching your criteria.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your filters or check back later for new tours.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {tours.map((tour) => (
        <Grid item key={tour.id} xs={12} sm={6} md={4}>
          <TourCard tour={tour} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TourList; 