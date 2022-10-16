import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InButtonProps {
  onClick?: () => void;
  value?: string;
  icon?: IconDefinition;
}

function InButton({ value, icon, onClick }: InButtonProps) {
  console.log(styled);
  return (
    <StyledInButton onClick={onClick} value={value}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </StyledInButton>
  );
}

const StyledInButton = styled.button`
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

export default InButton;
