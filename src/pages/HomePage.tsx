import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import TourCard from '../components/tours/TourCard';
import ArticleCard from '../components/articles/ArticleCard';
import { Tour, Article } from '../types';
import { api } from '../services/api';

const HomePage: React.FC = () => {
  const [featuredTours, setFeaturedTours] = useState<Tour[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [toursData, articlesData] = await Promise.all([
          api.getFeaturedTours(),
          api.getArticles()
        ]);
        
        setFeaturedTours(toursData);
        setArticles(articlesData.slice(0, 3)); // Только первые 3 статьи
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Hero 
        title="Discover the World with Women Like You"
        subtitle="Join our community of female travelers for safe, empowering, and unforgettable adventures around the globe."
        backgroundImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80"
        buttonText="Explore Tours"
        buttonLink="/tours"
      />

      {/* Featured Tours Section */}
      <Container>
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontFamily: "'Playfair Display', serif",
                color: '#333',
                fontWeight: 600
              }}
            >
              Featured Tours
            </Typography>
            
            <Button 
              component={Link} 
              to="/tours"
              variant="outlined"
              sx={{ 
                borderColor: '#ff6b81', 
                color: '#ff6b81',
                '&:hover': {
                  borderColor: '#ff4757',
                  backgroundColor: 'rgba(255, 107, 129, 0.05)',
                }
              }}
            >
              View All Tours
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {featuredTours.map((tour) => (
              <Grid item key={tour.id} xs={12} sm={6} md={4}>
                <TourCard tour={tour} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center"
            sx={{ 
              mb: 5,
              fontFamily: "'Playfair Display', serif",
              color: '#333',
              fontWeight: 600
            }}
          >
            Why Travel With Us
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box 
                  component="img" 
                  src="https://img.icons8.com/?size=100&id=Eya1W9PIj1fw&format=png&color=000000"
                  alt="Female Guides"
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>Female Guides</Typography>
                <Typography variant="body2" color="text.secondary">
                  Our experienced female guides create a comfortable and empowering environment for all travelers.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box 
                  component="img" 
                  src="https://img.icons8.com/cotton/100/000000/shield--v1.png"
                  alt="Safety First"
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>Safety First</Typography>
                <Typography variant="body2" color="text.secondary">
                  We prioritize your safety with carefully vetted accommodations and 24/7 support during your journey.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box 
                  component="img" 
                  src="https://img.icons8.com/cotton/100/000000/conference.png"
                  alt="Small Groups"
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>Small Groups</Typography>
                <Typography variant="body2" color="text.secondary">
                  Travel in intimate groups of 8-12 women, allowing for authentic experiences and lasting friendships.
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                <Box 
                  component="img" 
                  src="https://img.icons8.com/cotton/100/000000/like--v1.png"
                  alt="Authentic Experiences"
                  sx={{ height: 80, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>Authentic Experiences</Typography>
                <Typography variant="body2" color="text.secondary">
                  Immerse yourself in local cultures with unique activities and connections with local women.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundImage: 'linear-gradient(rgba(255, 107, 129, 0.05), rgba(255, 107, 129, 0.1))'
        }}
      >
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center"
            sx={{ 
              mb: 5,
              fontFamily: "'Playfair Display', serif",
              color: '#333',
              fontWeight: 600
            }}
          >
            What Our Travelers Say
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  bgcolor: 'white', 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                  "Traveling with WomenTravel was the best decision I've made. I felt safe, connected with amazing women, and experienced Japan in a way I never could have on my own."
                </Typography>
                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Johnson"
                    sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Sarah Johnson</Typography>
                    <Typography variant="body2" color="text.secondary">Photography Tour in Japan</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  bgcolor: 'white', 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                  "The Morocco tour exceeded all my expectations. Our guide was knowledgeable and passionate, and the connections we made with local women artisans were truly special."
                </Typography>
                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Emily Rodriguez"
                    sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Emily Rodriguez</Typography>
                    <Typography variant="body2" color="text.secondary">Cultural Tour of Morocco</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box 
                sx={{ 
                  bgcolor: 'white', 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                  "As a solo traveler, I was nervous about joining a group tour, but the Bali retreat was transformative. I left with new friends, a renewed sense of self, and memories I'll cherish forever."
                </Typography>
                <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Box
                    component="img"
                    src="https://randomuser.me/api/portraits/women/33.jpg"
                    alt="Michelle Lee"
                    sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle2" fontWeight={600}>Michelle Lee</Typography>
                    <Typography variant="body2" color="text.secondary">Yoga Retreat in Bali</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Travel Articles Section */}
      <Container sx={{ my: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#333',
              fontWeight: 600
            }}
          >
            Travel Articles
          </Typography>
          
          <Button 
            component={Link} 
            to="/articles"
            variant="outlined"
            sx={{ 
              borderColor: '#ff6b81', 
              color: '#ff6b81',
              '&:hover': {
                borderColor: '#ff4757',
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            View All Articles
          </Button>
        </Box>
        
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Grant Program Section */}
      <Box 
        sx={{ 
          py: 8, 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white'
        }}
      >
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center"
            sx={{ 
              mb: 5,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600
            }}
          >
            BECOME AN ENTREPRENEUR
          </Typography>
          
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
              The "Women Tour" forum announces a call for women who want to work in tourism, offering them 5,000,000 tenge.
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 3, color: '#ff6b81', fontWeight: 600 }}>
              Criteria:
            </Typography>
            
            <Box component="ul" sx={{ textAlign: 'left', mb: 4 }}>
              <Typography component="li" sx={{ mb: 2, opacity: 0.9 }}>Be under 30 years old</Typography>
              <Typography component="li" sx={{ mb: 2, opacity: 0.9 }}>Submit your application by May 5th</Typography>
              <Typography component="li" sx={{ mb: 2, opacity: 0.9 }}>Create a tourism-related business project</Typography>
              <Typography component="li" sx={{ mb: 2, opacity: 0.9 }}>Attend the project defense after application approval</Typography>
              <Typography component="li" sx={{ opacity: 0.9 }}>Receive a grant of 5,000,000 tenge to start your business</Typography>
            </Box>
            
            <Button 
              component={Link} 
              to="/contact"
              variant="contained" 
              size="large"
              sx={{ 
                py: 1.5,
                px: 4,
                bgcolor: '#ff6b81',
                '&:hover': {
                  bgcolor: '#ff4757',
                }
              }}
            >
              Submit Application
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Ready for Your Next Adventure Section */}
      <Box 
        sx={{ 
          bgcolor: '#ff6b81', 
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600
            }}
          >
            Ready for Your Next Adventure?
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 400, maxWidth: 700, mx: 'auto' }}>
            Join our community of women travelers and discover the world in a safe, supportive environment.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              component={Link} 
              to="/tours"
              variant="contained" 
              size="large"
              sx={{ 
                py: 1.5,
                px: 4,
                bgcolor: 'white', 
                color: '#ff6b81',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Browse Tours
            </Button>
            
            <Button 
              component={Link} 
              to="/contact"
              variant="outlined" 
              size="large"
              sx={{ 
                py: 1.5,
                px: 4,
                borderColor: 'white', 
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 