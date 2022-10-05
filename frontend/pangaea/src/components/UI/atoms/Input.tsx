import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => (props.width)};
  color: var(--font-sub);
  font-size: 14px;
  height: 40px;
  padding-left: 8px;
  border: 1px solid var(--border-color-dark);
  border-radius: 3px;
  outline: none;
  transition: border .3s ease;

  &:focus {
    border-color: var(--main-color);
  }
`;

export default StyledInput;