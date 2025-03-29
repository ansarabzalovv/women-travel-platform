import React, { memo } from 'react';
import { Box, Skeleton } from '@mui/material';
import useImageOptimization from '../../hooks/useImageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number | string;
  sx?: any;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
}

/**
 * Компонент для отображения оптимизированных изображений
 */
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width,
  height = 'auto',
  sx = {},
  quality = 80,
  format = 'webp',
  objectFit = 'cover',
  className
}) => {
  const { src: optimizedSrc, isLoading, isError } = useImageOptimization(src, { 
    quality, 
    width, 
    format 
  });

  if (isLoading) {
    return (
      <Skeleton 
        variant="rectangular" 
        width={width || '100%'} 
        height={height || 200} 
        sx={{
          borderRadius: sx.borderRadius || 0,
          ...sx
        }}
      />
    );
  }

  if (isError) {
    // Используем исходное изображение в случае ошибки
    return (
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
        sx={{
          width: width || '100%',
          height: height || 'auto',
          objectFit,
          ...sx
        }}
      />
    );
  }

  return (
    <Box
      component="img"
      src={optimizedSrc}
      alt={alt}
      loading="lazy"
      className={className}
      sx={{
        width: width || '100%',
        height: height || 'auto',
        objectFit,
        ...sx
      }}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 