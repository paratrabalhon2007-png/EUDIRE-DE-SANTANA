
import React from 'react';

const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5575999838455&text=Ol%c3%a1,%20gostaria%20de%20conhecer%20mais%20os%20seus%20servi%c3%a7os%20de%20Contabilidade%20e%20Gest%c3%a3o.";

  return (
    <section id="inicio" className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#0B0B0B] scroll-mt-28">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F7931E]/5 skew-x-12 transform translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C77700]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 max-w-2xl order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-[#F7931E]/10 px-4 py-2 rounded-full text-[#F7931E] text-xs font-black uppercase tracking-widest border border-[#F7931E]/30 backdrop-blur-md">
              <span className="w-2 h-2 bg-[#F7931E] rounded-full animate-pulse"></span>
              Consultoria Estratégica
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              A inteligência <br />
              <span className="text-[#F7931E]">contábil que sua</span> <br />
              empresa precisa.
            </h1>
            <p className="text-lg text-slate-300 max-w-lg leading-relaxed font-medium">
              Simplificando a gestão de empresários de sucesso com estratégias contábeis de alto nível por mais de 17 anos.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F7931E] text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#C77700] transition-all shadow-2xl hover:-translate-y-1 text-center"
              >
                Começar Agora
              </a>
              <a 
                href="#servicos"
                className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm text-center"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative inline-block">
              {/* Photo Frame */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(247,147,30,0.2)] border-4 border-[#F7931E]/20">
                <img 
                  src="https://i.imgur.com/vxNJxtJ.png" 
                  alt="Eudire De Santana" 
                  className="w-full max-w-[480px] h-auto object-cover block grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Stat Card - Ajustado left de -8 para 4 no mobile para mover para a direita */}
              <div className="absolute -bottom-8 left-4 md:-left-12 bg-[#F7931E] p-8 rounded-[2.5rem] shadow-2xl z-20 max-w-[260px] animate-bounce-slow">
                 <div className="text-black font-black text-5xl mb-1 tracking-tighter">17+</div>
                 <div className="text-black/80 text-sm font-bold uppercase leading-tight tracking-wider">
                   Anos de expertise e mercado nacional.
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
