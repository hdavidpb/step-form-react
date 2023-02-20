import { StepOneForm } from "./pages/components/StepOneForm";
import { MultiStepForm } from "./pages/MultiStepForm";

function App() {
  const steps = [
    {
      title: "Personal info",
      description: "Please provide your name, email address and phone number",
      component: <StepOneForm />,
      isComplete: true,
    },
  ];

  return <MultiStepForm />;
}

export default App;
