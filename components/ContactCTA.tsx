
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5575999838455&text=Ol%c3%a1,%20gostaria%20de%20conhecer%20mais%20os%20seus%20servi%c3%a7os%20de%20Contabilidade%20e%20Gest%c3%a3o.";

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto bg-[#0B0B0B] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(247,147,30,0.3)]">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F7931E]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C77700]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
        
        <div className="relative z-10 space-y-10">
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
            Pronto para impulsionar <br /> o seu <span className="text-[#F7931E]">faturamento?</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
            Agende uma reunião estratégica agora mesmo e descubra o potencial oculto do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F7931E] text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-[#C77700] transition-all flex items-center justify-center gap-4 shadow-[0_15px_30px_rgba(247,147,30,0.4)] hover:-translate-y-1"
            >
              <MessageCircle size={32} />
              Conversar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
