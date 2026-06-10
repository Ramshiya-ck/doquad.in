import React from 'react';
import { Monitor, ShoppingCart, Layers, Settings, ArrowRight } from 'lucide-react';

export const Services = () => {
  const serviceCards = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Responsive, fast and modern websites that represent your brand perfectly.',
      icon: <Monitor size={28} />,
      bgClass: 'bg-blue-50 text-blue-600',
      link: '/services/web-development',
    },
    {
      id: 2,
      title: 'E-Commerce Development',
      description: 'Powerful online stores that drive sales and grow your business.',
      icon: <ShoppingCart size={28} />,
      bgClass: 'bg-[#ecfdf5] text-[#059669]', // Light green
      link: '/services/ecommerce',
    },
    {
      id: 3,
      title: 'ERP / CRM Solutions',
      description: 'Custom ERP/CRM systems to streamline your business operations.',
      icon: <Layers size={28} />,
      bgClass: 'bg-[#f5f3ff] text-[#7c3aed]', // Light purple
      link: '/services/erp-crm',
    },
    {
      id: 4,
      title: 'Software Maintenance',
      description: 'We keep your software updated, secure and running smoothly.',
      icon: <Settings size={28} />,
      bgClass: 'bg-[#fff7ed] text-[#ea580c]', // Light orange
      link: '/services/maintenance',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Header Content */}
        <span className="text-primary font-bold text-sm tracking-wider uppercase">
          Our Services
        </span>
        <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mt-3 tracking-tight">
          Solutions Built Around Your Business
        </h2>
        <p className="text-slate-500 text-[16px] md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          We deliver end-to-end software solutions tailored to your unique needs.
        </p>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {serviceCards.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-100/80 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(15,95,253,0.05)] hover:-translate-y-1.5 transition-all duration-300 group h-full justify-between"
            >
              <div className="flex flex-col items-center flex-grow">
                {/* Icon Wrapper */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${service.bgClass}`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-500 text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Learn More Link */}
              <a
                href={service.link}
                className="text-primary font-bold text-[14px] inline-flex items-center gap-1.5 group/link cursor-pointer hover:text-primary-dark transition-colors"
              >
                Learn More
                <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
