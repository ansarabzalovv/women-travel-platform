import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import { Tour } from '../../types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

interface TourDetailProps {
  tour: Tour;
}

const TourDetail: React.FC<TourDetailProps> = ({ tour }) => {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);

  const handleOpenImage = (index: number) => {
    setOpenImageIndex(index);
  };

  const handleCloseImage = () => {
    setOpenImageIndex(null);
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ position: 'relative', mb: 3 }}>
              <Box
                component="img"
                src={tour.images[0]}
                alt={tour.title}
                sx={{
                  width: '100%',
                  height: { xs: 250, md: 400 },
                  objectFit: 'cover',
                  borderRadius: 2,
                }}
              />
              {tour.featured && (
                <Chip
                  label="Featured Tour"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    backgroundColor: '#e0f7fa',
                    color: '#00acc1',
                    fontWeight: 500,
                  }}
                />
              )}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {tour.images.slice(1).map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image}
                  alt={`${tour.title} - image ${index + 2}`}
                  onClick={() => handleOpenImage(index + 1)}
                  sx={{
                    width: 100,
                    height: 70,
                    objectFit: 'cover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              ))}
            </Box>

            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
                color: '#333',
              }}
            >
              {tour.title}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ color: '#ff6b81', mr: 1 }} />
                <Typography variant="body1">{tour.location}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CalendarTodayIcon sx={{ color: '#ff6b81', mr: 1 }} />
                <Typography variant="body1">{tour.date}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ color: '#ff6b81', mr: 1 }} />
                <Typography variant="body1">{tour.duration}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip
                  label={tour.format}
                  size="small"
                  sx={{
                    backgroundColor: '#ffd3da',
                    color: '#ff6b81',
                    fontWeight: 500,
                  }}
                />
              </Box>
            </Box>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.7 }}>
              {tour.description}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: 600,
                fontFamily: "'Playfair Display', serif",
                color: '#333',
              }}
            >
              Tour Program
            </Typography>

            <List sx={{ mb: 4 }}>
              {tour.program.map((item, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#ff6b81' }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 2, overflow: 'hidden', position: 'sticky', top: 20 }}>
              <CardMedia
                component="img"
                height="160"
                image={tour.images[0]}
                alt={tour.title}
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    fontFamily: "'Playfair Display', serif",
                    color: '#333',
                  }}
                >
                  Book This Tour
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AttachMoneyIcon sx={{ color: '#ff6b81', mr: 1 }} />
                  <Typography variant="h4" sx={{ fontWeight: 700, color: '#ff6b81' }}>
                    {tour.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    per person
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Small group size" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Female tour guides" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Accommodation included" />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Free cancellation (30 days prior)" />
                  </ListItem>
                </List>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    backgroundColor: '#ff6b81',
                    '&:hover': {
                      backgroundColor: '#ff4757',
                    },
                  }}
                >
                  Book Now
                </Button>

                <Button
                  variant="outlined"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderColor: '#ff6b81',
                    color: '#ff6b81',
                    '&:hover': {
                      borderColor: '#ff4757',
                      backgroundColor: 'rgba(255, 107, 129, 0.05)',
                    },
                  }}
                >
                  Ask a Question
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Image Dialog */}
      <Dialog
        open={openImageIndex !== null}
        onClose={handleCloseImage}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          {openImageIndex !== null && (
            <Box
              component="img"
              src={tour.images[openImageIndex]}
              alt={`${tour.title} - full view`}
              sx={{
                width: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          )}
          <IconButton
            onClick={handleCloseImage}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default TourDetail; 