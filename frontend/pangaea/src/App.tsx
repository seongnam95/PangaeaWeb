import GlobalStyle from './Globalstyles';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { StandardContract } from './components/pages/contract/standard/standard';

function App() {
  return (
    <>
      <GlobalStyle />
      <StandardContract />
    </>
  );
}

const GridContainer = ({ children }: PropsWithChildren<unknown>) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 240px 240px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 100px 1000px;
  }
`;

export default App;
