import { ServiceType, Question } from '@/types/lead';
import { Bot, Brain, Globe, Layout, MessageSquare, Smartphone, Workflow } from 'lucide-react';

export const services = [
  {
    id: 'implementar_ia' as ServiceType,
    title: 'Implementar IA',
    description: 'Inteligência Artificial',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'chatbot' as ServiceType,
    title: 'Chatbot',
    description: 'Atendimento Inteligente',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'criar_site_empresa' as ServiceType,
    title: 'Site Empresa',
    description: 'Site Institucional',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'landing_pages' as ServiceType,
    title: 'Landing Pages',
    description: 'Alta Conversão',
    icon: Layout,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'criar_sistema' as ServiceType,
    title: 'Sistema',
    description: 'Customizado',
    icon: Workflow,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'criar_aplicativo' as ServiceType,
    title: 'Aplicativo',
    description: 'Mobile',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'criar_bot' as ServiceType,
    title: 'Criar Bot',
    description: 'Automação',
    icon: Bot,
    color: 'from-cyan-500 to-blue-500'
  }
];

export const serviceQuestions: Record<ServiceType, Question[]> = {
  criar_site_empresa: [
    {
      id: 'ja_tem_site',
      question: 'Você já tem um site?',
      options: [
        { value: 'sim', label: 'Sim', description: 'Preciso atualizar/redesign' },
        { value: 'nao', label: 'Não', description: 'Criar do zero' }
      ]
    },
    {
      id: 'tipo_site',
      question: 'Tipo de site desejado?',
      options: [
        { value: 'institucional', label: 'Institucional' },
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'landing', label: 'Landing Page' },
        { value: 'blog', label: 'Blog/Portal' }
      ]
    },
    {
      id: 'prazo',
      question: 'Prazo desejado?',
      options: [
        { value: 'urgente', label: 'Urgente', description: '< 15 dias' },
        { value: 'normal', label: 'Normal', description: '30 dias' },
        { value: 'flexivel', label: 'Flexível', description: '> 30 dias' }
      ]
    }
  ],
  implementar_ia: [
    {
      id: 'area_aplicacao',
      question: 'Qual área de aplicação?',
      options: [
        { value: 'atendimento', label: 'Atendimento ao Cliente' },
        { value: 'analise', label: 'Análise de Dados' },
        { value: 'automacao', label: 'Automação de Processos' },
        { value: 'reconhecimento', label: 'Reconhecimento de Imagem/Vídeo' }
      ]
    },
    {
      id: 'tem_dados',
      question: 'Já possui dados para treino?',
      options: [
        { value: 'sim', label: 'Sim' },
        { value: 'nao', label: 'Não' }
      ]
    }
  ],
  criar_sistema: [
    {
      id: 'tipo_sistema',
      question: 'Tipo de sistema?',
      options: [
        { value: 'erp', label: 'ERP', description: 'Gestão Empresarial' },
        { value: 'crm', label: 'CRM', description: 'Gestão de Clientes' },
        { value: 'vendas', label: 'Sistema de Vendas' },
        { value: 'personalizado', label: 'Personalizado' }
      ]
    },
    {
      id: 'num_usuarios',
      question: 'Número de usuários esperado?',
      options: [
        { value: 'pequeno', label: 'Pequeno', description: '< 10 usuários' },
        { value: 'medio', label: 'Médio', description: '10-100 usuários' },
        { value: 'grande', label: 'Grande', description: '> 100 usuários' }
      ]
    }
  ],
  criar_aplicativo: [
    {
      id: 'plataforma',
      question: 'Plataforma?',
      options: [
        { value: 'ios', label: 'iOS apenas' },
        { value: 'android', label: 'Android apenas' },
        { value: 'ambos', label: 'iOS + Android' }
      ]
    },
    {
      id: 'tipo_app',
      question: 'Tipo de aplicativo?',
      options: [
        { value: 'ecommerce', label: 'E-commerce' },
        { value: 'social', label: 'Rede Social' },
        { value: 'delivery', label: 'Delivery' },
        { value: 'personalizado', label: 'Personalizado' }
      ]
    }
  ],
  chatbot: [
    {
      id: 'plataforma_integracao',
      question: 'Plataforma de integração?',
      options: [
        { value: 'whatsapp', label: 'WhatsApp Business' },
        { value: 'messenger', label: 'Facebook Messenger' },
        { value: 'website', label: 'Website' },
        { value: 'multicanal', label: 'Multi-canal' }
      ]
    },
    {
      id: 'tipo_chatbot',
      question: 'Tipo de chatbot?',
      options: [
        { value: 'faq', label: 'Atendimento básico (FAQ)' },
        { value: 'vendas', label: 'Vendas/Conversão' },
        { value: 'ia', label: 'IA avançada (GPT)' }
      ]
    }
  ],
  landing_pages: [
    {
      id: 'quantidade',
      question: 'Quantidade de páginas?',
      options: [
        { value: '1', label: '1 página' },
        { value: '2-5', label: '2-5 páginas' },
        { value: '5+', label: '> 5 páginas' }
      ]
    },
    {
      id: 'objetivo',
      question: 'Objetivo principal?',
      options: [
        { value: 'leads', label: 'Captura de leads' },
        { value: 'vendas', label: 'Vendas diretas' },
        { value: 'lancamento', label: 'Lançamento de produto' }
      ]
    }
  ],
  criar_bot: [
    {
      id: 'tipo_bot',
      question: 'Tipo de bot?',
      options: [
        { value: 'trading', label: 'Trading/Financeiro' },
        { value: 'automacao', label: 'Automação de tarefas' },
        { value: 'scraping', label: 'Web Scraping' },
        { value: 'social', label: 'Redes Sociais' }
      ]
    },
    {
      id: 'frequencia',
      question: 'Frequência de execução?',
      options: [
        { value: 'real_time', label: 'Tempo real' },
        { value: 'intervalos', label: 'Intervalos regulares' },
        { value: 'demanda', label: 'Sob demanda' }
      ]
    }
  ]
};
