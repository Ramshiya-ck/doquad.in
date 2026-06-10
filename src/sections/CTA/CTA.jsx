import React from 'react';
import { ArrowRight } from 'lucide-react';
import envelopeImg from '../../assets/images/envelope-removebg-preview.png';

export const CTA = () => {
  return (
    <section className="bg-gradient-to-b from-white via-white to-[#020b18] pt-16 pb-0 px-6 md:px-12 relative z-10">
      {/* Container Box */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#031737] to-[#010915] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/5">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left max-w-xl z-10">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-primary/20 border border-primary/30 px-3.5 py-1 rounded-full text-primary font-bold text-[12px] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Let's Work Together
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-extrabold mt-5 mb-3 leading-tight tracking-tight">
            Have A Project In Mind?
          </h2>
          
          <p className="text-slate-300 text-[14px] sm:text-base leading-relaxed">
            Let's discuss your project and build something amazing together.
          </p>
        </div>

        {/* Center Mockup - Floating 3D Envelope */}
        <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center pointer-events-none lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 sphere-float-slow z-10">
          <img
            src={envelopeImg}
            alt="3D Floating Mail Envelope"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(15,95,253,0.3)]"
          />
        </div>

        {/* Right Column - Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto z-10">
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-[14px]"
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </a>
          
          <a
            href="/contact"
            className="bg-transparent border border-white/20 hover:border-white text-white hover:bg-white hover:text-[#020b18] font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:-translate-y-0.5 cursor-pointer text-[14px]"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
