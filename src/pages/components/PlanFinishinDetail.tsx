import { useContext } from "react";

import { editProductOrder } from "../../context/stepReducer/actions";
import { stepsContext } from "../../context/StepsProvider";
import { parsePrice } from "../../utils/parsePrice";
import * as SC from "../styled-components/styles";

export const PlanFinishinDetail = () => {
  const { state, dispatch } = useContext(stepsContext);

  const { productSelected } = state;

  return (
    <SC.FinishingDetailCard>
      {productSelected.map((plan) => (
        <SC.OrderDescriptionContainer key={plan.nombre}>
          <h3>{plan.count}</h3>
          <p>{plan.nombre}</p>
          <h3>{parsePrice(plan.precio * plan.count)}</h3>
        </SC.OrderDescriptionContainer>
      ))}
      <button onClick={() => dispatch(editProductOrder())}>Editar ordén</button>
    </SC.FinishingDetailCard>
  );
};
