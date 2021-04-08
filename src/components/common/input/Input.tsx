import React, { ChangeEventHandler, ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Container = styled.div`
  border-radius: 5px;
  border: 1.5px solid ${Colors.headerInputBorder};
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding: 5px;
  margin-right: 25px;
  background-color: ${Colors.white};
`;

const inputStyles = {
  flex: 1,
  border: 0, 
  outline: 'none',  
  color: Colors.headerInputColor,
  fontWeight: 400,
  padding: 5
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