import React from 'react';
import { Check } from 'lucide-react';
import thirdImg from '../../assets/images/third-removebg-preview.png';

export const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Custom Solutions',
      description: 'Tailored software that fits your business perfectly.',
    },
    {
      id: 2,
      title: 'Scalable & Secure',
      description: 'Built with security and scalability in mind.',
    },
    {
      id: 3,
      title: 'On-Time Delivery',
      description: 'We value your time and deliver on schedule.',
    },
    {
      id: 4,
      title: 'Dedicated Support',
      description: '24/7 support even after your project goes live.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          <span className="text-primary font-bold text-sm tracking-wider uppercase">
            Why Choose Doquad?
          </span>
          <h2 className="text-3xl sm:text-[40px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mt-3 mb-4">
            We Build More Than Software, <br />We Build Partnerships
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed mb-8 max-w-xl">
            We focus on quality, transparency and long-term success. Here's what makes us the right choice for your business.
          </p>

          {/* Features Checklist */}
          <div className="flex flex-col gap-6 w-full">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-4 items-start">
                {/* Circular Blue Check Wrapper */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white mt-1 shadow-sm">
                  <Check size={14} className="stroke-[3]" />
                </div>
                
                {/* Text Block */}
                <div>
                  <h3 className="font-bold text-slate-800 text-[16px] tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed mt-1 max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Mockup Graphic */}
        <div className="lg:col-span-6 flex justify-center items-center w-full relative">
          <div className="w-full max-w-[580px] relative pointer-events-none">
            {/* Soft background blue glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-400/5 rounded-full filter blur-[40px] transform scale-90 -z-10" />
            <img 
              src={thirdImg} 
              alt="Partnership Dashboard Mockup" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.04)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
