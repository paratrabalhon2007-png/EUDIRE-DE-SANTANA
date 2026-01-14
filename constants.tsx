
import React from 'react';
import { 
  Users, 
  Calendar, 
  Building2, 
  ShoppingCart, 
  Stethoscope, 
  Wrench, 
  Factory,
  FilePlus2,
  Calculator,
  Briefcase,
  UserCircle,
  BarChart3,
  LineChart,
  Lightbulb,
  FileText
} from 'lucide-react';
import { Service, FAQItem, StatItem, SegmentItem } from './types';

export const STATS: StatItem[] = [
  { label: 'Clientes satisfeitos', value: '+ 600', icon: <Users className="w-8 h-8" /> },
  { label: 'Anos de experiência', value: '+ 17', icon: <Calendar className="w-8 h-8" /> },
  { label: 'Empresas mensais', value: '+ 300', icon: <Building2 className="w-8 h-8" /> },
];

export const SEGMENTS: SegmentItem[] = [
  { label: 'Comércio', icon: <ShoppingCart className="w-6 h-6" /> },
  { label: 'Profissionais Liberais de saúde e jurídico', icon: <Stethoscope className="w-6 h-6" /> },
  { label: 'Prestadores de serviços em geral', icon: <Wrench className="w-6 h-6" /> },
  { label: 'MEI e produtores Rurais', icon: <Factory className="w-6 h-6" /> },
];

export const SERVICES: Service[] = [
  { 
    id: 'abertura', 
    title: 'Abertura de Empresa', 
    description: 'Comece seu negócio do jeito certo com nossa assessoria completa.',
    icon: <FilePlus2 className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Abertura%20de%20Empresa.%20Comece%20seu%20negócio%20do%20jeito%20certo%20com%20nossa%20assessoria%20completa."
  },
  { 
    id: 'contabilidade', 
    title: 'Contabilidade', 
    description: 'Gestão contábil eficiente para manter sua empresa em dia.',
    icon: <Calculator className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Contabilidade.%20Gestão%20contábil%20eficiente%20para%20manter%20minha%20empresa%20em%20dia."
  },
  { 
    id: 'departamento-pessoal', 
    title: 'Departamento Pessoal', 
    description: 'Folha de pagamento e gestão de funcionários sem dor de cabeça.',
    icon: <Briefcase className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Departamento%20Pessoal.%20Folha%20de%20pagamento%20e%20gestão%20de%20funcionários%20sem%20dor%20de%20cabeça."
  },
  { 
    id: 'recursos-humanos', 
    title: 'Recursos Humanos', 
    description: 'Apoio estratégico na gestão do seu capital humano.',
    icon: <UserCircle className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Recursos%20Humanos.%20Apoio%20estratégico%20na%20gestão%20do%20meu%20capital%20humano."
  },
  { 
    id: 'bpo-financeiro', 
    title: 'BPO Financeiro', 
    description: 'Terceirize seu financeiro e foque no que realmente importa.',
    icon: <BarChart3 className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20BPO%20Financeiro.%20Terceirar%20o%20financeiro%20para%20focar%20no%20que%20realmente%20importa."
  },
  { 
    id: 'planejamento-tributario', 
    title: 'Planejamento Tributário', 
    description: 'Reduza seus impostos de forma legal e inteligente.',
    icon: <LineChart className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Planejamento%20Tributário.%20Quero%20reduzir%20meus%20impostos%20de%20forma%20legal%20e%20inteligente."
  },
  { 
    id: 'consultoria', 
    title: 'Consultoria', 
    description: 'Direcionamento estratégico para o crescimento do seu negócio.',
    icon: <Lightbulb className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Consultoria.%20Quero%20direcionamento%20estratégico%20para%20o%20crescimento%20do%20meu%20negócio."
  },
  { 
    id: 'irpf', 
    title: 'Imposto de Renda PF/PJ', 
    description: 'Declarações precisas para evitar a malha fina.',
    icon: <FileText className="w-6 h-6" />,
    whatsappLink: "https://api.whatsapp.com/send?phone=5575999838455&text=Olá,%20quero%20saber%20mais%20sobre%20Imposto%20de%20Renda%20PF/PJ.%20Declarações%20precisas%20para%20evitar%20problemas%20com%20a%20malha%20fina."
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Quais documentos preciso para abrir uma empresa?',
    answer: 'Geralmente são necessários RG, CPF, comprovante de residência dos sócios, e o IPTU do imóvel onde a empresa será instalada. Nossa equipe orienta todo o processo.'
  },
  {
    question: 'Por que contratar uma contabilidade especializada?',
    answer: 'Uma contabilidade especializada entende as nuances do seu setor, garantindo que você pague o mínimo de imposto possível e esteja sempre em conformidade legal.'
  },
  {
    question: 'Como funciona o BPO Financeiro?',
    answer: 'Nós assumimos as rotinas financeiras do seu negócio, como contas a pagar, a receber e conciliação bancária, entregando relatórios prontos para sua tomada de decisão.'
  }
];