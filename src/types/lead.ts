export type ServiceType = 
  | 'criar_site_empresa'
  | 'implementar_ia'
  | 'criar_sistema'
  | 'criar_aplicativo'
  | 'chatbot'
  | 'landing_pages'
  | 'criar_bot';

export interface LeadData {
  nome: string;
  empresa?: string;
  whatsapp: string;
  email?: string;
  servicoPrincipal: ServiceType;
  respostas: Record<string, any>;
}

export interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    description?: string;
    nextQuestion?: string;
  }[];
}
