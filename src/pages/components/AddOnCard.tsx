import { AddOns, PlanType } from "../../context/interfaces";
import * as SC from "../styled-components/styles";
import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";
import { selectOrUnselectAddOn } from "../../context/stepReducer/actions";
interface Props {
  addOn: AddOns;
}
export const AddOnCard = ({ addOn }: Props) => {
  const { dispatch, state } = useContext(stepsContext);

  const { title, description, monthlyPlan, yearlyPlan, isSelected } = addOn;
  const { planType } = state;

  return (
    <SC.AddOnCardContainer
      isSelected={isSelected}
      onClick={() => dispatch(selectOrUnselectAddOn(title))}
    >
      <SC.AddOnDetailContainer>
        <input type="checkbox" checked={isSelected} readOnly />
        <SC.AddonDescription>
          <h5>{title}</h5>
          <p>{description}</p>
        </SC.AddonDescription>
      </SC.AddOnDetailContainer>

      {planType === PlanType.monthly ? (
        <span>{`+$${monthlyPlan}/mo`}</span>
      ) : (
        <span>{`+$${yearlyPlan}/yr`}</span>
      )}
    </SC.AddOnCardContainer>
  );
};
