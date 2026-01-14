
import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Location: React.FC = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/SjmNgjh84MipYq8c9";
  const whatsappLink = "https://api.whatsapp.com/send?phone=5575999838455&text=Ol%c3%a1,%20gostaria%20de%20solicitar%20uma%20avalia%c3%a7%c3%a3o%20sem%20compromisso.";

  return (
    <section id="localizacao" className="py-24 bg-[#0B0B0B] scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Coluna de Informações */}
          <div className="space-y-12">
            <div>
              <div className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em] mb-4">Onde Estamos</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tight leading-tight">
                Nossa localização.
              </h2>

              <div className="space-y-8">
                {/* Endereço */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#F7931E]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#F7931E]/20">
                    <MapPin className="text-[#F7931E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg mb-1">Endereço</h4>
                    <p className="text-slate-400 font-medium">Tv. Ulysses Guimarães, 605, Heliópolis - BA, 48445-000</p>
                  </div>
                </div>

                {/* Contato */}
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-[#F7931E]/10 rounded-2xl flex items-center justify-center shrink-0 border border-[#F7931E]/20">
                    <Phone className="text-[#F7931E]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg mb-1">Contato Direto</h4>
                    <p className="text-slate-400 font-bold">(75) 99983-8455</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card de Avaliação */}
            <div className="bg-[#141414] p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl">
              <div>
                <h3 className="text-white font-black text-2xl mb-2">Solicite uma avaliação sem compromisso.</h3>
                <p className="text-slate-500 text-sm font-medium">Clique no botão abaixo para conversar com um técnico agora mesmo pelo WhatsApp.</p>
              </div>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#F7931E] to-[#C77700] text-black py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(247,147,30,0.3)] transition-all active:scale-95"
              >
                <MessageCircle size={24} />
                Iniciar Conversa no WhatsApp
              </a>
            </div>
          </div>

          {/* Coluna do Mapa */}
          <div className="relative group lg:mt-10">
            <div className="bg-[#141414] rounded-[3rem] p-12 md:p-20 aspect-square flex flex-col items-center justify-center text-center border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F7931E]/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="text-slate-600 mb-6 group-hover:text-[#F7931E] transition-colors" size={64} />
                <h3 className="text-white font-black text-3xl md:text-4xl mb-4 tracking-tighter">HELIÓPOLIS, BA</h3>
                <p className="text-slate-500 font-medium mb-10 max-w-xs">Atendimento presencial e digital para melhor te servir.</p>
                
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-slate-800 text-white rounded-full font-black hover:bg-[#F7931E] hover:text-black hover:border-[#F7931E] transition-all duration-300"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
