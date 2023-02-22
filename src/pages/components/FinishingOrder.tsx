import { PlanFinishinDetail, TotalFishinUp } from "./index";
import * as SC from "../styled-components/styles";
import useValidateFinishingOrder from "../../hooks/useValidateFinishingOrder";
export const FinishingOrder = () => {
  useValidateFinishingOrder();
  return (
    <SC.FieldsContainer>
      <SC.FinishinUpContainer>
        <SC.FinishingDetailsContainer>
          <PlanFinishinDetail />
        </SC.FinishingDetailsContainer>
        <TotalFishinUp />
      </SC.FinishinUpContainer>
    </SC.FieldsContainer>
  );
};
