import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import ArticleList from '../components/articles/ArticleList';
import { Article } from '../types';
import { api } from '../services/api';

const ArticlesPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await api.getArticles();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
          Travel Articles
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Discover travel tips, destination guides, and inspiring stories for women travelers.
        </Typography>
        
        <ArticleList articles={articles} loading={loading} />
      </Box>
    </Container>
  );
};

export default ArticlesPage; 