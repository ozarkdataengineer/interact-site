import { create } from 'zustand';
import { ServiceType, LeadData } from '@/types/lead';

interface FlowState {
  currentStep: 'welcome' | 'service-selection' | 'questions' | 'contact' | 'success';
  selectedService: ServiceType | null;
  answers: Record<string, any>;
  currentQuestionIndex: number;
  leadData: Partial<LeadData>;
  
  setStep: (step: FlowState['currentStep']) => void;
  setService: (service: ServiceType) => void;
  addAnswer: (questionId: string, answer: any) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  setLeadData: (data: Partial<LeadData>) => void;
  reset: () => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  currentStep: 'welcome',
  selectedService: null,
  answers: {},
  currentQuestionIndex: 0,
  leadData: {},
  
  setStep: (step) => set({ currentStep: step }),
  setService: (service) => set({ selectedService: service, currentStep: 'questions' }),
  addAnswer: (questionId, answer) => set((state) => ({
    answers: { ...state.answers, [questionId]: answer }
  })),
  nextQuestion: () => set((state) => ({ currentQuestionIndex: state.currentQuestionIndex + 1 })),
  prevQuestion: () => set((state) => ({ currentQuestionIndex: Math.max(0, state.currentQuestionIndex - 1) })),
  setLeadData: (data) => set((state) => ({ leadData: { ...state.leadData, ...data } })),
  reset: () => set({
    currentStep: 'welcome',
    selectedService: null,
    answers: {},
    currentQuestionIndex: 0,
    leadData: {}
  })
}));
