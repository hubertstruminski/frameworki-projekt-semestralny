import React, { ReactElement } from 'react';
import {
  Container,
  inputStyles
} from '../../../styledHelpers/HeaderInputComponents';

interface HeaderInputProps {

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