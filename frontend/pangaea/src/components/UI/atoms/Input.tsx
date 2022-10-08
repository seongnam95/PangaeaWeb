import styled from 'styled-components';
import { FieldHookConfig, useField } from 'formik';

export default function Input(props: FieldHookConfig<string>) {
  const [field] = useField(props);
  return <StyledInput {...field} {...props} />;
}

const StyledInput = styled.input`
  width: ${props => props.width};
  color: var(--font-sub);
  font-size: 14px;
  height: 40px;
  padding-left: 8px;
  border: 1px solid var(--border-color-dark);
  border-radius: 3px;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border-color: var(--main-color);
  }
`;
