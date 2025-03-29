import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Button,
  Grid,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

interface TourFilterProps {
  onFilter: (filters: { location: string; format: string; date: string }) => void;
}

const TourFilter: React.FC<TourFilterProps> = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [format, setFormat] = useState('');
  const [date, setDate] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleFormatChange = (event: SelectChangeEvent) => {
    setFormat(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onFilter({ location, format, date });
  };

  const handleReset = () => {
    setLocation('');
    setFormat('');
    setDate('');
    onFilter({ location: '', format: '', date: '' });
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit}
      sx={{ 
        p: 3, 
        mb: 4, 
        backgroundColor: '#f8f9fa',
        borderRadius: 2,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          display: 'flex', 
          alignItems: 'center',
          color: '#555'
        }}
      >
        <FilterListIcon sx={{ mr: 1 }} />
        Filter Tours
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Destination"
            variant="outlined"
            value={location}
            onChange={handleLocationChange}
            placeholder="Search by location"
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: 'action.active', mr: 1 }} />,
            }}
            size="small"
          />
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth size="small">
            <InputLabel id="format-label">Tour Format</InputLabel>
            <Select
              labelId="format-label"
              value={format}
              label="Tour Format"
              onChange={handleFormatChange}
            >
              <MenuItem value="">All Formats</MenuItem>
              <MenuItem value="Retreat">Retreat</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Cultural">Cultural</MenuItem>
              <MenuItem value="Wellness">Wellness</MenuItem>
              <MenuItem value="Photography">Photography</MenuItem>
              <MenuItem value="City Break">City Break</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Date"
            variant="outlined"
            value={date}
            onChange={handleDateChange}
            placeholder="e.g. June 2025"
            size="small"
          />
        </Grid>
        
        <Grid item xs={12} sm={2} sx={{ display: 'flex', gap: 1 }}>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              flex: 1,
              backgroundColor: '#ff6b81',
              '&:hover': {
                backgroundColor: '#ff4757',
              }
            }}
          >
            Filter
          </Button>
          
          <Button 
            type="button" 
            variant="outlined" 
            onClick={handleReset}
            sx={{ 
              flex: 1,
              borderColor: '#ff6b81', 
              color: '#ff6b81',
              '&:hover': {
                borderColor: '#ff4757',
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TourFilter; 