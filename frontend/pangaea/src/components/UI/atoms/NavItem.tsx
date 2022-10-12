import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon, { IconType } from '../atoms/Icon';

export interface NavItemProps {
  value: string;
  label: string;
  icon: IconType;
  activated: boolean;
  minimize: boolean;
  onClick: (value: string) => void;
}

export function NavItem({
  value,
  label,
  icon,
  activated,
  minimize,
  onClick,
}: NavItemProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(activated);
  }, [activated]);

  return (
    <StyledNavItem
      className="nav-item"
      onClick={() => onClick(value)}
      activated={isActive}
      minimize={minimize}
    >
      <div className="item-icon">
        <Icon icon={icon} size="24px" />
      </div>
      <div className="item-label">{label}</div>
      <div className="item-hint">{label}</div>
    </StyledNavItem>
  );
}

const StyledNavItem = styled.li<{ activated: boolean; minimize: boolean }>`
  position: relative;
  display: flex;
  padding: 0 1em;
  height: 45px;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
  }

  .item-icon {
    margin-right: 1em;
  }

  .item-label {
    color: var(--text-color);
    font-size: var(--font-size-s);
    overflow: hidden;
    white-space: nowrap;
  }

  .item-hint {
    z-index: -1;
    opacity: 0;
    position: absolute;
    height: 33px;
    color: var(--text-sub-color);
    font-size: var(--font-size-s);
    border-radius: 5px;
    padding: 0 16px;
    left: calc(100% + 13px);
    box-shadow: 0px 0px 3px 3px var(--shadow-color);
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
    transform: translateX(-30%);
  }

  &:hover {
    background-color: var(--primary-color-light);
  }

  ${({ activated }) =>
    activated &&
    css`
      background-color: var(--primary-color-light);
    `}

  ${({ minimize }) =>
    minimize &&
    css`
      &:hover {
        .item-hint {
          z-index: 9999;
          transform: translateX(0);
          opacity: 1;
        }
      }
    `}
`;
