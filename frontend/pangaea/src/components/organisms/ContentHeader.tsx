import { useState } from 'react';
import styled, { css } from 'styled-components';

export function ContentHeader() {
  const [isOver, setIsOver] = useState(false);

  return <StyledContentHeader isOver={isOver}></StyledContentHeader>;
}

const StyledContentHeader = styled.div<{ isOver?: boolean }>`
  left: 50%;
  display: flex;
  width: 100%;
  height: 60px;
  padding: 5px 20px;
  background-color: var(--primary-color-dark);
  border-bottom: 1px solid var(--color-border-light);
  box-shadow: 0px 0px 8px 3px var(--shadow-color);
  align-items: center;

  ${({ isOver }) =>
    isOver &&
    css`
      height: 80px;
    `}
`;
