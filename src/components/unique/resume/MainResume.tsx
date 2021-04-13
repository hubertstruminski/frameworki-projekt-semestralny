import React, { ReactElement } from 'react';
import {
  Container,
  DetailsContainer,
  ItemContainer,
  MessageContainer,
  TitleContainer
} from '../../../styledHelpers/MainResumeComponents';

interface MainResumeProps {
  commentName: string;
  body: string;
  photoUrl: string;
  username: string | undefined;
  name: string;
  showHamburgerMenu: boolean;
}

const MainResume = (props: MainResumeProps): ReactElement => {
  const { 
    commentName, 
    body, 
    photoUrl, 
    username, 
    name,
    showHamburgerMenu
  } = props;

  const inlineFontStyles = {
    fontSize: showHamburgerMenu ? '2vw' : '0.7vw',
  }

  return (
    <Container>
      <TitleContainer style={{ fontSize: showHamburgerMenu ? '3vw' : '0.95vw' }}>{commentName}</TitleContainer>
      <MessageContainer style={{ fontSize: showHamburgerMenu ? '2.7vw' : '0.85vw' }}>{body}</MessageContainer>
      <DetailsContainer>
        <ItemContainer>
          <img 
            src={photoUrl} 
            alt="" 
            style={{ borderRadius: 15/2, width: 15, height: 15, borderColor: 'green', borderWidth: 1}} 
          />
        </ItemContainer>
        <ItemContainer style={inlineFontStyles}>{username}</ItemContainer>
        <ItemContainer style={{marginTop: -5}}>.</ItemContainer>
        <ItemContainer>
          <img 
            src={process.env.PUBLIC_URL + '/media/icons/entities2.png'} 
            alt=""
            style={{ width: 15, height: 15, marginRight: 5 }}
          />
        </ItemContainer>
        <ItemContainer style={inlineFontStyles}>Corporate</ItemContainer>
        <ItemContainer style={{marginTop: -5}}>.</ItemContainer>
        <ItemContainer style={{fontSize: showHamburgerMenu ? '2vw' : '0.7vw', fontWeight: 400 }}>Updated 3 days ago by {name}</ItemContainer>
      </DetailsContainer>
    </Container>
  );
}

export default MainResume;