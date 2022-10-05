import { useState, useMemo } from 'react';
import InButton from '../atoms/InButton';
import styled, { css } from 'styled-components';

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { LabelSelect, OptionsType } from '../atoms/LabelSelect';

import { format, getMonth, getYear, getDate } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, addMonths, subMonths } from 'date-fns';


interface DateSelectorProps {
  selectDate?: Date,
  onClick?: (date : Date) => void,
}

export default function DateSelector({selectDate, onClick} : DateSelectorProps) {
  const [currentDate, setCurrentDate] = useState(selectDate || new Date);

  const years = useMemo(() => {
    var currentYear = new Date().getFullYear()
    var min = currentYear - 80
    var max = currentYear + 10
    var y = [];
    for (var i = max; i >= min; i--) { y.push({value: i, label: i + "년"}) };
    return y;
  }, []);

  const months = useMemo(() => {
    var m = [];
    for (var i=1; i <= 12; i++) { m.push({value: i, label: i + "월"}); }
    return m;
  }, []);

  const weeks = useMemo(()=> {
    return ['일', '월', '화', '수', '목', '금', '토'];
  }, [])

  const changeYear = (year :OptionsType) => {
    let date = currentDate;
    let month = getMonth(date);
    let day = getDate(date)

    setCurrentDate(new Date(year.value, month, day));
  }

  const changeMonth = (month :OptionsType) => {
    let date = currentDate;
    let year = getYear(date);
    let day = getDate(date)

    setCurrentDate(new Date(year, month.value-1, day));
  }

  const handlePrveClick = () => {
    setCurrentDate(subMonths(currentDate, 1));
  }

  const handleNextClick = () => {
    setCurrentDate(addMonths(currentDate, 1));
  }

  const handleDayClick = (date:Date) => {
    if (onClick) onClick(date)
  }

  return (
    <StyledDateSelector>
      <StyledDateHeader>
        <InButton onClick={handlePrveClick} icon={faAngleLeft}/>
        <div style={{display: 'flex', alignItems:'center'}}>
          <LabelSelect 
            onChange={changeYear}
            options={years}
            value={years.find((v)=>{return v.value === getYear(currentDate)})} />
          <LabelSelect 
            onChange={changeMonth}
            options={months}
            value={months.find((v)=>{return v.value === getMonth(currentDate) + 1})} />
        </div>
        <InButton onClick={handleNextClick} icon={faAngleRight}/>
      </StyledDateHeader>
      <StyledDateContent>
        <div style={{display: 'flex'}}>
          {weeks.map((value, idx) => 
            <StyledDateCell key={idx} dateType='week'>{value}</StyledDateCell>
          )}
        </div>
        <RenderCells
            currentDate={currentDate}
            onDateClick={handleDayClick}
        />
      </StyledDateContent>
    </StyledDateSelector>
  );
}

interface daysProps {
  currentDate: Date,
  onDateClick: (date : Date) => void,
}

const RenderCells = ({currentDate, onDateClick}:daysProps) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i=0; i<7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      const setType = ():string => {
        if (!isSameMonth(day, monthStart)) return 'disabled'
        else if (isSameDay(day, currentDate)) return 'selected'
        else if (format(currentDate, 'M') !== format(day, 'M')) return 'not-valid'
      }

      days.push (
        <StyledDateCell key={formattedDate} dateType={setType()} onClick={()=>onDateClick(cloneDay)}>
          {formattedDate}
        </StyledDateCell>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div key={day.toDateString()} className="row">
        {days}
      </div>
    )
    days = [];
  }

  return <StyledDateContent>{rows}</StyledDateContent>;
}

// styleds

const StyledDateSelector = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  display: inline-block;
  padding: 1em;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  box-shadow: 5px 5px 8px 8px rgba(149, 157, 165, 0.12);
`

const StyledDateCell = styled.div<{dateType : string}>`
  display: flex;
  width: 40px;
  height: 35px;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.dateType === 'week' ? 'context-menu' : 'pointer')};

  &:hover {
    font-weight: 700;
    color: var(--main-color);
  }

  ${(props) =>
    props.dateType === 'selected' &&
    css`
      font-weight: 700;
      color: var(--main-color);  
  `}

  ${(props) =>
    props.dateType === 'disabled' &&
    css`
      color: var(--font-hint);
  `}

  ${(props) =>
    props.dateType === 'week' &&
    css`
      color: var(--font-hint);
      &:hover {
        font-weight: 400;
        color: var(--font-hint);
      }
  `}
`

const StyledDateContent = styled.div`
  display: block;
  margin-top: 0.5em;

  .row {
    display: flex;
    
    .cell {
      display: flex;
      width: 40px;
      height: 35px;
      align-items: center;
      cursor: pointer;
      
      & > span {
        width: 100%;
        text-align: center;
      }

      &:hover{
        font-weight: 700;
        color: var(--main-color);
      }
    }
  }

  .selected {
    font-weight: 700;
    color: var(--main-color);
  }

  .disabled {
    color: var(--font-hint);
  }
`

const StyledDateHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
`