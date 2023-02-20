import * as SC from "../styled-components/styles";
import bg from "../../assets/images/bg-sidebar-desktop.svg";
import responsiveBg from "../../assets/images/bg-sidebar-mobile.svg";
import { Step } from "../../context/interfaces";

interface Props {
  steps: Step[];
  index: number;
}

const SideSteps = ({ index, steps }: Props) => {
  return (
    <SC.SideStepContainer bg={bg} responsiveBg={responsiveBg}>
      {steps.map(({ caption }, idx) => {
        if (idx <= steps.length - 2) {
          return (
            <SC.StepContainer isStep={idx === index} key={caption}>
              <p>{idx + 1}</p>
              <SC.StepDetialContainer>
                <span>{`STEP ${idx + 1}`}</span>
                <h5>{caption}</h5>
              </SC.StepDetialContainer>
            </SC.StepContainer>
          );
        }
      })}
    </SC.SideStepContainer>
  );
};

export default SideSteps;
