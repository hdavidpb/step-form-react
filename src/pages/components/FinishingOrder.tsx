import { PlanFinishinDetail, TotalFishinUp } from "./index";
import * as SC from "../styled-components/styles";

export const FinishingOrder = () => {
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
