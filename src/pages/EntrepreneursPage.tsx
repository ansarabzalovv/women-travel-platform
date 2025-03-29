import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper,
  Avatar,
  Divider,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { Link } from 'react-router-dom';
import BusinessIcon from '@mui/icons-material/Business';
import CommentIcon from '@mui/icons-material/Comment';

const EntrepreneursPage: React.FC = () => {
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
          Entrepreneur Success Stories
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Learn from successful women entrepreneurs in the tourism industry and share your experiences.
        </Typography>

        {/* Featured Entrepreneur Story */}
        <Paper elevation={2} sx={{ p: 4, mb: 6, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar 
              src="/images/entrepreneur1.jpg" 
              sx={{ width: 80, height: 80, mr: 3 }}
            >
              <BusinessIcon sx={{ fontSize: 40 }} />
            </Avatar>
            <Box>
              <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                Aizhan Kuzembayeva
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Owner of "Bayan Tour" Travel Company
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ mb: 3, color: '#ff6b81' }}>
            Dear colleagues! How to attract tourists during the off-season?
          </Typography>

          <Typography variant="body1" paragraph>
            Tips from a travel company owner who found ways to maintain income during the off-season.
          </Typography>

          <Typography variant="body1" paragraph>
            During the off-season, we started offering not only excursions but also masterclasses from local artisans, 
            and collaborated with restaurants and hotels to create tour packages.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Comments Section */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            Comments
          </Typography>

          <List>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Anya Egofarova" src="/images/commenter1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Anya Egofarova"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Great idea! Colleagues, what do you think about the "Selfie Travel" tour operator? Share your experience!
                  </Typography>
                }
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Marzhan Kalmarzhyn" src="/images/commenter2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Marzhan Kalmarzhyn"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Great company! They now have destinations to Cambodia! Let's book!
                  </Typography>
                }
              />
            </ListItem>
          </List>

          {/* Comment Form */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add a Comment
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Share your thoughts..."
              sx={{ mb: 2 }}
            />
            <Button 
              variant="contained" 
              startIcon={<CommentIcon />}
              sx={{ 
                bgcolor: '#ff6b81',
                '&:hover': {
                  bgcolor: '#ff4757',
                }
              }}
            >
              Post Comment
            </Button>
          </Box>
        </Paper>

        {/* More Stories Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            mb: 4,
            fontFamily: "'Playfair Display', serif",
            color: '#333',
            fontWeight: 600
          }}
        >
          More Success Stories
        </Typography>

        <Grid container spacing={4}>
          {/* Add more entrepreneur stories here */}
        </Grid>
      </Box>
    </Container>
  );
};

export default EntrepreneursPage; 