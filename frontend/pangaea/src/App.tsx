import GlobalStyle from './Globalstyles';
import { DateInput } from './components/UI/molecules/DateInput';
import { Radio, RadioType } from './components/UI/atoms/Radio';
import Input from './components/UI/atoms/Input';
import { CheckBox } from './components/UI/atoms/CheckBox';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Selector } from './components/UI/atoms/Selector';
import { Standard } from './components/pages/contract/standard';

function App() {
  const options: RadioType[] = [
    { name: '1', value: '하나' },
    { name: '2', value: '두울' },
    { name: '3', value: '세엣' },
  ];

  const onClickTest = () => {
    console.log('value');
  };

  return (
    <>
      <GlobalStyle />
      <Selector />
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
