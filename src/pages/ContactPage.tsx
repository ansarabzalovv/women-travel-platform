import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import ContactForm from '../components/common/ContactForm';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactPage: React.FC = () => {
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
          Grant Applications
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Apply for a grant to start your tourism business. We support women entrepreneurs in the travel industry.
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Paper elevation={2} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
              <Typography 
                variant="h5" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#333',
                  mb: 3
                }}
              >
                Get in Touch
              </Typography>
              
              <Box sx={{ mb: 3, display: 'flex' }}>
                <LocationOnIcon sx={{ color: '#ff6b81', mr: 2, fontSize: 24 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Our Office
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Turkistan, International university of tourism and hospitality<br />
                    Kazakhstan
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 3, display: 'flex' }}>
                <EmailIcon sx={{ color: '#ff6b81', mr: 2, fontSize: 24 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Email Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    XIT2101@mail.ru
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 3, display: 'flex' }}>
                <PhoneIcon sx={{ color: '#ff6b81', mr: 2, fontSize: 24 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Call Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    +7 705 411 3711
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex' }}>
                <AccessTimeIcon sx={{ color: '#ff6b81', mr: 2, fontSize: 24 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Office Hours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 5 }}>
          <Paper elevation={1} sx={{ p: 0, borderRadius: 2, overflow: 'hidden' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30171.17514080606!2d68.2208887391032!3d43.29756405465505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42766e7ce6ff2ae9%3A0xd37426530f0568fe!2sTurkistan%2C%20Kazakhstan!5e0!3m2!1sen!2sus!4v1631520047000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
            />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactPage; 