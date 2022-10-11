import styled from 'styled-components';

export default function Header() {
  return <StyledHeader></StyledHeader>;
}

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--color-border-light);
  box-shadow: 0px 0px 8px 5px rgba(149, 157, 165, 0.12);
`;
