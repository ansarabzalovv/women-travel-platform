import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress, Box } from '@mui/material';
import Layout from './components/layout/Layout';
import './App.css';
import EntrepreneursPage from './pages/EntrepreneursPage';

// Ленивая загрузка страниц
const HomePage = lazy(() => import('./pages/HomePage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const ArticlesPage = lazy(() => import('./pages/ArticlesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b81',
    },
    secondary: {
      main: '#2f3542',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});

const LoadingFallback = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/entrepreneur" element={<EntrepreneursPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
