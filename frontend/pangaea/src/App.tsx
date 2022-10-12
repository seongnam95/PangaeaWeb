import GlobalStyle from './Globalstyles';
import styled from 'styled-components';
import ContentHeader from './components/UI/organisms/ContentHeader';
import SideNavigation from './components/UI/organisms/SideNavigation';
import { Content } from './components/UI/organisms/Content';

function App() {
  return (
    <StyledGridContainer>
      <GlobalStyle />
      <SideNavigation />
      <StyledSection>
        <ContentHeader />
        <Content />
      </StyledSection>
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  display: inline-flexbox;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const StyledSection = styled.div`
  width: 100%;
`;

export default App;
