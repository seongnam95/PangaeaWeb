import styled, { css } from 'styled-components';
import { NavItem } from '../atoms/NavItem';
import { useState } from 'react';
import Icon, { IconType } from '../atoms/Icon';

export default function SideNavigation() {
  const [isMinimize, setIsMinimize] = useState(false);
  const [isActivate, setIsActivate] = useState<string>();

  type itemTypes = {
    value: string;
    label: string;
    icon: IconType;
  };

  const property_items: itemTypes[] = [
    { value: 'solo', label: '매물 관리', icon: 'property' },
    { value: 'group', label: '고객 관리', icon: 'people' },
  ];

  const clickedMenu = () => {
    setIsMinimize(prev => !prev);
  };

  const handleOnClick = (v: string) => {
    setIsActivate(v);
    console.log(v);
  };

  return (
    <StyledSideNavigation className={isMinimize ? 'minimize' : ''}>
      <StyledHeader className="nav-header">
        <div className="nav-header logo">PANGAEA</div>
        <div className="nav-header icon" onClick={clickedMenu}>
          <Icon icon="menu" color="white" size="13px" />
        </div>
      </StyledHeader>
      <ul>
        {property_items.map((item, idx) => (
          <NavItem
            key={idx}
            icon={item.icon}
            value={item.value}
            label={item.label}
            activated={isActivate === item.value}
            minimize={isMinimize}
            onClick={handleOnClick}
          />
        ))}
      </ul>
    </StyledSideNavigation>
  );
}

const StyledSideNavigation = styled.div`
  width: 210px;
  height: 100vh;
  background-color: var(--primary-color);
  border-right: 1px solid black;
  box-shadow: 0px 5px 8px 8px var(--shadow-color);
  -webkit-user-select: none;
  user-select: none;
  transition: width 0.3s ease-in-out;

  &.minimize {
    width: 55px;
  }
`;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 70px;
  padding: 1em;
  background-color: var(--primary-color);
  align-items: center;
  margin-bottom: 20px;

  .logo {
    overflow: hidden;
    font-size: 22px;
    color: var(--text-color);
    margin-right: 30px;
  }

  .icon {
    position: absolute;
    right: 19px;
    display: flex;

    svg {
      cursor: pointer;
      :hover {
        box-shadow: 0 0 15px 8px var(--shadow-color-dark);
      }
    }
  }
`;
