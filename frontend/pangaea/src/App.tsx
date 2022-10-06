import GlobalStyle from './Globalstyles';
import { DateInput } from './components/UI/molecules/DateInput';
import { Radio, RadioType } from './components/UI/atoms/Radio';
import Input from './components/UI/atoms/Input';
import { CheckBox } from './components/UI/atoms/CheckBox';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

function App() {
  const options: RadioType[] = [
    { name: '1', value: '하나' },
    { name: '2', value: '두울' },
    { name: '3', value: '세엣' },
  ];

  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <Radio options={options} />
        <DateInput />
        <Input placeholder="예)" />
        <CheckBox id={'asd'} value={options[0]} />
      </GridContainer>
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
