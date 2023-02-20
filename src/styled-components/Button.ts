import styled from "styled-components";
import { theme } from "../theme/theme";

interface ButtonProps {
  bg?: string;
  color?: string;
}

export const Button = styled.button`
  padding: 15px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ bg }: ButtonProps) =>
    bg ? bg : theme.primary.marineBlue};
  color: ${({ color }: ButtonProps) => (color ? color : theme.neutral.white)};
  transition: all 0.4s;
  border-radius: 10px;
  :hover {
    transform: scale(1.1);
  }

  :disabled {
    background-color: ${theme.neutral.coolGray};
  }
`;
