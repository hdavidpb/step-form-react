import React, { useContext } from "react";

import { PlanType } from "../../context/interfaces";
import { changePlanType } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import * as SC from "../styled-components/styles";

export const PlanFinishinDetail = () => {
  const { state, dispatch } = useContext(stepsContext);

  const { plansSelected, planType } = state;

  return (
    <SC.FinishingDetailCard>
      {plansSelected.map((plan) => (
        <React.Fragment key={plan.title}>
          <SC.PlantTypeContainer>
            <h4>{`${plan.title} (${planType})`}</h4>
            <button onClick={() => dispatch(changePlanType(1))}>Change</button>
          </SC.PlantTypeContainer>

          <h4>{`$${
            planType === PlanType.monthly
              ? `${plan.monthlyPlan}/mo`
              : `${plan.yearlyPlan}/yr`
          }`}</h4>
        </React.Fragment>
      ))}
    </SC.FinishingDetailCard>
  );
};
