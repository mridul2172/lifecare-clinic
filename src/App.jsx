import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;