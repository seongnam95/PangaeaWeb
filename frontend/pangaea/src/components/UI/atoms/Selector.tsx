import Input from './Input';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

interface SelectorProps {}

export function Selector({}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useRef<HTMLUListElement>(document.createElement('ul'));
  useOnClickOutside(optionRef, () => setIsOpen(false), isOpen);

  const handleOnclick = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <StyledSelector className={isOpen ? 'open' : ''} onClick={handleOnclick}>
      {isOpen ? <Options /> : null}
    </StyledSelector>
  );
}

// Options
const Options = () => {
  return (
    <StyledOptions>
      <ul>
        <li>1번 콘텐츠</li>
        <li>2번 콘텐츠</li>
        <li>3번 콘텐츠</li>
      </ul>
    </StyledOptions>
  );
};

const StyledSelector = styled.div`
  position: relative;
  height: 35px;
  width: 120px;
  border: 1px solid var(--border-color-dark);
  border-radius: 3px;
  cursor: pointer;

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
    .nice-select-dropdown {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1) translateY(0);
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
      padding: 8px;

      :hover {
        color: var(--main-color);
        background-color: #f6f6f6;
      }
    }
  }
`;

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

export function useOnClickOutside(
  ref: React.RefObject<ValidRefTarget>,
  handler: (event: MouseEvent | TouchEvent) => void,
  isOpen?: boolean
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (isOpen) {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
