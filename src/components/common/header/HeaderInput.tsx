import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface HeaderInputProps {

}

const Container = styled.div`
  width: 450px;
  height: 25px;
  border-radius: 5px;
  border: 1.5px solid ${Colors.headerInputBorder};
  display: flex;
  flex-direction: row;
  padding: 7.5px;
`;

const inputStyles = {
  flex: 1,
  border: 0, 
  fontSize: 17, 
  outline: 'none',  
  color: Colors.headerInputColor,
  fontWeight: 400 
}

const HeaderInput = (props: HeaderInputProps): ReactElement => {
  return (
    <Container>
      <input
        id="searchLegalclusterInput" 
        type="text" 
        style={inputStyles}
        placeholder="Search Legalcluster"
      />
      <img src={process.env.PUBLIC_URL + '/media/icons/search.svg'} alt="" />
    </Container>
  );
}

export default HeaderInput;