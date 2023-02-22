import { theme } from "../theme/theme";

export const getLabelColor = (contition: boolean) => {
  return contition ? theme.primary.marineBlue : theme.neutral.coolGray;
};
