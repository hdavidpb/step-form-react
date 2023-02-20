import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";

import * as SC from "../styled-components/styles";

import CheckBox from "./CheckBox";
import { PlanCard } from "./index";

export const StepTwoChecks = () => {
  const { state } = useContext(stepsContext);
  const { stepTwoFormValues } = state;

  return (
    <SC.FieldsContainer>
      <SC.CardsContainer>
        {stepTwoFormValues.plans.map((plan) => (
          <PlanCard plan={plan} key={plan.title} />
        ))}
      </SC.CardsContainer>
      <CheckBox />
    </SC.FieldsContainer>
  );
};
