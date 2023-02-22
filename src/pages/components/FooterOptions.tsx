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
      `https://api.whatsapp.com/send?phone=+${
        import.meta.env.VITE_WAPP_NUMBER
      }&text=${encodeURIComponent(wappText)}`
    );
  };

  return (
    <SC.FooterOptions>
      <span
        style={{ opacity: index === 0 ? 0 : 1 }}
        onClick={() => dispatch(goBack())}
      >
        Atrás
      </span>

      <Button disabled={!steps[index].isCompleted} onClick={handleClick}>
        {index < steps.length - 2 ? "Siguiente" : "Ordenar"}
      </Button>
    </SC.FooterOptions>
  );
};
