import { ReactElement } from 'react';

import * as icons from '../Icon/svg';
import styled from 'styled-components';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  icon: IconType;
  onClick?: () => void;
  style?: {
    color?: string;
    size?: string;
    hoverColor?: string;
  };
}

export function Icon({ icon, style, onClick }: IconProps): ReactElement {
  const SVGIcon = icons[icon];

  return (
    <StyledIconBox className="icon" {...style}>
      <SVGIcon onClick={onClick} />
    </StyledIconBox>
  );
}

type StyledIconType = {
  color?: string;
  hoverColor?: string;
  size?: string;
};

const StyledIconBox = styled.div<StyledIconType>`
  display: inline-flex;
  svg {
    height: auto;
    width: ${props => props.size || '2.4rem'};
    min-width: ${props => props.size || '2.4rem'};
    fill: ${props => props.color || 'var(--gray-600)'};
    transition: all var(--ease-in-out-3);

    :hover {
      fill: ${props => props.hoverColor};
    }
  }
`;
