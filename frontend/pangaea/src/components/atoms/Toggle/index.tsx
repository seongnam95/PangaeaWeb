import { useState } from 'react';
import styled, { css } from 'styled-components';

export function Toggle() {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle(v => !v);
  };
  return (
    <>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
      <h3>Toggle Switch {!toggle ? 'OFF' : 'ON'}</h3>
    </>
  );
}

const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${props => (!props.toggle ? 'none' : 'rgb(51,30,190)')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div<{ toggle: boolean }>`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${props =>
    props.toggle &&
    css`
      transform: translate(80px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
