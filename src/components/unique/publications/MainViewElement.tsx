import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface MainViewElementProps {
  userName?: string;
  userPhotoUrl?: string;
  body?: string;
  backgroundImageUrl?: string;
  showHamburgerMenu?: boolean;
}

const Container = styled.div`
  height: 100%;
  background-image: url(${(props: MainViewElementProps) => props.backgroundImageUrl});
  background-size: 100% 100%;
  align-items: flex-start;
  justify-content: flex-end;
  display: flex;
  padding-left: 15px;
  padding-right: 50px;
  flex-direction: column;
  /* margin-bottom: 25px; */
`;

const BodySpan = styled.span`
  color: ${Colors.white};
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
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
    backgroundImageUrl,
    showHamburgerMenu
  } = props;
  
  return (
    <Container backgroundImageUrl={backgroundImageUrl} style={{paddingTop: showHamburgerMenu ? 10 : 0}} >
      <div style={{ marginBottom: 25}}>
      <BodySpan style={{ fontSize: showHamburgerMenu ? '1.7vw' : '1vw'}}>{body}</BodySpan>
      <DetailsContainer>
        <DetailsSpan style={{ fontSize: showHamburgerMenu ? '1.4vw' : '0.7vw'}}>7 Jan 2020</DetailsSpan>
        <img src={userPhotoUrl} alt="" style={imgStyles} />
        <DetailsSpan style={{ fontSize: showHamburgerMenu ? '1.4vw' : '0.7vw'}}>{userName}</DetailsSpan>
      </DetailsContainer>
      </div>
    </Container>
  );
}

export default MainViewElement;