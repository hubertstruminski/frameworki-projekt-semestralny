import React from 'react';
import styled from 'styled-components';
import SingleButton from '../profilePage/SingleButton';

interface ButtonsContainerProps {

}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const ButtonsContainer = (props: ButtonsContainerProps) => {
  return (
    <Container>
      <SingleButton 
        iconUrl="/media/icons/comments.svg"
        title="Message"
      />
      <SingleButton 
        iconUrl="/media/icons/ecosystem.svg"
        title="Create a request"
      />
      <SingleButton 
        iconUrl="/media/icons/entities2.svg"
        title="Add to a cluster"
      />
      <SingleButton 
        iconUrl="/media/icons/plus.svg"
        isRotatedIcon 
      />
    </Container>
  );
}

export default ButtonsContainer;