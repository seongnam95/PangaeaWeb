import { ReactElement } from 'react';

import * as icons from 'assets/svg';
import styled, { css } from 'styled-components';

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

function Icon({ icon, style, onClick }: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  console.log(style);

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
  svg {
    height: auto;
    width: ${props => props.size || '2.4rem'};
    min-width: ${props => props.size || '2.4rem'};
    fill: ${props => props.color || '#373737'};
    transition: all var(--ease-in-out-3);

    :hover {
      fill: ${props => props.hoverColor};
    }
  }
`;

export default Icon;
