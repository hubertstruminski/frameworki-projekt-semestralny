import React, { ReactElement } from 'react';
import {
  Container
} from '../../../styledHelpers/SingleButtonComponents';
import { SingleButtonProps } from '../../../entities/singleButton';

const SingleButton = (props: SingleButtonProps): ReactElement => {
  const { iconUrl, title, isRotatedIcon } = props;

  const buttonIconStyles = {
    width: 20,
    height: 20,
    marginRight: 5,
    transform: isRotatedIcon ? 'rotate(45deg)' : undefined
  }

  return (
    <Container>
      <img 
        src={process.env.PUBLIC_URL + iconUrl} 
        alt=""
        style={buttonIconStyles}
      />
      <div>{title ? title : ''}</div>
    </Container>
  );
}

export default SingleButton;