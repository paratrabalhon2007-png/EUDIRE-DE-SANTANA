
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#F7931E] font-black text-xs uppercase tracking-widest mb-4">Dúvidas Comuns</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0B0B0B] mb-6 tracking-tighter">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[#F7931E] shadow-xl' : 'border-[#EDEDED] hover:border-[#F7931E]/30'}`}
            >
              <button
                className="w-full flex items-center justify-between p-8 text-left bg-white transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-black text-xl tracking-tight ${openIndex === index ? 'text-[#F7931E]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#F7931E]" size={28} />
                ) : (
                  <ChevronDown className="text-slate-400" size={28} />
                )}
              </button>
              {openIndex === index && (
                <div className="p-8 bg-[#EDEDED]/30 border-t-2 border-[#EDEDED] text-slate-600 leading-relaxed text-lg font-medium animate-in slide-in-from-top-4 duration-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
