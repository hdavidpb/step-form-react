import { IconName } from "../../context/interfaces";
import { Advanced, Arcade, Pro } from "./index";

interface Props {
  iconName: string;
}

const GenerateIcon = ({ iconName }: Props) => {
  return (
    <>
      {iconName === IconName.advanced && <Advanced />}
      {iconName === IconName.pro && <Pro />}
      {iconName === IconName.arcade && <Arcade />}
    </>
  );
};

export default GenerateIcon;
