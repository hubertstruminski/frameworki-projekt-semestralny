import React, { ReactElement } from 'react';
import {
  Container,
  DetailsContainer,
  ItemContainer,
  MessageContainer,
  TitleContainer
} from '../../../styledHelpers/MainResumeComponents';
import { BAR_ITEMS_DATA } from '../../../mocks/BarItemMocks';
import BarItem from '../../common/resume/BarItem';
import Entities2 from '../../../svgs/entities2';
import Ecosystem from '../../../svgs/ecosystem';
import Comments from '../../../svgs/comments';
import Bell from '../../../svgs/bell';
import { randomInteger } from '../../../tools/tools';

interface MainResumeProps {
  commentName: string;
  body: string;
  photoUrl: string;
  username: string | undefined;
  name: string;
  showHamburgerMenu: boolean;
  isComponentsBar: boolean;
}

const MainResume = (props: MainResumeProps): ReactElement => {
  const { 
    commentName, 
    body, 
    photoUrl, 
    username, 
    name,
    showHamburgerMenu,
    isComponentsBar
  } = props;

  const inlineFontStyles = {
    fontSize: showHamburgerMenu ? '2vw' : '0.7vw',
  }

  const renderBarItem = () => {
    const index = randomInteger(1, 4);
    switch(index) {
      case 1:
        const barItemElement = BAR_ITEMS_DATA[Math.floor(Math.random() * BAR_ITEMS_DATA.length)];
        const { backgroundColor, color, title } = barItemElement;
        return (
          <BarItem 
            icon={<Entities2 fill={color} />}
            color={color}
            backgroundColor={backgroundColor}
            title={title}
            isMargin={true}
          />
        );
      case 2:
        return (
          <BarItem
            icon={<Comments fill="#555B6F" />}   
            color="#555B6F" 
            backgroundColor="#CCCCCC"
            title="Communities"
          />
        );
      case 3:
        return (
          <BarItem
            icon={<Ecosystem fill="#878C9A" />}  
            color="#878C9A" 
            backgroundColor="#E8E8E8"
            title="POA"
          />
        );
      case 4:
        return (
          <BarItem
            icon={<Bell fill="#858A99" />}   
            color="#858A99" 
            backgroundColor="#FFFFFF"
            title="Survey"
          />
        );
    }
  }
  
  return (
    <Container>
      <TitleContainer style={{ fontSize: showHamburgerMenu ? '3vw' : '0.95vw' }}>{commentName}</TitleContainer>
      <MessageContainer style={{ fontSize: showHamburgerMenu ? '2.7vw' : '0.85vw' }}>{body}</MessageContainer>
      <DetailsContainer>
        { !isComponentsBar ? (
          <React.Fragment>
            <ItemContainer>
              { photoUrl &&
                <img 
                  src={photoUrl} 
                  alt="" 
                  style={{ borderRadius: 15/2, width: 15, height: 15, borderColor: 'green', borderWidth: 1}} 
                />
              }
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
          </React.Fragment>
          ) : (
            renderBarItem()
          )
        }
        <ItemContainer style={{marginTop: -5}}>.</ItemContainer>
        <ItemContainer style={{fontSize: showHamburgerMenu ? '2vw' : '0.7vw', fontWeight: 400 }}>Updated 3 days ago by {name}</ItemContainer>
      </DetailsContainer>
    </Container>
  );
}

export default MainResume;