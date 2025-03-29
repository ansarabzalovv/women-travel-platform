import { useState, useEffect } from 'react';

interface ImageOptimizationOptions {
  quality?: number;
  width?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'original';
  placeholder?: boolean;
}

/**
 * Хук для оптимизации изображений
 * @param originalSrc Исходный URL изображения
 * @param options Опции оптимизации
 * @returns Оптимизированный URL и состояние загрузки
 */
const useImageOptimization = (
  originalSrc: string, 
  options: ImageOptimizationOptions = {}
) => {
  const [optimizedSrc, setOptimizedSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const {
    quality = 80,
    width,
    format = 'original',
    placeholder = true
  } = options;

  useEffect(() => {
    // Ресетим состояние при изменении URL
    setIsLoading(true);
    setIsError(false);

    // Функция для проверки, что URL от Unsplash
    const isUnsplashUrl = (url: string): boolean => {
      return url.includes('unsplash.com');
    };

    // Оптимизация для Unsplash изображений
    if (isUnsplashUrl(originalSrc)) {
      try {
        const url = new URL(originalSrc);
        
        // Удаляем существующие параметры, если они есть
        url.search = '';
        
        // Добавляем параметры оптимизации
        const params = new URLSearchParams();
        
        // Устанавливаем качество
        params.append('q', quality.toString());
        
        // Устанавливаем ширину, если указана
        if (width) {
          params.append('w', width.toString());
        }
        
        // Устанавливаем формат, если не original
        if (format !== 'original') {
          params.append('fm', format);
        }
        
        // Добавляем параметры к URL
        url.search = params.toString();
        
        setOptimizedSrc(url.toString());
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при оптимизации изображения:', error);
        setOptimizedSrc(originalSrc); // Возвращаем оригинальный URL в случае ошибки
        setIsError(true);
        setIsLoading(false);
      }
    } else {
      // Для не-Unsplash изображений просто используем оригинальный URL
      setOptimizedSrc(originalSrc);
      setIsLoading(false);
    }
  }, [originalSrc, quality, width, format, placeholder]);

  return { src: optimizedSrc, isLoading, isError };
};

export default useImageOptimization; 