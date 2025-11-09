import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, MessageCircle } from 'lucide-react';
import { useFlowStore } from '@/store/flowStore';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';

export const SuccessScreen = () => {
  const reset = useFlowStore((state) => state.reset);
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-success rounded-full flex items-center justify-center mb-6 shadow-glow">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-8 rounded-2xl mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="bg-gradient-to-r from-success to-secondary-emerald bg-clip-text text-transparent">
              Sucesso! 🎉
            </span>
          </h2>
          
          <p className="text-xl text-foreground mb-4">
            Recebemos sua solicitação!
          </p>
          
          <p className="text-muted-foreground mb-6">
            Nossa equipe entrará em contato em até 24 horas através do WhatsApp informado.
          </p>

          <div className="bg-background/50 p-4 rounded-xl border border-border inline-block">
            <p className="text-sm text-muted-foreground">
              Protocolo: <span className="text-foreground font-mono">#ASV-2024-{Math.random().toString().slice(2, 7)}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => window.open('https://wa.me/5521999999999', '_blank')}
            className="gradient-primary shadow-glow hover:scale-105 transition-smooth"
          >
            <MessageCircle className="mr-2" />
            Abrir WhatsApp
          </Button>
          
          <Button
            onClick={reset}
            variant="outline"
            className="border-border hover:bg-muted"
          >
            <Home className="mr-2" />
            Voltar ao Início
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 glass-card p-6 rounded-xl"
        >
          <h3 className="text-lg font-semibold mb-4 text-foreground">Enquanto isso, conheça:</h3>
          <div className="space-y-2 text-muted-foreground">
            <p>• Nosso Blog</p>
            <p>• Cases de Sucesso</p>
            <p>• FAQ</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
