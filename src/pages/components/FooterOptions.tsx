import { useContext } from "react";
import { goBack, nextStep } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import { Button } from "../../styled-components/Button";

import * as SC from "../styled-components/styles";

export const FooterOptions = () => {
  const { state, dispatch } = useContext(stepsContext);
  const { steps, index } = state;

  return (
    <SC.FooterOptions>
      <span
        style={{ opacity: index === 0 ? 0 : 1 }}
        onClick={() => dispatch(goBack())}
      >
        Go Back
      </span>

      <Button
        disabled={!steps[index].isCompleted}
        onClick={() => dispatch(nextStep())}
      >
        {index < steps.length - 2 ? "Next Step" : "Confirm"}
      </Button>
    </SC.FooterOptions>
  );
};
