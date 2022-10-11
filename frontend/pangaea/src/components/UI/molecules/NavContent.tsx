import styled, { css } from 'styled-components';
import { useRef, useState } from 'react';
import { NavItem, NavItemProps } from '../atoms/NavItem';

import Icon, { IconType } from '../atoms/Icon';

interface NavContentProps {
  items: NavItemProps[];
  header?: string;
  icon?: IconType;
  folding?: boolean;
  onClick?: (value: string) => void;
}

export default function NavContent({
  items,
  header,
  icon,
  folding,
  onClick,
}: NavContentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleItemClick = (v: string) => {
    if (onClick) onClick(v);
  };

  return (
    <StyledNavContent className={'nav-content'}>
      <NavHeader
        icon={icon}
        className={isOpen ? 'open' : ''}
        header={header}
        folding={folding}
        onClick={handleHeaderClick}
      />
      {isOpen && folding ? (
        <ul>
          {items.map((item, idx) => (
            <NavItem
              key={idx}
              value={item.value}
              label={item.label}
              onClick={v => {
                handleItemClick(v);
              }}
            />
          ))}
        </ul>
      ) : null}
    </StyledNavContent>
  );
}

const StyledNavContent = styled.div``;

// Navigation Header

interface NavHeaderProps {
  header: string;
  className?: string;
  icon?: IconType;
  folding?: boolean;
  onClick?: () => void;
}

const NavHeader = ({
  header,
  className,
  icon,
  folding,
  onClick,
}: NavHeaderProps) => {
  return (
    <StyledNavHeader
      folding={folding}
      className={className}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {icon ? (
        <div className="nav-header-icon">
          <Icon icon={icon} size="24px" />
        </div>
      ) : null}
      <div className="nav-header-label">{header}</div>
    </StyledNavHeader>
  );
};

const StyledNavHeader = styled.div<{ folding?: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--color-border-light);
  align-items: center;
  padding: 0.5em;
  overflow: hidden;
  cursor: pointer;

  & > div {
    display: flex;
    height: 100%;
    align-items: center;

    &.nav-header-icon {
      margin: 0 15px 0 15px;
    }

    &.nav-header-label {
      color: var(--color-font-light);
      font-size: var(--font-size-s);
    }
  }

  &.open {
    .nav-header-label {
      color: var(--color-blue-light);
      font-weight: 700;
    }

    .nav-header-icon {
      margin: 0 15px 0 15px;
      svg {
        fill: var(--color-blue-light) !important ;
      }
    }
  }

  ${props =>
    props.folding &&
    css`
      ::after {
        border-bottom: 2px solid gray;
        border-right: 2px solid gray;
        content: '';
        display: block;
        height: 5px;
        margin-top: -4px;
        pointer-events: none;
        position: absolute;
        right: 12px;
        top: 50%;
        transform-origin: 66% 66%;
        transform: rotate(45deg);
        transition: all 0.15s ease-in-out;
        width: 5px;
      }

      &.open {
        @extend :active;
        &:after {
          transform: rotate(-135deg);
        }
      }

      @media screen and (max-width: 1000px) {
        ::after {
          display: none;
        }
        :hover {
          ::after {
            display: block;
          }
        }
      }
    `}
`;
