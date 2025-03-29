import React from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import ArticleCard from './ArticleCard';
import { Article } from '../../types';

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress sx={{ color: '#ff6b81' }} />
      </Box>
    );
  }

  if (articles.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h6" color="text.secondary">
          No articles found.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Check back later for new content.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item key={article.id} xs={12} sm={6} md={4}>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticleList; 