import GlobalStyle from './Globalstyles';
import styled from 'styled-components';
import { Manager } from 'pages/Manager';

function App() {
  return (
    <StyledGridContainer>
      <GlobalStyle darkMode={true} animation={true} />
      <Manager />
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
