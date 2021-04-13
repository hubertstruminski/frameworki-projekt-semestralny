import React, { ReactElement } from 'react';
import WorkspaceDetails from './WorkspaceDetails';
import {
  BottomContainer,
  Container,
  DetailsContainer,
  IconContainer,
  LeftContainer,
  RightContainer,
  TextDetailContainer,
  TitleContainer,
  TopContainer,
} from '../../../styledHelpers/SliderItemComponents';

interface SliderItemProps {
  photoUrl: string;
  title: string;
  type: string;
  users: number;
  icon: string;
  days: number;
  isRelative: boolean;
  showHamburgerMenu: boolean;
}

const SliderItem = (props: SliderItemProps): ReactElement => {
  const { photoUrl, title, type, users, icon, days, showHamburgerMenu } = props;
  console.log(photoUrl);
  return (
    <Container 
      style={{
        minWidth: showHamburgerMenu ? 100 : 200, 
        width: showHamburgerMenu ? 150 : 300,
        height: showHamburgerMenu ? 100: 200
      }}
    >
      <IconContainer
        style={{
          width: showHamburgerMenu ? 45 : 90,
          height: showHamburgerMenu ? 45 : 90,
          top: showHamburgerMenu ? 30 : 60
        }}
      >
        <img 
          src={process.env.PUBLIC_URL + "/media/icons/entities2.png"} 
          alt="" 
          style={{ 
            width: showHamburgerMenu ? 22.5 : 45, 
            height: showHamburgerMenu ? 30 : 60
          }} 
        />
      </IconContainer>
      <TopContainer 
        style={{ 
          backgroundImage: `url(${photoUrl})`, 
          backgroundSize: '100% 100%',
          height: showHamburgerMenu ? 37.5 : 75
        }} 
      />
      <BottomContainer
        style={{
          height: showHamburgerMenu ? 62.5 : 125
        }}
      >
        <TitleContainer
          style={{
            height: showHamburgerMenu ? 37.5 : 75
          }}
        >
          <LeftContainer />
          <RightContainer
            style={{ fontSize: showHamburgerMenu ? '1.65vw' : '1vw' }}
          >
            { title }
          </RightContainer>
        </TitleContainer>
        <DetailsContainer
          style={{
            height: showHamburgerMenu ? 20 : 50,
            marginLeft: showHamburgerMenu ? 5 : 10
          }}
        >
          <WorkspaceDetails
            photoUrl={photoUrl} 
            type={type}
            users={users}
            icon={icon}
            showHamburgerMenu={showHamburgerMenu}
          />
          <TextDetailContainer style={{ margin: showHamburgerMenu ? 0 : 5, fontSize: showHamburgerMenu ? '1.5vw' : '0.7vw'}}>Last update {days} days ago</TextDetailContainer>
        </DetailsContainer>
      </BottomContainer>
    </Container>
  );
}

export default SliderItem;