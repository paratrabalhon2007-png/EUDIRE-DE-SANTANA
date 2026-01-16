
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Info } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#001F3F] border-y border-white/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-[#F7931E] font-black text-xs uppercase tracking-[0.3em] mb-4">Portfólio de Soluções</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Consultoria e Gestão de Alto Nível
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium text-lg">
            Garantimos a conformidade legal e a eficiência financeira para sua empresa em Heliópolis crescer com segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              id={service.id} 
              className="bg-[#002B56] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#F7931E]/40 transition-all flex flex-col h-full scroll-mt-28 group hover:-translate-y-2 shadow-2xl"
            >
              <div className="bg-[#F7931E] text-[#001F3F] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {service.description}
              </p>
              <a 
                href={service.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#F7931E] font-black text-sm uppercase tracking-widest hover:gap-5 transition-all group/btn"
              >
                Saber Mais
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center animate-pulse">
          <div className="bg-[#F7931E]/10 border border-[#F7931E]/30 px-8 py-4 rounded-2xl flex items-center gap-4 max-w-2xl text-center">
            <Info className="text-[#F7931E] shrink-0" size={24} />
            <p className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
              Para ser direcionado para ter mais informações, <span className="text-[#F7931E]">clique no botão "SABER MAIS"</span> em cada bloco acima.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;