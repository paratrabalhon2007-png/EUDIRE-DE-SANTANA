
import React from 'react';
import { SEGMENTS } from '../constants';

const Segments: React.FC = () => {
  return (
    <section className="pb-24 pt-12 bg-[#EDEDED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0B0B] mb-4 tracking-tight">
            Segmentos <span className="text-[#F7931E]">de Atuação</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg px-4">
            Soluções estratégicas sob medida para o crescimento seguro em diversos ramos empresariais.
          </p>
        </div>

        {/* Versão Desktop (Grid com Blocos Brancos em Destaque) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {SEGMENTS.map((segment, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center text-center p-12 rounded-[3rem] bg-white border border-white shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] cursor-default"
            >
              <div className="w-20 h-20 bg-[#F7931E] text-white rounded-[1.5rem] flex items-center justify-center mb-10 shadow-lg transition-all duration-500 group-hover:rotate-6">
                {segment.icon}
              </div>
              <h3 className="font-black text-[#0B0B0B] text-lg leading-tight uppercase tracking-tight">
                {segment.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Versão Mobile (Grid 2x2) */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-4 py-4">
            {SEGMENTS.map((segment, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-6 rounded-[2rem] bg-white border border-white shadow-xl transition-all duration-300 active:scale-95 hover:scale-[1.03]"
              >
                <div className="w-12 h-12 bg-[#F7931E] text-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  {/* Fixed: Cast to React.ReactElement<any> to resolve TypeScript error on 'size' prop in React.cloneElement */}
                  {React.cloneElement(segment.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h3 className="font-black text-[#0B0B0B] text-[11px] leading-tight uppercase tracking-tight">
                  {segment.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:active {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Segments;
