import * as SC from "../styled-components/styles";

import { PlanType } from "../../context/interfaces";

import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";

export const AddOnFinishingDetail = () => {
  const { state } = useContext(stepsContext);

  const { addOnsSelected, planType } = state;
  return (
    <SC.AddOnsDetailsContainer>
      {addOnsSelected.map((addOn) => (
        <SC.AddOnDetailCard key={addOn.title}>
          <h5>{addOn.title}</h5>

          <h6>
            {planType === PlanType.monthly
              ? `$${addOn.monthlyPlan}/mo`
              : `$${addOn.yearlyPlan}/yr`}
          </h6>
        </SC.AddOnDetailCard>
      ))}
    </SC.AddOnsDetailsContainer>
  );
};
