import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
  onClick?: () => void;
  value?: string;
  icon?: IconDefinition;
}

export function Button({ value, icon, onClick }: ButtonProps) {
  console.log(styled);
  return (
    <StyledButton onClick={onClick} value={value}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-sub);
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }
`;
