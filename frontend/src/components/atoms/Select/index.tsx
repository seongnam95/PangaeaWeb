import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { FieldProps } from 'formik';

export type OptionType = {
  value: string;
  label: any;
};

interface SelectProps extends FieldProps {
  options: OptionType[];
  placeholder?: string;
}

export function Select({ field, form, options, placeholder }: SelectProps) {
  const parentRef = useRef();
  const optionRef = useRef<HTMLUListElement>(document.createElement('ul'));

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<OptionType>({
    value: null,
    label: '(선택)',
  });

  useEffect(() => {
    if (!placeholder) setCurrentValue({ value: null, label: '(선택)' });
    else setCurrentValue({ value: placeholder, label: placeholder });
  }, [placeholder]);

  // Event Handler
  const handleOnclick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const handleOnChange = (value: OptionType) => {
    setCurrentValue(value);
    form.setFieldValue(field.name, value);
  };

  // outside clicked
  useOnClickOutside(parentRef, optionRef, () => setIsOpen(false), isOpen);

  return (
    <>
      <StyledSelect
        ref={parentRef}
        className={isOpen ? 'open' : ''}
        onClick={handleOnclick}
      >
        <div className={'control-label'}>{currentValue.label}</div>
        {isOpen ? (
          <StyledOptions>
            <ul>
              {options.map((option, idx) => (
                <li key={idx} onClick={() => handleOnChange(option)}>
                  {option.label}
                </li>
              ))}
            </ul>
          </StyledOptions>
        ) : null}
      </StyledSelect>
    </>
  );
}

// Options

interface OptionProps {
  options: OptionType[];
  onChange?: (value: any) => void;
}

const Options = ({ options, onChange }: OptionProps) => {
  const handleOnClick = (value: OptionType) => {
    if (onChange) onChange(value);
  };

  return (
    <StyledOptions>
      <ul>
        {options.map(option => (
          <li key={option.value} onClick={() => handleOnClick(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </StyledOptions>
  );
};

// out side clicked module

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

export function useOnClickOutside(
  parent: React.RefObject<ValidRefTarget>,
  ref: React.RefObject<ValidRefTarget>,
  handler: (event: MouseEvent | TouchEvent) => void,
  isOpen?: boolean
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } else if (!ref.current || parent.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// styled

const StyledSelect = styled.div`
  position: relative;
  display: inline-flex;
  height: 35px;
  min-width: 80px;
  border: 1px solid var(--border-color-dark);
  border-radius: 3px;
  align-items: center;
  transition: border 0.3s ease;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;

  &:hover {
    border-color: var(--main-color);
  }

  .control-label {
    position: absolute;
    overflow: hidden;
    max-width: calc(100% - 35px);
    left: 7px;
    color: var(--font-sub);
    font-size: 14px;
  }

  &:after {
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
    content: '';
    display: block;
    height: 5px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: 50%;
    transform-origin: 66% 66%;
    transform: rotate(45deg);
    transition: all 0.15s ease-in-out;
    width: 5px;
  }

  &.open {
    @extend :active;
    &:after {
      transform: rotate(-135deg);
    }
  }
`;

const StyledOptions = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  border: 1px solid var(--border-color-dark);
  border-radius: 3px;
  box-shadow: 0px 0px 8px 5px rgba(149, 157, 165, 0.12);
  overflow: hidden;

  ul {
    li {
      font-size: 14px;
      color: var(--font-sub);
      padding: 8px 10px 8px 10px;
      white-space: nowrap;

      :hover {
        color: var(--main-color);
        background-color: #f6f6f6;
      }
    }
  }
`;
