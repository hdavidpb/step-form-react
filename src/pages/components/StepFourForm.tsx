import {
  AddOnFinishingDetail,
  PlanFinishinDetail,
  TotalFishinUp,
} from "./index";
import * as SC from "../styled-components/styles";

export const StepFourForm = () => {
  return (
    <SC.FieldsContainer>
      <SC.FinishinUpContainer>
        <SC.FinishingDetailsContainer>
          <PlanFinishinDetail />
          <AddOnFinishingDetail />
        </SC.FinishingDetailsContainer>
        <TotalFishinUp />
      </SC.FinishinUpContainer>
    </SC.FieldsContainer>
  );
};
