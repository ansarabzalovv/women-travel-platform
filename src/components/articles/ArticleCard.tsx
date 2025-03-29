import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Button,
  CardActionArea
} from '@mui/material';
import { Article } from '../../types';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  // Извлекаем первый параграф из HTML-контента для превью
  const getPreview = (content: string): string => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const firstParagraph = div.querySelector('p');
    return firstParagraph ? firstParagraph.textContent || '' : '';
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        }
      }}
      elevation={2}
    >
      <CardActionArea component={Link} to={`/articles/${article.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={article.image}
          alt={article.title}
          sx={{ objectFit: 'cover' }}
        />
      </CardActionArea>
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="div" 
          sx={{ 
            fontWeight: 600,
            fontFamily: "'Playfair Display', serif",
            color: '#333'
          }}
        >
          {article.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CalendarTodayIcon sx={{ fontSize: 16, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {article.date}
          </Typography>
          
          <PersonIcon sx={{ fontSize: 16, color: '#ff6b81', mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {article.author}
          </Typography>
        </Box>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {getPreview(article.content)}
        </Typography>
        
        <Box sx={{ mt: 'auto' }}>
          <Button 
            component={Link} 
            to={`/articles/${article.id}`}
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
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ArticleCard; 