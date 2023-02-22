import { useContext } from "react";
import { goBack, nextStep } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import { Button } from "../../styled-components/Button";

import * as SC from "../styled-components/styles";

export const FooterOptions = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { steps, index, wappText } = state;

  const handleClick = () => {
    if (index < steps.length - 2) {
      dispatch(nextStep());
      return;
    }
    console.log(wappText);

    window.open(
      `https://api.whatsapp.com/send?phone=+3023842288&text=${encodeURIComponent(
        wappText
      )}`
    );
  };

  return (
    <SC.FooterOptions>
      <span
        style={{ opacity: index === 0 ? 0 : 1 }}
        onClick={() => dispatch(goBack())}
      >
        Go Back
      </span>

      <Button disabled={!steps[index].isCompleted} onClick={handleClick}>
        {index < steps.length - 2 ? "Next Step" : "Confirm"}
      </Button>
    </SC.FooterOptions>
  );
};
