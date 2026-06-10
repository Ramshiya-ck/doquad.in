import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Mail, Phone, MapPin, ArrowRight, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

export const ContactPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    // Navigate back to the last page
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form submit feedback
    alert('Thank you for contacting us! We will get back to you shortly.');
    navigate(-1);
  };

  const socialLinks = [
    { id: 1, icon: <Facebook size={18} />, link: 'https://facebook.com' },
    { id: 2, icon: <Linkedin size={18} />, link: 'https://linkedin.com' },
    { id: 3, icon: <Twitter size={18} />, link: 'https://twitter.com' },
    { id: 4, icon: <Instagram size={18} />, link: 'https://instagram.com' },
  ];

  return (
    <div 
      onClick={handleClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-slate-950/40 backdrop-blur-xl animate-fade-in cursor-pointer"
    >
      {/* Contact Glass Card */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-slate-900/80 border border-white/10 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden grid grid-cols-1 md:grid-cols-12 relative cursor-default"
      >
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer z-20"
          aria-label="Close contact modal"
        >
          <X size={24} />
        </button>

        {/* Left Column - Contact Info */}
        <div className="md:col-span-5 bg-white/5 p-8 md:p-10 flex flex-col justify-between h-full border-r border-white/5 text-left relative overflow-hidden">
          {/* Subtle neon ambient light behind info */}
          <div className="absolute -top-20 -left-20 w-44 h-44 bg-primary/20 rounded-full filter blur-[40px] -z-10" />

          <div>
            <h4 className="font-extrabold text-white text-[15px] mb-6 uppercase tracking-wider">
              Contact Info
            </h4>
            
            <ul className="flex flex-col gap-6 text-slate-300 text-[14px]">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Talk to us</span>
                  <a href="mailto:info@doquad.com" className="hover:text-primary transition-colors">info@doquad.com</a>
                </div>
              </li>
              
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Call us</span>
                  <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Visit us</span>
                  <span>Kochi, Kerala, India</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social icons */}
          <div className="mt-12">
            <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider mb-4">Follow us</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary border border-white/5 hover:border-transparent text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:col-span-7 p-8 md:p-10 text-left flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
            Get in Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <div className="flex flex-col">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full transition-all duration-300"
              />
            </div>
            
            {/* Email Input */}
            <div className="flex flex-col">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full transition-all duration-300"
              />
            </div>
            
            {/* Subject Input */}
            <div className="flex flex-col">
              <input
                type="text"
                required
                placeholder="Subject"
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full transition-all duration-300"
              />
            </div>
            
            {/* Message Area */}
            <div className="flex flex-col">
              <textarea
                rows="4"
                required
                placeholder="Tell us about your project..."
                className="bg-white/5 border border-white/10 text-white placeholder-slate-400 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-98 cursor-pointer mt-2 text-sm"
            >
              Send Message
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
