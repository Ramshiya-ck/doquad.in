import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import logoImg from '../../../assets/images/logo.png';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    { id: 1, icon: <Facebook size={18} />, link: 'https://facebook.com' },
    { id: 2, icon: <Linkedin size={18} />, link: 'https://linkedin.com' },
    { id: 3, icon: <Twitter size={18} />, link: 'https://twitter.com' },
    { id: 4, icon: <Instagram size={18} />, link: 'https://www.instagram.com/doquad.in?igsh=MXB2ODRrbGhoNzZ4ZA%3D%3D&utm_source=qr' },
  ];

  return (
    <footer className="bg-[#020b18] text-white pt-16 pb-8 px-6 md:px-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Logo & About */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="DoQuad Logo" className="h-8 w-auto object-contain" />
              <span className="text-2xl font-extrabold text-white tracking-tight">doquad</span>
            </div>
            <p className="text-slate-400 text-sm mt-4 mb-6 leading-relaxed max-w-sm">
              We build powerful digital solutions that help businesses grow and succeed in the digital world.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-extrabold text-white text-[15px] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-[14px]">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-extrabold text-white text-[15px] mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-[14px]">
              <li><a href="/services/web-development" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="/services/ecommerce" className="hover:text-primary transition-colors">E-Commerce Development</a></li>
              <li><a href="/services/erp-crm" className="hover:text-primary transition-colors">ERP / CRM Solutions</a></li>
              <li><a href="/services/maintenance" className="hover:text-primary transition-colors">Software Maintenance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-extrabold text-white text-[15px] mb-4 uppercase tracking-wider">
              Support
            </h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-[14px]">
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <h4 className="font-extrabold text-white text-[15px] mb-4 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-[14px]">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@doquad.com" className="hover:text-primary transition-colors">info@doquad.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+919526223034" className="hover:text-primary transition-colors">+91 95262 23034</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Malappuram, Kerala, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright & scroll-to-top */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Doquad. All rights reserved.</p>
          
          {/* Scroll To Top button */}
          <button
            onClick={handleScrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 rounded-full bg-white hover:bg-primary text-[#020b18] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="stroke-[3]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
