import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/layout/ScrollToTop/ScrollToTop';
import AppRoutes from './routes/AppRoutes';
import ContactPage from './pages/Contact/Contact';
import './styles/variables.css';
import './styles/globals.css';
import './styles/animations.css';

function App() {
  const location = useLocation();
  const [lastPath, setLastPath] = useState('/');

  // Track the last path that was NOT the contact page
  useEffect(() => {
    if (location.pathname !== '/contact') {
      setLastPath(location.pathname);
    }
  }, [location.pathname]);

  const isContactActive = location.pathname === '/contact';

  return (
    <>
      <ScrollToTop />
      {/* Container wraps the background page, which will blur when Contact overlay is open */}
      <div className={`flex flex-col min-h-screen transition-all duration-500 ${isContactActive ? 'filter blur-[8px] pointer-events-none' : ''}`}>
        <Navbar />
        <main className="flex-grow">
          <AppRoutes lastPath={lastPath} />
        </main>
        <Footer />
      </div>

      {/* Render glassy Contact Page overlay on top */}
      {isContactActive && <ContactPage />}
    </>
  );
}

export default App;