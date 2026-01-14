
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B0B0B] leading-[1.1] tracking-tighter">
              Mais do que contabilidade, <br />
              <span className="text-[#F7931E]">parceria estratégica.</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-medium">
              <p>
                Com mais de 17 anos de experiência, somos especialistas em simplificar a burocracia para que você possa focar no crescimento real do seu negócio.
              </p>
              <p>
                Nossa equipe é formada por consultores apaixonados por resultados, utilizando tecnologia de ponta aliada a um atendimento humanizado e exclusivo.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-4xl font-black text-[#F7931E] tracking-tighter">17+</div>
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Anos de Mercado</div>
              </div>
              <div>
                <div className="text-4xl font-black text-[#F7931E] tracking-tighter">1.5k+</div>
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Clientes Atendidos</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-[#EDEDED]">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" 
                alt="Equipe Profissional" 
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F7931E]/10 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#EDEDED] rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
