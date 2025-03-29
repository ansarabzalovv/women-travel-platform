import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  TextField,
  Button,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        pt: 6,
        pb: 3,
        mt: 'auto',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                color: '#ff6b81',
                mb: 2
              }}
            >
              WomenTravel
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Empowering women to explore the world safely and confidently. 
              We provide curated travel experiences designed specifically for women travelers.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" color="inherit" sx={{ mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="inherit" sx={{ mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" color="inherit" sx={{ mr: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="pinterest" color="inherit" sx={{ mr: 1 }}>
                <PinterestIcon />
              </IconButton>
              <IconButton aria-label="youtube" color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              {['Home', 'Tours', 'Articles', 'Contact'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link 
                    component={RouterLink} 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    underline="hover"
                    color="text.secondary"
                    sx={{ 
                      '&:hover': { color: '#ff6b81' },
                      transition: 'color 0.2s'
                    }}
                  >
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
              <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ color: '#ff6b81', mr: 1, fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  XIT 2101
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ color: '#ff6b81', mr: 1, fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  +7 705 411 3711
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ color: '#ff6b81', mr: 1, fontSize: 20, mt: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  Turkistan, Kazakhstan, International university of tourism and hospitality
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: 600 }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Stay updated with our latest tours, travel tips, and exclusive offers.
            </Typography>
            <Box component="form" noValidate sx={{ display: 'flex' }}>
              <TextField
                size="small"
                placeholder="Your email address"
                variant="outlined"
                fullWidth
                sx={{ 
                  mr: 1,
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#ff6b81',
                    },
                  },
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: '#ff6b81', 
                  '&:hover': { bgcolor: '#ff4757' } 
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} WomenTravel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 