import styled from 'styled-components';

export default function Header() {
  return <StyledHeader></StyledHeader>;
}

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--primary-color-dark);
  border-bottom: 1px solid var(--color-border-light);
  box-shadow: 0px 0px 8px 8px var(--shadow-color);
`;
