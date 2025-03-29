import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Container,
  Divider,
  Avatar,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Article, Tour } from '../../types';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

interface ArticleDetailProps {
  article: Article;
  relatedTours?: Tour[];
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, relatedTours = [] }) => {
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, mb: 4, borderRadius: 2 }}>
        <Box sx={{ position: 'relative', mb: 4 }}>
          <Box
            component="img"
            src={article.image}
            alt={article.title}
            sx={{
              width: '100%',
              height: { xs: 200, md: 400 },
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Box>

        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 2,
            fontWeight: 600,
            fontFamily: "'Playfair Display', serif",
            color: '#333'
          }}
        >
          {article.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CalendarTodayIcon sx={{ fontSize: 18, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary" sx={{ mr: 3 }}>
            {article.date}
          </Typography>
          
          <PersonIcon sx={{ fontSize: 18, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {article.author}
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        <Box 
          sx={{ 
            '& p': { 
              mb: 2,
              lineHeight: 1.7,
              fontSize: '1.1rem'
            },
            '& h3': {
              mt: 4,
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: '#333'
            }
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar 
            sx={{ 
              width: 60, 
              height: 60,
              mr: 2,
              bgcolor: '#ff6b81'
            }}
          >
            {article.author.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {article.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Travel Writer & Photographer
            </Typography>
          </Box>
        </Box>
        
        {relatedTours.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                fontFamily: "'Playfair Display', serif",
                color: '#333'
              }}
            >
              Related Tours You Might Like
            </Typography>
            
            <Grid container spacing={3}>
              {relatedTours.map((tour) => (
                <Grid item key={tour.id} xs={12} sm={6} md={4}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={tour.images[0]}
                      alt={tour.title}
                    />
                    <CardContent>
                      <Typography 
                        gutterBottom 
                        variant="h6" 
                        component="div"
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {tour.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {tour.location} • {tour.duration}
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
                        View Tour
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ArticleDetail; 