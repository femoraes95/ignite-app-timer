import styled from 'styled-components';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariantes = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 80px;
  height: 40px;

  background-color: ${(props) => props.theme.primary};
`;
