/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules

// Имена кэшей
const CACHE_NAME = 'women-travel-static-v1';
const API_CACHE_NAME = 'women-travel-api-v1';
const IMAGE_CACHE_NAME = 'women-travel-images-v1';

// Ресурсы для предварительного кэширования
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  // Добавьте другие статические ресурсы
];

// Устанавливаем сервис-воркер и предварительно кэшируем статические ресурсы
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  // Форсируем активацию сервис-воркера без ожидания закрытия вкладок
  self.skipWaiting();
});

// Активируем сервис-воркер и очищаем старые кэши
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, API_CACHE_NAME, IMAGE_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
  // Сервис-воркер начинает контролировать все клиенты сразу
  self.clients.claim();
});

// Обрабатываем запросы, применяя разные стратегии кэширования
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Стратегия для изображений: Cache First, затем сеть
  if (request.destination === 'image' || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.webp')) {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Стратегия для API-запросов: Network First, затем кэш
  if (url.pathname.includes('/api/')) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Стратегия для статических ресурсов: Cache First, затем сеть
  event.respondWith(handleStaticRequest(request));
});

// Обработка запросов изображений
async function handleImageRequest(request) {
  // Проверяем кэш
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // Если в кэше нет, запрашиваем из сети
  try {
    const response = await fetch(request);
    
    // Кэшируем только успешные ответы
    if (response.ok) {
      const clonedResponse = response.clone();
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        cache.put(request, clonedResponse);
      });
    }
    
    return response;
  } catch (error) {
    console.error('Error fetching image:', error);
    // В случае ошибки возвращаем запасное изображение
    return caches.match('/static/images/fallback.jpg');
  }
}

// Обработка API-запросов
async function handleApiRequest(request) {
  try {
    // Сначала пытаемся получить из сети
    const response = await fetch(request);
    
    // Кэшируем успешные ответы
    if (response.ok) {
      const clonedResponse = response.clone();
      caches.open(API_CACHE_NAME).then((cache) => {
        cache.put(request, clonedResponse);
      });
    }
    
    return response;
  } catch (error) {
    console.error('Error fetching from API:', error);
    
    // В случае ошибки сети, возвращаем из кэша
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Если нет ни сети, ни кэша, возвращаем ошибку 
    return new Response(JSON.stringify({ error: 'Network error, and no cached data available' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 503
    });
  }
}

// Обработка статических запросов
async function handleStaticRequest(request) {
  // Проверяем кэш
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  // Если в кэше нет, запрашиваем из сети
  try {
    const response = await fetch(request);
    
    // Кэшируем только успешные GET-запросы
    if (response.ok && request.method === 'GET') {
      const clonedResponse = response.clone();
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(request, clonedResponse);
      });
    }
    
    return response;
  } catch (error) {
    console.error('Error fetching static resource:', error);
    
    // Если запрос на HTML-страницу, возвращаем оффлайн-страницу
    if (request.destination === 'document') {
      return caches.match('/offline.html');
    }
    
    // Для других ресурсов возвращаем ошибку
    return new Response('Network error', { status: 503 });
  }
}

// Обработка сообщений от клиентов
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
}); 