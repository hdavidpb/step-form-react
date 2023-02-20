import styled from "styled-components";
import { theme } from "../../theme/theme";

export const MainLayout = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StepFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 5px 10px #00000014;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;

  @media (max-width: 600px) {
    position: relative;
    margin: inherit;
    width: 100%;
    height: 100%;
    flex-direction: column;
    box-shadow: none;
    justify-content: flex-start;
    padding: 0;
  }
`;
interface ISidevarELement {
  bg: string;
  responsiveBg: string;
}
export const SideStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.2rem;
  width: 270px;
  height: 100%;
  background: url(${({ bg }: ISidevarELement) => bg}) no-repeat center
    center/cover;
  border-radius: 10px;
  padding: 1.5rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 25vh;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border-radius: 0;
    background: url(${({ responsiveBg }: ISidevarELement) => responsiveBg})
      no-repeat center;
    background-size: 100%;
    background-position: inherit;
  }
`;

interface StepsProps {
  isStep: boolean;
}

export const StepContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  p {
    width: 30px;
    height: 30px;
    border: solid 1px ${theme.neutral.white};
    border-radius: 50%;
    color: ${theme.neutral.white};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ isStep }: StepsProps) =>
      isStep ? theme.primary.lightBlue : theme.primary.purplishBlue};
    color: ${({ isStep }: StepsProps) =>
      isStep ? theme.primary.marineBlue : theme.neutral.white};
  }
  @media (max-width: 600px) {
    width: auto;
    flex-direction: column;
  }
`;

export const StepDetialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;

  span {
    font-size: 13px;
    color: ${theme.neutral.coolGray};
  }

  h5 {
    color: ${theme.neutral.white};
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

interface FormLayoutProps {
  isFinished: boolean;
}

export const FormLayout = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ isFinished }: FormLayoutProps) =>
    isFinished ? "center" : "flex-start"};
  align-items: ${({ isFinished }: FormLayoutProps) =>
    isFinished ? "center" : "flex-start"};
  gap: 2rem;
  padding: 30px 50px;
  @media (max-width: 600px) {
    flex: 0;
    height: auto;
    position: absolute;
    width: 88%;
    padding: 20px 10px;
    background-color: ${theme.neutral.white};
    border-radius: 10px;
    top: 17%;
    box-shadow: 0 5px 5px 3px #00000014;
  }
`;

export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h1 {
    color: ${theme.primary.marineBlue};
  }

  p {
    font-size: 16px;
    color: ${theme.neutral.coolGray};
  }
`;

export const FieldsContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;

  label {
    font-size: 14px;
    color: ${theme.primary.marineBlue};
  }
  input {
    width: 100%;
    border: solid 1px ${theme.neutral.coolGray};
    padding: 15px;
    outline: none;
    border-radius: 8px;
  }
`;

export const FooterOptions = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${theme.primary.marineBlue};
    font-weight: bold;
    cursor: pointer;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

interface PlanCardProps {
  isSelected: boolean;
}

export const PlanCard = styled.div`
  position: relative;
  flex-grow: 1;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border: solid 2px
    ${({ isSelected }: PlanCardProps) =>
      isSelected ? theme.primary.marineBlue : theme.neutral.lightGray};
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    border-color: ${theme.primary.marineBlue};
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    gap: 10px;
  }
`;

export const Icon = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;

  @media (max-width: 600px) {
    position: static;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;

  h4 {
    color: ${theme.primary.marineBlue};
  }

  span {
    font-size: 14px;
    color: ${theme.neutral.coolGray};
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.neutral.magnolia};

  h5 {
    color: ${theme.primary.marineBlue};
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${theme.primary.marineBlue};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: ${theme.primary.marineBlue};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export const AddOnsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

interface AddOnCardProps {
  isSelected: boolean;
}

export const AddOnCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 9px;
  border: solid 2px
    ${({ isSelected }: AddOnCardProps) =>
      isSelected ? theme.primary.marineBlue : theme.neutral.coolGray};
  border-radius: 10px;
  transition: all 0.4s;
  cursor: pointer;

  span {
    font-size: 14px;
    color: ${theme.primary.purplishBlue};
  }
`;

export const AddOnDetailContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;

  input {
    width: 16px;
    height: 16px;

    :checked {
      accent-color: ${theme.primary.marineBlue};
    }
  }
`;
export const AddonDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;

  h5 {
    color: ${theme.primary.marineBlue};
  }

  p {
    font-size: 13px;
    color: ${theme.neutral.coolGray};
  }
`;

export const FinishinUpContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const AddOnsDetailsContainer = styled(FinishinUpContainer)`
  padding-top: 10px;
  border-top: solid 1px ${theme.neutral.lightGray};
  gap: 15px;
`;

export const FinishingDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: ${theme.neutral.magnolia};
  border-radius: 10px;
`;

export const FinishingDetailCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  h4 {
    color: ${theme.primary.marineBlue};
  }
`;

export const AddOnDetailCard = styled(FinishingDetailCard)`
  h5 {
    font-size: 15px;
    font-weight: 200;
    color: ${theme.neutral.coolGray};
  }
  h6 {
    font-size: 15px;
    font-weight: 400;
    color: ${theme.primary.marineBlue};
  }
  padding-bottom: 0;
`;

export const PlantTypeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;

  button {
    border: none;
    background-color: transparent;
    outline: none;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.4s;
    color: ${theme.primary.marineBlue};
    :hover {
      color: ${theme.primary.pastelBlue};
    }
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  span {
    font-size: 15px;
    color: ${theme.neutral.coolGray};
  }

  h3 {
    color: ${theme.primary.purplishBlue};
  }
`;

export const TankYouContainers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  h1 {
    color: ${theme.primary.marineBlue};
  }

  p {
    color: ${theme.neutral.coolGray};
    text-align: center;
  }
`;
