
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  whatsappLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface SegmentItem {
  label: string;
  icon: React.ReactNode;
}