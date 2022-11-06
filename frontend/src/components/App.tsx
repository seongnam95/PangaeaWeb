import GlobalStyle from 'Globalstyles';
import styled from 'styled-components';
import { Manager } from 'components/pages/Manager';

function App() {
  return (
    <StyledGridContainer className="App">
      <GlobalStyle darkMode={true} animation={true} />

      <Manager />
    </StyledGridContainer>
  );
}

const StyledGridContainer = styled.div`
  padding-right: 10px;
  height: 100vh;
`;

export default App;
