import React from 'react';
import { ArrowRight } from 'lucide-react';
import secondImg from '../../assets/images/secondimg.png';
import thirdImg from '../../assets/images/third.png';
import home1Img from '../../assets/images/home1.png';

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      client: 'TechStore',
      tag: 'E-Commerce',
      title: 'TechStore E-Commerce',
      description: 'Feature-rich online store with payment integration.',
      image: secondImg,
      tagBg: 'bg-blue-50 text-blue-600 border border-blue-100/50',
    },
    {
      id: 2,
      client: 'EduSmart ERP',
      tag: 'ERP Solution',
      title: 'EduSmart ERP',
      description: 'Complete ERP solution for education management.',
      image: thirdImg,
      tagBg: 'bg-[#ecfdf5] text-[#059669] border border-emerald-100/50',
    },
    {
      id: 3,
      client: 'HealthPlus CRM',
      tag: 'CRM Solution',
      title: 'HealthPlus CRM',
      description: 'CRM system to manage patients, appointments & staff.',
      image: home1Img,
      tagBg: 'bg-[#f5f3ff] text-[#7c3aed] border border-purple-100/50',
    },
    {
      id: 4,
      client: 'CityMart Website',
      tag: 'Website',
      title: 'CityMart Website',
      description: 'Modern business website for a retail company.',
      image: secondImg,
      tagBg: 'bg-[#f0fdfa] text-[#0d9488] border border-teal-100/50',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <span className="text-primary font-bold text-sm tracking-wider uppercase">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-[36px] font-extrabold text-slate-900 mt-2 mb-0 tracking-tight">
              Some Of Our Recent Projects
            </h2>
          </div>
          
          {/* Header Link */}
          <div className="text-left md:text-right">
            <a 
              href="/portfolio" 
              className="text-primary font-extrabold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group/link cursor-pointer"
            >
              View All Projects
              <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50/60 border border-slate-100 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:shadow-[0_20px_40px_rgba(15,95,253,0.04)] hover:-translate-y-1.5 transition-all duration-300 group h-full"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video bg-white flex items-center justify-center p-3 border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {project.client}
                    </span>
                    <span className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border ${project.tagBg}`}>
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] font-extrabold text-slate-800 mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
