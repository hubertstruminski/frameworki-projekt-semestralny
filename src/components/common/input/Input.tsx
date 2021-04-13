import React, { ChangeEventHandler, ReactElement } from 'react';
import {
  Container,
  inputStyles
} from '../../../styledHelpers/InputComponents';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps): ReactElement => {
  const { placeholder, value, onChange } = props;
  return (
    <Container>
      <input
        type="text" 
        style={inputStyles}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <img src={process.env.PUBLIC_URL + '/media/icons/search.svg'} alt="" />
    </Container>
  );
}

export default Input;