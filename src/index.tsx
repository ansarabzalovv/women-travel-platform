import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Отключаем React.StrictMode в продакшене для предотвращения двойного рендеринга
const StrictModeWrapper = process.env.NODE_ENV === 'development' 
  ? React.StrictMode 
  : React.Fragment;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictModeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictModeWrapper>
);

// Регистрируем сервис-воркер для кэширования и работы офлайн
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    
    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', (event) => {
        // @ts-ignore
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
