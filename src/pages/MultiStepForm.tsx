import { useContext } from "react";
import { stepsContext } from "../context/StepsProvider";
import SideSteps from "./components/SideSteps";

import {
  FooterOptions,
  StepOneForm,
  StepOneCheckProducts,
  FinishingOrder,
  ThankYouStep,
  FilterSection,
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
                <h3>{steps[index].title}</h3>
                <p>{steps[index].description}</p>
                {index === 0 && <FilterSection />}
              </SC.HeaderText>
              {index === 0 && <StepOneCheckProducts />}
              {index === 1 && <StepOneForm />}
              {index === 2 && <FinishingOrder />}
              <FooterOptions />
            </>
          )}
        </SC.FormLayout>
      </SC.StepFormContainer>
    </SC.MainLayout>
  );
};
