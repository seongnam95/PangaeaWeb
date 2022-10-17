import styled, { css } from 'styled-components';
import { IconType } from './Icon';

interface ChipProps {
  label: string;
  onClick?: void;
  styled?: string;
  color?: string;
}

export function Chip(props: ChipProps) {
  return (
    <StyledChip styled={props.styled} color={props.color}>
      <p>{props.label}</p>
    </StyledChip>
  );
}

// styled
const StyledChip = styled.div<{ styled?: string; color?: string }>`
  --chip-color: ${props => props.color || 'var(--primary-color)'};

  display: inline-flex;
  font-size: var(--font-size-xs);
  align-items: center;
  margin-right: 5px;
  padding: 7px 7px;

  ${({ styled }) =>
    !styled &&
    css`
      background-color: rgb(140, 140, 140);
      border: 1px solid var(--chip-color);
      color: #fff;
    `}

  ${({ styled }) =>
    styled == 'ghost' &&
    css`
      background-color: transparent;
      border: 1.5px solid var(--chip-color);
      color: var(--chip-color);
      letter-spacing: 1px;
      font-weight: 700;
    `}
`;
