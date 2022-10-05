import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";


export type OptionsType = {
  value: number,
  label: any,
}

interface LabelSelectPorps {
  onChange?: (v : any) => void,
  value?: OptionsType,
  options: OptionsType[],
}

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

export function LabelSelect({options, value, onChange}: LabelSelectPorps) {
  const optionRef = useRef();

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  // value 값 변경 시 'currentValue' 적용
  useEffect(() => { setCurrentValue(value); }, [value]);

  useOnClickOutside(optionRef, () => setIsOpen(false))

  const handleOnClick = () => { setIsOpen(isOpen => !isOpen);};

  const handleValueChange = (value:OptionsType) => {
    setCurrentValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  const getItemIndex = (item : OptionsType):number => {
    var index = options.findIndex(v => v.value === item.value)
    return index
  }

  const Options = () => {
    return (
      <StyledOptions ref={optionRef} selectIdx={getItemIndex(currentValue)+1}>
        {options.map((value) => 
          <li key={value.value} onClick={()=>{ handleValueChange(value); }}>
            {value.label}
          </li> )}
      </StyledOptions>
    )
  }

  return (
    <>
      <StyledLabelSelect onClick={handleOnClick}>
        <label>{currentValue.label}</label>
        {isOpen ? <Options/> : null}
      </StyledLabelSelect>
    </>
  )
}

// module

export function useOnClickOutside(ref: React.RefObject<ValidRefTarget>, handler: (event: MouseEvent | TouchEvent)=>void ) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        if (!ref.current || ref.current.contains(event.target)) { return }
        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },

    [ref, handler]
  )
}

// styled

const StyledLabelSelect = styled.button`
  display: inline-flex;
  position: relative;
  padding: 0.5em;
  height: 2.3em;
  background-color: transparent;
  border: none;
  align-items: center;

  & > label {
    color: var(--font-sub);
    font-weight: 700;
    font-size: 18px;
  }

  label:hover{
    color: var(--main-color);
  }
`

const StyledOptions = styled.ul<{selectIdx?:number}>`
  position: absolute;
  max-height: 210px;
  overflow-y: scroll;
  top: 35px;
  left: -3px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 8px 5px rgba(149, 157, 165, 0.12);

  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  & > li {
    width: 100%;
    font-size: 15px;
    padding: 5px 10px 5px 10px;
    color: var(--font-sub);
    white-space: nowrap;
    
    :nth-child(${(props) => props.selectIdx}) {
      font-weight: 700;
    }

    &:hover {
      color: var(--main-color);
      background-color: var(--hover-background);
    }
  }
`