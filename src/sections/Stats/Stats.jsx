import React from 'react';
import { Laptop, Users, Trophy, Headphones } from 'lucide-react';
import Globe3D from '@/components/ui/3d-globe';

const sampleMarkers = [
  {
    lat: 40.7128,
    lng: -74.006,
    src: "https://assets.aceternity.com/avatars/1.webp",
    label: "New York",
  },
  {
    lat: 51.5074,
    lng: -0.1278,
    src: "https://assets.aceternity.com/avatars/2.webp",
    label: "London",
  },
  {
    lat: 35.6762,
    lng: 139.6503,
    src: "https://assets.aceternity.com/avatars/3.webp",
    label: "Tokyo",
  },
  {
    lat: -33.8688,
    lng: 151.2093,
    src: "https://assets.aceternity.com/avatars/4.webp",
    label: "Sydney",
  },
  {
    lat: 48.8566,
    lng: 2.3522,
    src: "https://assets.aceternity.com/avatars/5.webp",
    label: "Paris",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    src: "https://assets.aceternity.com/avatars/6.webp",
    label: "New Delhi",
  },
  {
    lat: 55.7558,
    lng: 37.6173,
    src: "https://assets.aceternity.com/avatars/7.webp",
    label: "Moscow",
  },
  {
    lat: -22.9068,
    lng: -43.1729,
    src: "https://assets.aceternity.com/avatars/8.webp",
    label: "Rio de Janeiro",
  },
  {
    lat: 31.2304,
    lng: 121.4737,
    src: "https://assets.aceternity.com/avatars/9.webp",
    label: "Shanghai",
  },
  {
    lat: 25.2048,
    lng: 55.2708,
    src: "https://assets.aceternity.com/avatars/10.webp",
    label: "Dubai",
  },
  {
    lat: -34.6037,
    lng: -58.3816,
    src: "https://assets.aceternity.com/avatars/11.webp",
    label: "Buenos Aires",
  },
  {
    lat: 1.3521,
    lng: 103.8198,
    src: "https://assets.aceternity.com/avatars/12.webp",
    label: "Singapore",
  },
  {
    lat: 37.5665,
    lng: 126.978,
    src: "https://assets.aceternity.com/avatars/13.webp",
    label: "Seoul",
  },
];

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
          <div className="col-span-2 lg:col-span-1 flex justify-center items-center py-6 lg:py-0 w-full order-first lg:order-none relative z-30">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex items-center justify-center transform -translate-y-12 sm:-translate-y-16 lg:-translate-y-24 xl:-translate-y-28">
              {/* Globe glowing shadow rings in the background */}
              <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-xl animate-pulse pointer-events-none scale-75" />
              
              <Globe3D
                markers={sampleMarkers}
                config={{
                  atmosphereColor: "#4da6ff",
                  atmosphereIntensity: 2,
                  showAtmosphere: true,
                  bumpScale: 5,
                  autoRotateSpeed: 0.8,
                  enableZoom: false,
                  enablePan: false,
                }}
                className="w-full h-full"
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
