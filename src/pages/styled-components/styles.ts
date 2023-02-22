import styled, { keyframes } from "styled-components";
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
  width: 950px;
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
    cursor: text;
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
  gap: 1rem;
  padding: 30px 40px;

  @media (max-width: 600px) {
    height: 85%;
    flex: 0;

    position: absolute;
    width: 98%;
    padding: 20px 10px;
    background-color: ${theme.neutral.white};
    border-radius: 10px;
    top: 10%;
    box-shadow: 0 5px 5px 3px #00000014;
  }
`;

export const HeaderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  h3 {
    color: ${theme.primary.marineBlue};
  }

  p {
    font-size: 16px;
    color: ${theme.neutral.coolGray};
  }
`;

export const FiltersTabContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 9px;
  overflow-x: auto;
  padding: 7px;
`;

interface CategoryProps {
  isSelected: boolean;
}

export const Li = styled.li`
  text-align: center;
  font-size: 13px;
  padding: 8px;
  border-radius: 16px;
  box-shadow: 0 1px 2px 2px ${theme.neutral.lightGray};
  list-style: none;
  color: ${theme.primary.marineBlue};
  background-color: ${({ isSelected }: CategoryProps) =>
    isSelected ? theme.primary.marineBlue : "#FFFFFF"};
  color: ${({ isSelected }: CategoryProps) =>
    isSelected ? "#FFFFFF" : theme.primary.marineBlue};
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.1);
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
  overflow-y: auto;
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
  input,
  select {
    width: 100%;
    border: solid 1px ${theme.neutral.coolGray};
    padding: 15px;
    outline: none;
    border-radius: 8px;
  }
  textarea {
    width: 100%;
    height: 80px;
    border: solid 1px ${theme.neutral.coolGray};
    padding: 15px;
    outline: none;
    border-radius: 8px;
    resize: none;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px 5px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface ProductCardProps {
  isSelected: boolean;
}

const animateCardFadeIn = keyframes`
  0% { 
  transform:scale(0)

}


  100% { 
  
    transform:scale(1.1)
  }

`;

export const ProductCard = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: ${({ isSelected }: ProductCardProps) =>
    isSelected
      ? `${theme.primary.marineBlue} 0px 2px 8px 0px`
      : `${theme.neutral.lightGray} 0px 2px 8px 0px`};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;
  animation: ${animateCardFadeIn} 0.4s ease-in-out;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const SelectedCount = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  top: 0;
  border-radius: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(213deg 96% 18% / 53%);
  border-radius: 10px 10px 0 0;
  h1 {
    color: ${theme.neutral.white};
    font-size: 60px;
    font-style: oblique;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 70px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  @media (max-width: 600px) {
    position: static;
  }
`;

export const CardDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 10px;
  h4 {
    color: ${theme.primary.marineBlue};
    font-weight: 600;
    font-size: 14px;
  }

  span {
    font-weight: 900;
    font-size: 14px;
    color: ${theme.neutral.coolGray};
    //nothing
  }
`;

export const CardFooter = styled.div`
  margin: auto;
  width: 70%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background-color: ${theme.neutral.magnolia};
  margin-bottom: 10px;

  span {
    flex: 1;
    font-size: 14px;
    font-weight: 900;
    text-orientation: sideways;
    text-align: center;
    cursor: text;
  }

  button {
    width: 30px;
    border: none;
    outline: none;
    font-size: 1.1rem;
    background-color: transparent;
    cursor: pointer;
    :first-child {
      border-radius: 10px 0 0 10px;
      border-right: solid 1px ${theme.neutral.coolGray};
    }
    :last-child {
      border-radius: 0 10px 10px 0;
      border-left: solid 1px ${theme.neutral.coolGray};
    }
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
  max-height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  background-color: ${theme.neutral.magnolia};
  border-radius: 10px;
  overflow-y: auto;
`;

export const FinishingDetailCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  gap: 10px;
  h4 {
    color: ${theme.primary.marineBlue};
  }

  button {
    margin-top: 1rem;
    border: none;
    outline: none;
    text-decoration: underline;
    font-size: 1rem;
    background-color: transparent;
    color: ${theme.primary.marineBlue};
    cursor: pointer;
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

export const OrderDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  h3 {
    color: ${theme.primary.marineBlue};
  }
  p {
    flex: 1;
    color: ${theme.primary.marineBlue};
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  span {
    color: ${theme.neutral.coolGray};
    font-size: 1.6rem;
    font-weight: 900;
  }

  h3 {
    color: ${theme.primary.marineBlue};
    font-size: 1.6rem;
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
