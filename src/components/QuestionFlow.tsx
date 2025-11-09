import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useFlowStore } from '@/store/flowStore';
import { serviceQuestions } from '@/data/services';

export const QuestionFlow = () => {
  const { selectedService, currentQuestionIndex, answers, setStep, addAnswer, nextQuestion, prevQuestion } = useFlowStore();

  if (!selectedService) return null;

  const questions = serviceQuestions[selectedService];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    addAnswer(currentQuestion.id, value);
    
    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      setStep('contact');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      prevQuestion();
    } else {
      setStep('service-selection');
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="text-foreground"
          >
            <ArrowLeft className="mr-2" />
            Voltar
          </Button>
          <span className="text-sm text-muted-foreground">
            Passo {currentQuestionIndex + 2} de {questions.length + 2}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full gradient-primary"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">{Math.round(progress)}%</p>
        </div>

        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">
            {currentQuestion.question}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <motion.div
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  onClick={() => handleAnswer(option.value)}
                  className="w-full h-auto py-6 px-6 text-left hover:shadow-glow transition-smooth glass-card border-border"
                >
                  <div>
                    <div className="text-lg font-semibold mb-1 text-foreground">{option.label}</div>
                    {option.description && (
                      <div className="text-sm text-muted-foreground">{option.description}</div>
                    )}
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
