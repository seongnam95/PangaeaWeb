import { ReactElement } from 'react';

import * as icons from '../../../assets/svg';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps {
  icon: IconType;
  color?: string;
  size?: string | number;
  onClick?: () => void;
}

const NORMAL_ICON_COLOR = '#fff';

function Icon({ icon, color, size, onClick }: IconProps): ReactElement {
  const SVGIcon = icons[icon];
  const strokeColor = color || NORMAL_ICON_COLOR;
  const widthPx =
    size &&
    (typeof size === 'number' ? `${size}px` : `${size.replace('px', '')}px`);

  return (
    <SVGIcon
      onClick={onClick}
      style={{
        fill: strokeColor,
        width: widthPx,
        minWidth: widthPx,
        height: 'auto',
      }}
    />
  );
}

export default Icon;
