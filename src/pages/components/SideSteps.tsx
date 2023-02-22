import * as SC from "../styled-components/styles";
import bg from "../../assets/images/bg-sidebar-desktop.svg";
import responsiveBg from "../../assets/images/bg-sidebar-mobile.svg";
import { Step } from "../../context/interfaces";
import { useContext } from "react";
import { stepsContext } from "../../context/StepsProvider";
import { goToStep } from "../../context/stepReducer/actions";

interface Props {
  steps: Step[];
  index: number;
}

const SideSteps = ({ index, steps }: Props) => {
  const { dispatch } = useContext(stepsContext);

  const hanldleClick = (index: number) => {
    if (index === 0) {
      dispatch(goToStep(index));
      return;
    }
    if (!steps[index - 1].isCompleted) return;
    dispatch(goToStep(index));
  };

  return (
    <SC.SideStepContainer bg={bg} responsiveBg={responsiveBg}>
      {steps.map(({ caption }, idx) => {
        if (idx <= steps.length - 2) {
          return (
            <SC.StepContainer isStep={idx === index} key={caption}>
              <p onClick={() => hanldleClick(idx)}>{idx + 1}</p>
              <SC.StepDetialContainer>
                <span>{`PASO ${idx + 1}`}</span>
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
