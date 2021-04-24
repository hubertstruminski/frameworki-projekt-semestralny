import React from 'react';
import { Container } from '../../../styledHelpers/ButtonsContainerComponents';
import SingleButton from '../../common/profile/SingleButton';

interface ButtonsContainerProps {

}



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