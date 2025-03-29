import { Tour, Article, ContactForm } from '../types';
import { tours } from '../data/tours';
import { articles } from '../data/articles';

// Имитация API-запросов с задержкой для реалистичности
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Простая система кэширования
class Cache {
  private static instance: Cache;
  private cache: Map<string, { data: any, timestamp: number }>;
  private defaultTTL: number; // время жизни кэша в мс

  private constructor() {
    this.cache = new Map();
    this.defaultTTL = 5 * 60 * 1000; // 5 минут по умолчанию
  }

  public static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  public set(key: string, data: any, ttl: number = this.defaultTTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now() + ttl
    });
  }

  public get(key: string): any {
    const cached = this.cache.get(key);
    if (!cached) return null;

    // Проверяем истекло ли время жизни кэша
    if (Date.now() > cached.timestamp) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  public has(key: string): boolean {
    return this.get(key) !== null;
  }

  public invalidate(key: string): void {
    this.cache.delete(key);
  }

  public clear(): void {
    this.cache.clear();
  }
}

// Получаем экземпляр кэша
const cache = Cache.getInstance();

export const api = {
  // Туры
  getTours: async (): Promise<Tour[]> => {
    const cacheKey = 'all_tours';
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    // Если в кэше нет, получаем данные
    await delay(500);
    
    // Кэшируем результат
    cache.set(cacheKey, tours);
    
    return tours;
  },

  getTourById: async (id: string): Promise<Tour | undefined> => {
    const cacheKey = `tour_${id}`;
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    await delay(300);
    const tour = tours.find(tour => tour.id === id);
    
    // Кэшируем результат
    if (tour) {
      cache.set(cacheKey, tour);
    }
    
    return tour;
  },

  getFeaturedTours: async (): Promise<Tour[]> => {
    const cacheKey = 'featured_tours';
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    await delay(300);
    const featuredTours = tours.filter(tour => tour.featured);
    
    // Кэшируем результат
    cache.set(cacheKey, featuredTours);
    
    return featuredTours;
  },

  filterTours: async (filters: {
    location?: string;
    format?: string;
    date?: string;
  }): Promise<Tour[]> => {
    // Создаем ключ кэша на основе фильтров
    const filterValues = Object.values(filters).filter(v => v).join('_');
    const cacheKey = `filtered_tours_${filterValues}`;
    
    // Если все фильтры пусты, возвращаем все туры
    if (!filterValues) {
      return api.getTours();
    }
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    await delay(500);
    
    const filteredTours = tours.filter(tour => {
      let match = true;
      
      if (filters.location && !tour.location.toLowerCase().includes(filters.location.toLowerCase())) {
        match = false;
      }
      
      if (filters.format && tour.format !== filters.format) {
        match = false;
      }
      
      if (filters.date && !tour.date.includes(filters.date)) {
        match = false;
      }
      
      return match;
    });
    
    // Кэшируем результат
    cache.set(cacheKey, filteredTours);
    
    return filteredTours;
  },

  // Статьи
  getArticles: async (): Promise<Article[]> => {
    const cacheKey = 'all_articles';
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    await delay(500);
    
    // Кэшируем результат
    cache.set(cacheKey, articles);
    
    return articles;
  },

  getArticleById: async (id: string): Promise<Article | undefined> => {
    const cacheKey = `article_${id}`;
    
    // Проверяем кэш
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    
    await delay(300);
    const article = articles.find(article => article.id === id);
    
    // Кэшируем результат
    if (article) {
      cache.set(cacheKey, article);
    }
    
    return article;
  },

  // Контактная форма
  submitContactForm: async (formData: ContactForm): Promise<{ success: boolean; message: string }> => {
    // Здесь мы не кэшируем, так как это POST запрос
    await delay(1000);
    
    // Имитация успешной отправки формы
    console.log('Form submitted:', formData);
    
    return {
      success: true,
      message: 'Thank you for your message! We will contact you soon.'
    };
  },

  // Метод для очистки кэша
  clearCache: (): void => {
    cache.clear();
  }
}; 