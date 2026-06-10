import React from 'react';

export const Process = () => {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Requirement Analysis',
      description: 'We understand your business and goals.',
      bgClass: 'bg-blue-50 text-blue-600',
      circleBg: 'bg-blue-600',
    },
    {
      id: 2,
      number: '2',
      title: 'Planning & Design',
      description: 'We plan, design and create a roadmap.',
      bgClass: 'bg-[#ecfdf5] text-[#059669]', // Light green
      circleBg: 'bg-[#059669]',
    },
    {
      id: 3,
      number: '3',
      title: 'Development',
      description: 'Our team builds your solution with quality.',
      bgClass: 'bg-[#f5f3ff] text-[#7c3aed]', // Light purple
      circleBg: 'bg-[#7c3aed]',
    },
    {
      id: 4,
      number: '4',
      title: 'Testing',
      description: 'We test thoroughly to ensure perfection.',
      bgClass: 'bg-[#fff7ed] text-[#ea580c]', // Light orange
      circleBg: 'bg-[#ea580c]',
    },
    {
      id: 5,
      number: '5',
      title: 'Deployment',
      description: 'We deploy and make your solution live.',
      bgClass: 'bg-blue-50 text-blue-600',
      circleBg: 'bg-blue-600',
    },
    {
      id: 6,
      number: '6',
      title: 'Support',
      description: 'We provide ongoing support and updates.',
      bgClass: 'bg-[#f0fdfa] text-[#0d9488]', // Light teal
      circleBg: 'bg-[#0d9488]',
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Header Block */}
        <span className="text-primary font-bold text-sm tracking-wider uppercase">
          Our Process
        </span>
        <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 mt-3 tracking-tight">
          Simple Process, Exceptional Results
        </h2>
        <p className="text-slate-500 text-[16px] md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          We follow a proven process to deliver high-quality software.
        </p>

        {/* Timeline Grid Wrapper */}
        <div className="relative mt-20">
          {/* Connecting Line (Only visible on large screens) */}
          <div className="absolute top-8 left-[8%] right-[8%] h-[1.5px] border-t-2 border-dashed border-slate-100 hidden lg:block -z-10" />
          
          {/* Interactive Connection Dots on Timeline */}
          <div className="absolute top-[31px] left-[24.5%] w-2 h-2 rounded-full bg-slate-200 hidden lg:block -z-10" />
          <div className="absolute top-[31px] left-[41.2%] w-2 h-2 rounded-full bg-slate-200 hidden lg:block -z-10" />
          <div className="absolute top-[31px] left-[57.8%] w-2 h-2 rounded-full bg-slate-200 hidden lg:block -z-10" />
          <div className="absolute top-[31px] left-[74.5%] w-2 h-2 rounded-full bg-slate-200 hidden lg:block -z-10" />

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center group transition-all duration-300"
              >
                {/* Step Circle Container */}
                <div className={`w-16 h-16 rounded-[1.25rem] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:scale-105 ${step.bgClass}`}>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-[14px] shadow-sm ${step.circleBg}`}>
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] sm:text-[16px] font-extrabold text-slate-800 mt-5 mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[170px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
