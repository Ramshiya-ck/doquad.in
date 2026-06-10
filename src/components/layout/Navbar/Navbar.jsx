import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../../../assets/images/logo.png';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Process', path: '#process' }, // Can be hash links or paths
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Update active state based on window scroll / URL path
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (itemName) => {
    setActiveItem(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick('Home')} className="flex items-center gap-2">
          <img src={logoImg} alt="DoQuad Logo" className="h-8 md:h-10 w-auto object-contain" />
          <span className="text-2xl font-extrabold text-[#031737] tracking-tight">doquad</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.path.startsWith('#')) {
                    e.preventDefault();
                    const element = document.getElementById(item.path.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  handleNavClick(item.name);
                }}
                className={`relative font-medium text-[15px] transition-all duration-300 py-2 group ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
              >
                {item.name}
                
                {/* Curved underline on hover or active */}
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[6px] text-primary transition-all duration-300 origin-center ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full fill-none stroke-current stroke-[5px] stroke-linecap-round">
                    <path d="M5 2 Q 50 8, 95 2" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="/contact"
            onClick={() => handleNavClick('Contact')}
            className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-[14px]"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-800 hover:text-primary focus:outline-none transition-colors"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`lg:hidden fixed inset-y-0 right-0 z-40 w-3/4 max-w-sm bg-white shadow-2xl flex flex-col p-6 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="DoQuad Logo" className="h-8 w-auto object-contain" />
            <span className="text-2xl font-extrabold text-[#031737] tracking-tight">doquad</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-800 hover:text-primary focus:outline-none"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => {
                  if (item.path.startsWith('#')) {
                    e.preventDefault();
                    const element = document.getElementById(item.path.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                  handleNavClick(item.name);
                }}
                className={`font-medium text-lg py-2 border-b border-slate-100 flex justify-between items-center ${isActive ? 'text-primary font-semibold' : 'text-slate-600 hover:text-primary'}`}
              >
                {item.name}
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
        </div>

        <div className="mt-auto">
          <a
            href="/contact"
            onClick={() => handleNavClick('Contact')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-full flex justify-center items-center gap-2 transition-all duration-300 shadow-md cursor-pointer text-center"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="lg:hidden fixed inset-0 z-30 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        />
      )}
    </nav>
  );
};

export default Navbar;
