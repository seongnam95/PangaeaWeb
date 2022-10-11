import GlobalStyle from './Globalstyles';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Header from './components/UI/organisms/Header';
import SideNavigation from './components/UI/organisms/SideNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SideNavigation />
    </>
  );
}

export const IconPeople = () => {
  return <FontAwesomeIcon icon={faPeopleArrows} />;
};

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
