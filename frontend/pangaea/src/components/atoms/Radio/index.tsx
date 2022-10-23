import { useState } from "react";
import styled from "styled-components";


export type RadioType = {
  name: string,
  value: string,
}

interface RadioProps {
  options: RadioType[],
  value?: RadioType,
  id?: string,
}

export function Radio({ options, value }: RadioProps) {
  const [currentValue, setCurrentValue] = useState(value || options[0]);

  const handleClick = (e: any) => {
    let selectedOption = { name: e.target.name, value: e.target.value }
    setCurrentValue(selectedOption);
    console.log('랜더')
  };

  return (
    <RadioGroup>
      {options.map((option) =>
        <StyledRadioButton key={option.name}>
          <input
            type='radio'
            name={option.name}
            checked={option.name === currentValue.name}
            onChange={handleClick}
            value={option.value} />
          <span>{option.value}</span>
        </StyledRadioButton>
      )}
    </RadioGroup>
  ) 
}

// styled

const RadioGroup = styled.fieldset<{ display?: string }>`
  display: ${(props) => (props.display || 'inline-flex')};
  & > div {
    padding: 0.2em;
  }
`

const StyledRadioButton = styled.label`
  --radio-size: 17px;
  --radio-border: #D1D7E3;
  --radio-active: #5D9BFB;

  margin: 16px 0;
  display: block;
  cursor: pointer;
  margin-right: 25px;
  
  -webkit-user-select: none;
  user-select: none;

  input {
    display: none;

    & + span {
      color: var(--font-sub);
      font-size: 14px;
      line-height: var(--radio-size);
      height: var(--radio-size);
      padding-left: calc(var(--radio-size) + 8px);
      display: block;
      position: relative;

      &:before,
      &:after {
        content: '';
        width: var(--radio-size);
        height: var(--radio-size);
        display: block;
        border-radius: 50%;
        left: 0;
        top: 0;
        position: absolute;
      }
      &:before {
        background: var(--radio-border);
        transition: background-color .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
      }
      &:after {
        background: #fff;
        transform: scale(.78);
        transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
      }
    }
    &:checked + span {
      &:before {
        transform: scale(1.04);
        background: var(--radio-active);
      }
      &:after {
        transform: scale(.4);
        transition: transform .3s ease;
      }
    }
  }
  &:hover {
    input {
      & + span {
        &:before {
          transform: scale(.92);
        }
        &:after {
          transform: scale(.74);
        }
      }
      &:checked + span {
        &:after {
          transform: scale(.4);
        }
      }
    }
  }
`