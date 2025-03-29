import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, CircularProgress, Container, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArticleDetail from '../components/articles/ArticleDetail';
import { Article, Tour } from '../types';
import { api } from '../services/api';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedTours, setRelatedTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) {
        setError('Article ID is missing');
        setLoading(false);
        return;
      }

      try {
        const data = await api.getArticleById(id);
        
        if (data) {
          setArticle(data);
          
          // Получаем связанные туры (для примера берем первые 3 тура)
          const toursData = await api.getTours();
          setRelatedTours(toursData.slice(0, 3));
        } else {
          setError('Article not found');
        }
      } catch (error) {
        console.error('Error fetching article:', error);
        setError('Failed to load article details');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  const handleBack = () => {
    navigate('/articles');
  };

  if (loading) {
    return (
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
          <CircularProgress sx={{ color: '#ff6b81' }} />
        </Box>
      </Container>
    );
  }

  if (error || !article) {
    return (
      <Container>
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h5" color="error" gutterBottom>
            {error || 'Article not found'}
          </Typography>
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBack}
            sx={{ 
              mt: 2,
              color: '#ff6b81',
              '&:hover': {
                backgroundColor: 'rgba(255, 107, 129, 0.05)',
              }
            }}
          >
            Back to Articles
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBack}
          sx={{ 
            mb: 3,
            color: '#ff6b81',
            '&:hover': {
              backgroundColor: 'rgba(255, 107, 129, 0.05)',
            }
          }}
        >
          Back to Articles
        </Button>
      </Container>
      
      <ArticleDetail article={article} relatedTours={relatedTours} />
    </Box>
  );
};

export default ArticleDetailPage; 