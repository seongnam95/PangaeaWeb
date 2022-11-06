import styled, { css } from 'styled-components';
import { Icon, IconType } from '../Icon';

export interface ChipProps {
  value?: string;
  icon?: IconType;
  label?: string;
  hint?: string;
  type?: 'filled' | 'outline';
  shape?: 'square' | 'circle';
  color?: string;
  bgColor?: string;
  onClick?: void;
}

export function Chip({ value, icon, label, onClick, ...props }: ChipProps) {
  return (
    <StyledChip {...props} onClick={() => onClick}>
      {icon ? <Icon icon={icon} style={{ size: '20px' }} /> : null}
      {label ? <span>{label}</span> : null}
    </StyledChip>
  );
}

// styled
interface StyledChipProps {
  type?: 'filled' | 'outline';
  shape?: 'square' | 'circle';
  color?: string;
  bgColor?: string;
}

const StyledChip = styled.div<StyledChipProps>`
  --chip-icon-color: ${props => props.color || 'var(--gray-600)'};
  --chip-bgColor: ${props => props.bgColor || 'var(--gray-300)'};
  --shape: ${props =>
    props.shape === 'square' || !props.shape
      ? '4px'
      : props.shape === 'circle'
      ? '50%'
      : ''};

  display: inline-flex;
  height: 30px;
  height: 30px;
  min-width: 30px;

  align-items: center;
  justify-content: center;

  background-color: var(--chip-bgColor);
  border: 1.5px solid var(--chip-bgColor);
  border-radius: var(--shape);

  user-select: none;
  -webkit-user-select: none;

  & > .icon {
    margin: 0.3rem;
    svg {
      fill: var(--chip-icon-color);
    }
  }

  span {
    white-space: nowrap;
    font-size: var(--font-size-xs);
    font-weight: 600;
    color: var(--chip-icon-color);
    margin: 0.3rem 0.5rem 0 0.5rem;
    transform: rotate(0.03deg);
  }

  ${props =>
    props.type === 'outline' &&
    css`
      background-color: transparent;
      border-color: var(--chip-icon-color);
    `}
`;
