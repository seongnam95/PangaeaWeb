import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Icon, { IconType } from './Icon';

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

  const iconStyle = {
    color: '#FFF',
    size: '2.4rem',
  };

  return (
    <Link to={'/' + value}>
      <StyledNavItem
        className="nav-item"
        onClick={() => onClick(value)}
        activated={isActive}
        minimize={minimize}
      >
        <div className="item-icon">
          <Icon icon={icon} style={iconStyle} />
        </div>
        <div className="item-label">{label}</div>
        <div className="item-hint">{label}</div>
      </StyledNavItem>
    </Link>
  );
}

const StyledNavItem = styled.li<{ activated: boolean; minimize: boolean }>`
  position: relative;
  display: flex;
  padding: 0 1.6rem;
  height: 4.5rem;
  align-items: center;
  transition: background-color var(--ease-in-out-3);
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
  }

  .item-icon {
    margin-right: 1.8rem;
  }

  .item-label {
    color: var(--nav-text);
    font-size: var(--font-size-s);
    overflow: hidden;
    white-space: nowrap;
  }

  .item-hint {
    display: none;
    z-index: 3;
    opacity: 0;
    position: absolute;
    height: 33px;
    color: var(--nav-text);
    font-size: var(--font-size-s);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 0 16px;
    left: calc(100% + 13px);
    box-shadow: 0px 0px 3px 3px var(--shadow-color);
    white-space: nowrap;
    background-color: #fff;
    transition: all var(--ease-in-out-3);
    transform: translateX(-30%);
    pointer-events: none;
  }

  &:hover {
    background-color: var(--nav-color-light);
  }

  ${({ activated }) =>
    activated &&
    css`
      background-color: var(--nav-color-light);
    `}

  ${({ minimize }) =>
    minimize &&
    css`
      .item-hint {
        display: flex;
      }
      &:hover {
        .item-hint {
          transform: translateX(0);
          opacity: 1;
          pointer-events: auto;
        }
      }
    `}
`;
