import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useFlowStore } from '@/store/flowStore';

export const WelcomeScreen = () => {
  const setStep = useFlowStore((state) => state.setStep);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple via-primary-blue to-primary-pink animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 font-display"
        >
          <span className="bg-gradient-to-r from-primary-purple via-primary-blue to-primary-pink bg-clip-text text-transparent">
            ASIMOV TECH
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Transformamos sua visão em realidade digital
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={() => setStep('service-selection')}
            className="gradient-primary text-lg px-8 py-6 rounded-xl shadow-glow hover:scale-105 transition-smooth"
          >
            <Sparkles className="mr-2" />
            Começar Agora
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: '500+', sublabel: 'Projects' },
            { label: '98%', sublabel: 'Happy' },
            { label: '5+', sublabel: 'Years' },
            { label: '24/7', sublabel: 'Support' }
          ].map((stat, i) => (
            <div key={i} className="glass-card p-4 rounded-xl">
              <div className="text-2xl font-bold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
