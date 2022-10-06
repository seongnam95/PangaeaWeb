import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InButton {
  onClick: () => void;
  icon: IconDefinition;
}

//안녕하세요
function InButton({ onClick, icon }: InButton) {
  return (
    <StyledInButton onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </StyledInButton>
  );
}

const StyledInButton = styled.button`
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: var(--font-sub);
  cursor: pointer;
  border: 0;
  background-color: transparent;

  &:hover svg {
    color: var(--main-color);
  }
`;

export default InButton;
