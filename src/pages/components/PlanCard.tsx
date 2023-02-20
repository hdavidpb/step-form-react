import { useContext } from "react";
import { Plan, PlanType } from "../../context/interfaces";
import { selectOrUnselectPlan } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import GenerateIcon from "../../components/icons/GenerateIcon";

import * as SC from "../styled-components/styles";

interface Props {
  plan: Plan;
}

export const PlanCard = ({ plan }: Props) => {
  const { isSelected, monthlyPlan, title, yearlyPlan } = plan;
  const { state, dispatch } = useContext(stepsContext);
  const { planType } = state;
  return (
    <SC.PlanCard
      isSelected={isSelected}
      key={title}
      onClick={() => dispatch(selectOrUnselectPlan(title))}
    >
      <SC.Icon>
        <GenerateIcon iconName={title} />
      </SC.Icon>
      <SC.CardFooter>
        <h4>{title}</h4>
        <span>{`${
          planType === PlanType.monthly
            ? `$${monthlyPlan}/mo`
            : `$${yearlyPlan}/yr`
        }`}</span>
      </SC.CardFooter>
    </SC.PlanCard>
  );
};
