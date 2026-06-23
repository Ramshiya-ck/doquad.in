import React from 'react';
import { ArrowRight } from 'lucide-react';
import envelopeImg from '../../assets/images/envelope-removebg-preview.png';

export const CTA = () => {
  return (
    <section className="bg-white pt-16 pb-28 lg:pb-36 px-6 md:px-12 relative overflow-hidden z-10">
      {/* Glow decorative blobs behind the glassy card */}
      <div className="absolute top-[20%] left-[20%] w-[320px] h-[320px] bg-primary/25 rounded-full filter blur-[80px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[20%] w-[280px] h-[280px] bg-blue-500/15 rounded-full filter blur-[70px] pointer-events-none z-0" />
      
      {/* Container Box */}
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#0c254e] via-[#051630] to-[#010a16] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_25px_60px_rgba(15,95,253,0.22)] border border-white/[0.08] z-10">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left max-w-xl z-10">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-semibold text-[13px] tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Let's Work Together
          </div>
          
          <h2 className="text-3xl md:text-[40px] font-extrabold mt-2 mb-3 leading-tight tracking-tight">
            Have A Project In Mind?
          </h2>
          
          <p className="text-slate-300 text-[14px] sm:text-base leading-relaxed">
            Let's discuss your project and build something amazing together.
          </p>
        </div>

        {/* Center Mockup - Floating 3D Envelope */}
        <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center pointer-events-none lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10">
          <div className="sphere-float-slow w-full h-full flex items-center justify-center">
            <img
              src={envelopeImg}
              alt="3D Floating Mail Envelope"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(15,95,253,0.35)]"
            />
          </div>
        </div>

        {/* Right Column - Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto z-10">
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(15,95,253,0.3)] hover:shadow-[0_10px_25px_rgba(15,95,253,0.45)] hover:-translate-y-0.5 active:scale-95 cursor-pointer text-[14px]"
          >
            Get Free Consultation
            <ArrowRight size={16} />
          </a>
          
          <a
            href="/contact"
            className="bg-white/10 hover:bg-white text-white hover:text-[#020b18] border border-white/10 hover:border-transparent font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:-translate-y-0.5 active:scale-95 cursor-pointer text-[14px]"
          >
            Contact Us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Curved wave transition at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] md:h-[90px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,96 C360,128 720,140 1080,105 C1260,88 1380,44 1440,20 L1440,120 L0,120 Z"
            fill="#020b18"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CTA;
