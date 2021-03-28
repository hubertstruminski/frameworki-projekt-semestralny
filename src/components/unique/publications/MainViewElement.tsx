import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface MainViewElementProps {
  userName?: string;
  userPhotoUrl?: string;
  body?: string;
  backgroundImageUrl?: string
}

const Container = styled.div`
  height: 100%;
  /* background-image: url(${(props: MainViewElementProps) => props.backgroundImageUrl}); */
  align-items: flex-start;
  justify-content: flex-end;
  display: flex;
  /* background-color: green; */
  padding-left: 15px;
  padding-right: 50px;
  flex-direction: column;
`;

const BodySpan = styled.span`
  color: ${Colors.white};
  font-size: ${fontSize[16]};
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DetailsSpan = styled.span`
  color: ${Colors.white};
  font-size: ${fontSize[14]};
  margin-right: 10px;
`;

const imgStyles = {
  width: 15, 
  height: 15, 
  borderRadius: 15/2,
  marginRight: 10
}

const MainViewElement = (props: MainViewElementProps): ReactElement => {
  const { 
    userName, 
    userPhotoUrl, 
    body,
    backgroundImageUrl
  } = props;
  
  return (
    <Container backgroundImageUrl={backgroundImageUrl}>
      <BodySpan>{body}</BodySpan>
      <DetailsContainer>
        <DetailsSpan>7 Jan 2020</DetailsSpan>
        <img src={userPhotoUrl} alt="" style={imgStyles} />
        <DetailsSpan>{userName}</DetailsSpan>
      </DetailsContainer>
    </Container>
  );
}

export default MainViewElement;