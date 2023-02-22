import { useContext } from "react";
import { PlanType } from "../../context/interfaces";
import { changeStepTwoPlanType } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import { getLabelColor } from "../../utils/getLabelColor";
import * as SC from "../styled-components/styles";

const CheckBox = () => {
  const handleChangePlanType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nwePlanType = !e.target.checked ? PlanType.monthly : PlanType.yearly;

    dispatch(changeStepTwoPlanType(nwePlanType));
  };
  const { state, dispatch } = useContext(stepsContext);
  const { stepOneProducts, planType } = state;
  return (
    <SC.CheckContainer>
      <h5
        style={{
          color: getLabelColor(planType === PlanType.monthly),
        }}
      >
        Monthly
      </h5>
      <SC.CheckBoxWrapper>
        <SC.CheckBox
          id="checkbox"
          type="checkbox"
          checked={planType === PlanType.yearly}
          onChange={handleChangePlanType}
        />
        <SC.CheckBoxLabel htmlFor="checkbox" />
      </SC.CheckBoxWrapper>
      <h5
        style={{
          color: getLabelColor(planType === PlanType.yearly),
        }}
      >
        Yearly
      </h5>
    </SC.CheckContainer>
  );
};

export default CheckBox;
