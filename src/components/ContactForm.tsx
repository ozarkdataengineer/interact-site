import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Send, Lock } from 'lucide-react';
import { useFlowStore } from '@/store/flowStore';
import { services, serviceQuestions } from '@/data/services';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { selectedService, answers, setStep, setLeadData } = useFlowStore();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: ''
  });

  if (!selectedService) return null;

  const service = services.find(s => s.id === selectedService);
  const questions = serviceQuestions[selectedService];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e WhatsApp",
        variant: "destructive"
      });
      return;
    }

    setLeadData({
      ...formData,
      servicoPrincipal: selectedService,
      respostas: answers
    });

    // TODO: Integrate with backend
    console.log('Lead data:', { ...formData, servicoPrincipal: selectedService, respostas: answers });

    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve.",
    });

    setStep('success');
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep('questions')}
            className="text-foreground"
          >
            <ArrowLeft className="mr-2" />
            Voltar
          </Button>
          <span className="text-sm text-muted-foreground">Último Passo</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Ótimo! Agora vamos finalizar
          </h2>
          <p className="text-lg text-muted-foreground">
            Digite seus dados para contato
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Seu nome completo"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="empresa">Nome da Empresa</Label>
            <Input
              id="empresa"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              placeholder="Nome da sua empresa"
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp para Contato *</Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="(21) 98765-4321"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail (opcional)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="seu@email.com"
              className="bg-background border-border"
            />
          </div>

          {/* Summary */}
          <div className="bg-background/50 p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-foreground">Resumo da sua Solicitação:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <span className="text-success mr-2">✓</span>
                {service?.title}
              </div>
              {questions.map((q) => {
                const answer = answers[q.id];
                const option = q.options.find(opt => opt.value === answer);
                if (option) {
                  return (
                    <div key={q.id} className="flex items-center text-muted-foreground">
                      <span className="text-success mr-2">✓</span>
                      {option.label}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full gradient-primary py-6 text-lg shadow-glow hover:scale-105 transition-smooth"
          >
            <Send className="mr-2" />
            Enviar Solicitação
          </Button>

          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Lock className="w-4 h-4 mr-2" />
            Seus dados estão seguros e protegidos
          </div>
        </form>
      </div>
    </div>
  );
};
