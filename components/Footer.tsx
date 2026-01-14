
import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const instagramLink = "https://www.instagram.com/eudiredesantana?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const email = "eurocontabilidadeegestao@outlook.com";
  const phoneNumber = "(75) 99983-8455";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-[#0B0B0B] text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="text-3xl font-black text-white tracking-tighter">
              EUDIRE <span className="text-[#F7931E]">DE SANTANA</span>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Acelerando negócios com consultoria contábil de elite e gestão financeira estratégica desde 2007.
            </p>
            <div className="flex gap-5">
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#F7931E] hover:text-black transition-all shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-[#F7931E] transition-colors">Início</a></li>
              <li><a href="#servicos" onClick={(e) => handleNavClick(e, '#servicos')} className="hover:text-[#F7931E] transition-colors">Serviços</a></li>
              <li><a href="#sobre" onClick={(e) => handleNavClick(e, '#sobre')} className="hover:text-[#F7931E] transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-[#F7931E] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Soluções</h4>
            <ul className="space-y-4 font-bold text-slate-500">
              <li>Abertura de Empresa</li>
              <li>BPO Financeiro</li>
              <li>Consultoria Estratégica</li>
              <li>Imposto de Renda</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#F7931E] shrink-0 mt-1" size={20} />
                <span className="font-medium text-slate-300">Bahia - Brasil<br />Atendimento Digital em Todo País</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#F7931E] shrink-0" size={20} />
                <span className="font-bold text-slate-300">{phoneNumber}</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#F7931E] shrink-0" size={20} />
                <a href={`mailto:${email}`} className="hover:text-[#F7931E] transition-colors font-bold text-slate-300">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-sm font-bold">
          <p className="text-slate-600">© {new Date().getFullYear()} Eudire De Santana. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
