import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Box } from '@mui/material';

interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => ReactNode;
  windowHeight?: number;
  overscan?: number;
  containerStyle?: React.CSSProperties;
  className?: string;
}

/**
 * Компонент для оптимизированного отображения длинных списков
 * Рендерит только видимые элементы, что улучшает производительность
 */
function VirtualizedList<T>({
  items,
  itemHeight,
  renderItem,
  windowHeight = 600,
  overscan = 3,
  containerStyle = {},
  className
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Вычисляем индексы видимых элементов
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    items.length - 1,
    Math.floor((scrollTop + windowHeight) / itemHeight) + overscan
  );

  // Отслеживаем скролл
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Подготавливаем видимые элементы
  const visibleItems = items.slice(startIndex, endIndex + 1).map((item, index) => {
    const actualIndex = startIndex + index;
    return renderItem(item, actualIndex);
  });

  return (
    <Box
      ref={containerRef}
      className={className}
      sx={{
        height: windowHeight,
        overflow: 'auto',
        position: 'relative',
        ...containerStyle
      }}
    >
      <Box
        sx={{
          height: `${items.length * itemHeight}px`,
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: `${startIndex * itemHeight}px`,
            width: '100%'
          }}
        >
          {visibleItems}
        </Box>
      </Box>
    </Box>
  );
}

export default VirtualizedList; 