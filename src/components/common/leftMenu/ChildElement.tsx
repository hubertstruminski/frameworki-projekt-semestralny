import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  TitleContainer,
  RightIconContainer
} from '../../../styledHelpers/ChildElementComponents';
import { ChildElementProps } from '../../../entities/childElement';

const ChildElement = (props: ChildElementProps): ReactElement => {
  const { 
    leftIconPath, 
    title, 
    rightIconPath, 
    withRightIcon,
    marginBottom,
    navigateTo
  } = props;

  return (
    <Link to={navigateTo} style={{ textDecoration: 'none' }}>
      <Container style={{ marginBottom: marginBottom ? marginBottom : 0}}>
        <img src={process.env.PUBLIC_URL + leftIconPath} alt="" />
        <TitleContainer>{title}</TitleContainer>
        { withRightIcon ? (
            <RightIconContainer>
              <img src={process.env.PUBLIC_URL + rightIconPath} alt="" />
            </RightIconContainer>
          ) : null
        }
      </Container>
    </Link>
    
  );
}

export default ChildElement;