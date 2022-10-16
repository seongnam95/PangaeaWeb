import { useState } from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
  value: {
    name: string;
    value: string;
  };
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function CheckBox({ value, id, checked, onChange }: CheckBoxProps) {
  const [Checked, setChecked] = useState(checked || false);

  const handleOnChange = (e: any) => {
    setChecked(!Checked);
    console.log(Checked);
    if (onChange) onChange(Checked);
  };

  return (
    <StyledCheckBox>
      <input
        id={id}
        type="checkbox"
        checked={Checked}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>
        <span>
          <svg width="12px" height="10px" viewBox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{value.value}</span>
      </label>
    </StyledCheckBox>
  );
}

const StyledCheckBox = styled.fieldset`
  display: inline-flex;

  label {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  input {
    display: none;
    &:checked + label {
      span {
        &:first-child {
          background: #5d9bfb;
          border-color: #5d9bfb;
          animation: wave 0.4s ease;
        }
        svg {
          stroke-dashoffset: 0;
        }
        &:before {
          transform: scale(3.5);
          opacity: 0;
          transition: all 0.6s ease;
        }
      }
    }
  }

  span {
    display: inline-block;
    vertical-align: middle;

    &:first-child {
      position: relative;
      width: 18px;
      height: 18px;
      border-radius: 3px;
      transform: scale(1);
      vertical-align: middle;
      border: 1px solid var(--border-color);
      transition: all 0.2s ease;
      svg {
        position: absolute;
        top: 3px;
        left: 2px;
        fill: none;
        stroke: #ffffff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translate3d(0, 0, 0);
      }
    }
    &:last-child {
      padding-left: 8px;
      color: var(--font-sub);
      font-size: 14px;
    }
  }
`;
