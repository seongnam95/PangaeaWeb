import styled from 'styled-components';
import { NavItem } from '../../molecules/NavItem';
import { useState } from 'react';
import { Icon, IconType } from '../../atoms/Icon';

export function Navigation() {
  const [isMinimize, setIsMinimize] = useState(false);
  const [isActivate, setIsActivate] = useState<string>();

  type itemTypes = {
    value: string;
    label: string;
    icon: IconType;
  };

  const property_items: itemTypes[] = [
    { value: 'property', label: '매물 관리', icon: 'property' },
    { value: 'client', label: '고객 관리', icon: 'people' },
  ];

  const clickedMenu = () => {
    setIsMinimize(prev => !prev);
  };

  const handleOnClick = (v: string) => {
    setIsActivate(v);
    console.log(v);
  };

  return (
    <Sty className={isMinimize ? 'minimize' : ''}>
      <StyledHeader className="nav-header">
        <div className="nav-header logo">PANGAEA</div>
        <Icon
          onClick={clickedMenu}
          icon="menu"
          style={{ color: '#FFF', size: '1.9rem' }}
        />
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
    </Sty>
  );
}

const Sty = styled.div`
  position: fixed;
  z-index: 9999;
  width: 21rem;
  height: 100vh;
  background-color: var(--nav-color);
  box-shadow: var(--shadow-gray-500);
  -webkit-user-select: none;
  user-select: none;
  transition: width var(--ease-in-out-3);

  &.minimize {
    width: 5.5rem;
  }
`;

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 7rem;
  padding: 1.5rem;
  background-color: var(--nav-color);
  align-items: center;
  margin-bottom: 2rem;

  .logo {
    overflow: hidden;
    font-size: 2.5rem;
    color: var(--nav-text);
    margin-right: 3rem;
  }

  .icon {
    position: absolute;
    right: 1.6rem;
    display: flex;

    svg {
      cursor: pointer;
      :hover {
        box-shadow: 0 0 15px 8px rgb(188, 188, 188, 0.2);
      }
    }
  }
`;
