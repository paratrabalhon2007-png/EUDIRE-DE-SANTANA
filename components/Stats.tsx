
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="hidden md:block relative bg-[#EDEDED] py-12 md:py-16 z-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:py-6 md:px-10 rounded-[2.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 md:gap-8 border border-white/50 hover:shadow-orange-500/10 transition-all hover:-translate-y-1 group min-h-[180px] md:min-h-[140px]"
            >
              {/* Icon Container */}
              <div className="bg-[#EDEDED] p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] group-hover:bg-[#F7931E] transition-all duration-500 flex items-center justify-center shadow-inner shrink-0">
                <div className="text-[#F7931E] group-hover:text-white scale-110 md:scale-125 transition-transform duration-500">
                  {stat.icon}
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col items-center md:items-start justify-center">
                <div className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-slate-500 font-extrabold uppercase tracking-[0.15em] md:tracking-[0.1em] mt-1 md:mt-2 leading-tight max-w-[120px] md:max-w-none">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
