import React from 'react';
import { Laptop, Users, Trophy, Headphones } from 'lucide-react';
import globImg from '../../assets/images/glob.png';

export const Stats = () => {
  const stats = [
    {
      id: 1,
      number: '120+',
      label: 'Projects Delivered',
      icon: <Laptop className="text-primary" size={24} />,
    },
    {
      id: 2,
      number: '60+',
      label: 'Happy Clients',
      icon: <Users className="text-primary" size={24} />,
    },
    {
      id: 3,
      number: '5+',
      label: 'Years Experience',
      icon: <Trophy className="text-primary" size={24} />,
    },
    {
      id: 4,
      number: '24/7',
      label: 'Support Available',
      icon: <Headphones className="text-primary" size={24} />,
    },
  ];

  return (
    <section className="relative bg-[#020b18] pt-24 pb-16 z-20">
      {/* Curved wave transition at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%]">
        <svg className="relative block w-full h-[60px] md:h-[90px]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0,96 C360,128 720,140 1080,105 C1260,88 1380,44 1440,20 L1440,120 L0,120 Z" 
            fill="#020b18"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 items-center justify-items-center">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-14 h-14 rounded-2xl bg-[#0c1a30] border border-white/5 flex items-center justify-center mb-4 shadow-inner">
              {stats[0].icon}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{stats[0].number}</div>
            <div className="text-slate-400 font-medium text-[13px] sm:text-[14px]">{stats[0].label}</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-14 h-14 rounded-2xl bg-[#0c1a30] border border-white/5 flex items-center justify-center mb-4 shadow-inner">
              {stats[1].icon}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{stats[1].number}</div>
            <div className="text-slate-400 font-medium text-[13px] sm:text-[14px]">{stats[1].label}</div>
          </div>

          {/* Central Rotating Globe (Desktop middle, mobile centered between rows) */}
          <div className="col-span-2 lg:col-span-1 flex justify-center items-center py-6 lg:py-0 w-full order-first lg:order-none">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
              {/* Globe glowing shadow rings */}
              <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-md animate-pulse" />
              <div className="absolute w-[120%] h-[120%] border border-primary/5 rounded-full animate-ping pointer-events-none opacity-20" style={{ animationDuration: '4s' }} />
              
              {/* Rotating Globe Image */}
              <img 
                src={globImg} 
                alt="Rotating Globe Graphic" 
                className="w-full h-full object-contain globe-rotate z-10 drop-shadow-[0_0_25px_rgba(15,95,253,0.3)]"
              />
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-14 h-14 rounded-2xl bg-[#0c1a30] border border-white/5 flex items-center justify-center mb-4 shadow-inner">
              {stats[2].icon}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{stats[2].number}</div>
            <div className="text-slate-400 font-medium text-[13px] sm:text-[14px]">{stats[2].label}</div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center w-full">
            <div className="w-14 h-14 rounded-2xl bg-[#0c1a30] border border-white/5 flex items-center justify-center mb-4 shadow-inner">
              {stats[3].icon}
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{stats[3].number}</div>
            <div className="text-slate-400 font-medium text-[13px] sm:text-[14px]">{stats[3].label}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
