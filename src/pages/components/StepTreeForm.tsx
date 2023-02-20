import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";

import { AddOnCard } from "./index";

import * as SC from "../styled-components/styles";

export const StepTreeForm = () => {
  const { state } = useContext(stepsContext);
  const { stepTreeFormValues } = state;

  return (
    <SC.FieldsContainer>
      <SC.AddOnsContainer>
        {stepTreeFormValues.addOns.map((addOn) => (
          <AddOnCard addOn={addOn} key={addOn.title} />
        ))}
      </SC.AddOnsContainer>
    </SC.FieldsContainer>
  );
};
