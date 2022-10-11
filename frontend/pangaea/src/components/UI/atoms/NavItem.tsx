import styled from 'styled-components';

export interface NavItemProps {
  value: string;
  label: string;
  onClick?: (value: string) => void;
}

export function NavItem({ value, label, onClick }: NavItemProps) {
  return (
    <StyledNavItem
      value={value}
      onClick={() => {
        if (onClick) onClick(value);
      }}
    >
      <div className="item-content">{label}</div>
    </StyledNavItem>
  );
}

const StyledNavItem = styled.li`
  display: flex;
  padding-left: 1em;
  height: 40px;
  color: var(--color-font);
  align-items: center;
  transition: background-color 0.3s ease;
  cursor: pointer;

  .icon {
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
  }

  .item-content {
    display: block;
    font-size: var(--font-size-s);
    margin-left: 0.8em;
  }

  &:hover {
    background-color: var(--color-hover-blue);

    .item-content {
      color: var(--color-blue);
    }
  }

  @media screen and (max-width: 1000px) {
    .item-content {
      display: none;
    }
  }
`;
