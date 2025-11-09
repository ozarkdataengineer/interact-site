import { useFlowStore } from '@/store/flowStore';
import { WelcomeScreen } from '@/components/WelcomeScreen';
import { ServiceSelection } from '@/components/ServiceSelection';
import { QuestionFlow } from '@/components/QuestionFlow';
import { ContactForm } from '@/components/ContactForm';
import { SuccessScreen } from '@/components/SuccessScreen';

const Index = () => {
  const currentStep = useFlowStore((state) => state.currentStep);

  return (
    <>
      {currentStep === 'welcome' && <WelcomeScreen />}
      {currentStep === 'service-selection' && <ServiceSelection />}
      {currentStep === 'questions' && <QuestionFlow />}
      {currentStep === 'contact' && <ContactForm />}
      {currentStep === 'success' && <SuccessScreen />}
    </>
  );
};

export default Index;
