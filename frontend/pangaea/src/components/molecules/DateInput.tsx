import styled from 'styled-components';
import { useState } from 'react';
import Input from '../atoms/Input';
import InButton from '../atoms/InButton';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import DateSelector from '../atoms/DateSelector';

export function DateInput() {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(isOpen => !isOpen);
  };
  const handleSelectedDate = (date: Date) => {
    setDate(date);
    setIsOpen(false);
  };
  const convDateToString = (date: Date) => {
    return new Date(+date + 3240 * 10000).toISOString().split('T')[0];
  };

  // ! INPUT name 확인 할 것
  return (
    <StyledDateInput>
      <Input
        name="input"
        onClick={handleOnClick}
        width="160px;"
        value={convDateToString(date)}
        readOnly
      />
      <InButton icon={faCalendar} onClick={handleOnClick} />
      {isOpen ? (
        <DateSelector selectDate={date} onClick={handleSelectedDate} />
      ) : null}
    </StyledDateInput>
  );
}

const StyledDateInput = styled.div`
  position: relative;
  height: 40px;
  width: 160px;

  & > button {
    position: absolute;
    left: calc(100% - 37px);
    top: 2px;
  }
`;
