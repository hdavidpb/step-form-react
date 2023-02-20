import { CheckIcon } from "../../components/icons";
import { Step } from "../../context/interfaces";
import * as SC from "../styled-components/styles";
interface Props {
  steps: Step[];
  index: number;
}
export const ThankYouStep = ({ index, steps }: Props) => {
  return (
    <SC.TankYouContainers>
      <i>
        <CheckIcon />
      </i>
      <h1>{steps[index].title}</h1>
      <p>{steps[index].description}</p>
    </SC.TankYouContainers>
  );
};
