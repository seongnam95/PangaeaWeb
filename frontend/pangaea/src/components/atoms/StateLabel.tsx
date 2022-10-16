import styled from 'styled-components';
import { IconType } from './Icon';

interface StateLabelProps {
  label: string;
  onClick?: void;
  style?: {
    color?: string;
    width?: string;
    height?: string;
    type?: string;
    icon?: IconType;
  };
}

export function StateLabel(props: StateLabelProps) {
  return (
    <StyledStateLabel {...props.style}>
      <label>{props.label}</label>
    </StyledStateLabel>
  );
}

interface StyleProps {
  color?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  type?: string;
  icon?: IconType;
}

// styled
const StyledStateLabel = styled.div<StyleProps>`
  display: inline-flex;
  background-color: ${props => props.bgColor || 'var(--primary-color)'};
  border: 1px solid var(--border-color-light);
  border-radius: 17px;
  height: ${props => props.height || '2.5rem'};
  width: ${props => props.width};
  align-items: center;
  padding: 1.3rem 1.2rem;
  margin-right: 5px;

  label {
    font-size: var(--font-size-xs);
    color: ${props => props.color || 'white'};
  }
`;
