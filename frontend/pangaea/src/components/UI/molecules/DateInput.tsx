import styled from "styled-components";
import { useState } from "react";
import Input from "../atoms/Input";
import InButton from "../atoms/InButton";

import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DateSelector from "./DateSelector";

export function DateInput() {
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => { setIsOpen(isOpen => !isOpen);};
  const handleSelcetedDate = (date : Date) => { 
    setDate(date); 
    setIsOpen(false);
  }
  const convDateToString = (date : Date) => {
    return new Date(+ date + 3240 * 10000).toISOString().split("T")[0];
  }

  return (
    <StyledDateInput>
      <Input width='160px;' value={convDateToString(date)} readOnly />
      <InButton icon={ faCalendar } onClick={handleOnClick}/>
      {isOpen ? <DateSelector selectDate={date} onClick={handleSelcetedDate}/> : null}
    </StyledDateInput>
  )
}

const StyledDateInput = styled.div`
  display: inline-flex;
  position: relative;

  & > input {
    padding-right: 42px;
  }
  
  & > button {
    position: absolute;
    left: calc(100% - 35px);
    top: 2px;
  }
`
