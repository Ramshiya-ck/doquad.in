import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import ServicesPage from '../pages/Services/Services';
import PortfolioPage from '../pages/Portfolio/Portfolio';
import NotFound from '../pages/NotFound/NotFound';

export const AppRoutes = ({ lastPath }) => {
  const location = useLocation();

  // If we are currently on /contact, override the route matching to display the background page
  const targetLocation = location.pathname === '/contact'
    ? { ...location, pathname: lastPath || '/' }
    : location;

  return (
    <Routes location={targetLocation}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/contact" element={null} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
