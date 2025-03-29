import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TourFilter from '../components/tours/TourFilter';
import TourList from '../components/tours/TourList';
import { Tour } from '../types';
import { api } from '../services/api';

const ToursPage: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await api.getTours();
        setTours(data);
        setFilteredTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleFilter = async (filters: { location: string; format: string; date: string }) => {
    setLoading(true);
    
    try {
      // Если все фильтры пусты, показываем все туры
      if (!filters.location && !filters.format && !filters.date) {
        setFilteredTours(tours);
      } else {
        // Иначе применяем фильтры
        const data = await api.filterTours(filters);
        setFilteredTours(data);
      }
    } catch (error) {
      console.error('Error filtering tours:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 2,
            fontFamily: "'Playfair Display', serif",
            color: '#333',
            fontWeight: 600
          }}
        >
          Explore Our Tours
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover our carefully curated selection of tours designed specifically for women travelers.
        </Typography>
        
        <TourFilter onFilter={handleFilter} />
        
        <TourList tours={filteredTours} loading={loading} />
      </Box>
    </Container>
  );
};

export default ToursPage; 