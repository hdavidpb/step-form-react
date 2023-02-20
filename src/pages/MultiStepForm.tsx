import { useContext } from "react";

import { stepsContext } from "../context/StepsProvider";

import SideSteps from "./components/SideSteps";

import {
  FooterOptions,
  StepOneForm,
  StepTreeForm,
  StepTwoChecks,
  StepFourForm,
  ThankYouStep,
} from "./components";

import * as SC from "./styled-components/styles";
export const MultiStepForm = () => {
  const { state } = useContext(stepsContext);
  const { steps, index } = state;

  return (
    <SC.MainLayout>
      <SC.StepFormContainer>
        <SideSteps index={index} steps={steps} />
        <SC.FormLayout isFinished={index === steps.length - 1}>
          {index === steps.length - 1 ? (
            <ThankYouStep index={index} steps={steps} />
          ) : (
            <>
              <SC.HeaderText>
                <h1>{steps[index].title}</h1>
                <p>{steps[index].description}</p>
              </SC.HeaderText>
              {index === 0 && <StepOneForm />}
              {index === 1 && <StepTwoChecks />}
              {index === 2 && <StepTreeForm />}
              {index === 3 && <StepFourForm />}
              <FooterOptions />
            </>
          )}
        </SC.FormLayout>
      </SC.StepFormContainer>
    </SC.MainLayout>
  );
};
