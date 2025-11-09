import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useFlowStore } from '@/store/flowStore';
import { services } from '@/data/services';
import { ServiceType } from '@/types/lead';

export const ServiceSelection = () => {
  const { setStep, setService } = useFlowStore();

  const handleSelectService = (serviceId: ServiceType) => {
    setService(serviceId);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep('welcome')}
            className="text-foreground"
          >
            <ArrowLeft className="mr-2" />
            Voltar
          </Button>
          <span className="text-sm text-muted-foreground">Passo 1 de 3</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Qual serviço você está procurando?
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecione a opção que melhor atende sua necessidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
                onClick={() => handleSelectService(service.id)}
              >
                <div className="glass-card p-6 rounded-2xl h-full hover:shadow-glow transition-smooth">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
