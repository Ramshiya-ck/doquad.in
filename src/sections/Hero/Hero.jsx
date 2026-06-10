import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Headphones } from 'lucide-react';
import home1Img from '../../assets/images/home1.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-[#f0f6ff] via-white to-white overflow-hidden">
      {/* Decorative ambient blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[80px] -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[350px] h-[350px] bg-blue-300/10 rounded-full filter blur-[60px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-5 flex flex-col items-start text-left z-10">
          {/* Pill Badge */}
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-semibold text-[13px] tracking-wide mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            We Build. You Grow.
          </div>

          {/* Heading */}
          <h1 className="text-[38px] sm:text-[46px] md:text-[54px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6">
            Custom Software Solutions That{' '}
            <span className="relative inline-block text-primary whitespace-nowrap">
              Drive
              {/* Custom Underline Swoosh */}
              <span className="absolute bottom-[3px] left-0 w-full h-[8px] text-primary">
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full fill-none stroke-current stroke-[6px] stroke-linecap-round">
                  <path d="M5 2 Q 50 8, 95 2" />
                </svg>
              </span>
            </span>{' '}
            Your Business Forward
          </h1>

          {/* Subtext */}
          <p className="text-slate-600 text-[16px] sm:text-[18px] leading-relaxed mb-8 max-w-xl">
            We craft powerful websites, e-commerce platforms, ERP/CRM systems and provide long-term software maintenance to help your business grow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="/contact"
              className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer text-[15px]"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            
            <a
              href="/portfolio"
              className="bg-white border border-slate-200 hover:border-transparent text-slate-800 hover:text-white hover:bg-primary font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer text-[15px] group"
            >
              See Our Work
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                <ArrowRight size={12} />
              </span>
            </a>
          </div>

          {/* Trust Features */}
          <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-slate-600 font-semibold text-[13px] md:text-[14px]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 size={18} className="text-primary" />
              On-Time Delivery
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={18} className="text-primary" />
              Secure & Scalable
            </div>
            <div className="flex items-center gap-1.5">
              <Headphones size={18} className="text-primary" />
              24/7 Support
            </div>
          </div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-7 flex justify-center items-center w-full relative">
          <div className="w-full max-w-[680px] relative pointer-events-none">
            {/* Visual glow element behind the mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-400/5 rounded-full filter blur-[50px] transform scale-75 -z-10" />
            <img 
              src={home1Img} 
              alt="Dashboard Platform Mockup" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(15,95,253,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
