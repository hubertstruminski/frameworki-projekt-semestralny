import React, { ReactElement } from 'react';
import { PublicationDto } from '../../../entities/headerInterfaces/publication';
import { Colors } from '../../../styledHelpers/Colors';
import {
  BodyContainer,
  BodyDetailsContainer,
  Container,
  ItemContainer,
  LeftContainer,
  RightContainer
} from '../../../styledHelpers/PublicationComponents';

interface PublicationProps {
  publication: PublicationDto;
  showHamburgerMenu: boolean;
}

const PublicationComponent = (props: PublicationProps): ReactElement => {
  const { publication: { body, name, urls }, showHamburgerMenu } = props;

  const backgroundImageStyles = { 
    backgroundImage: `url(${urls[0]})`,
    backgroundSize: '100% 100%',
    flex: showHamburgerMenu ? 0.2 : 0.1
  }
  
  return (
    <Container>
      <LeftContainer style={backgroundImageStyles} />
      <RightContainer>
        <BodyContainer>
          <span style={{ fontSize: showHamburgerMenu ? '1.4vw' : '0.85vw'}}>{ body.substr(0, body.length - 10).concat("...") }</span>
        </BodyContainer>
        <BodyDetailsContainer>
          <ItemContainer style={{ color: Colors.subProfileTextColor, fontWeight: 500, fontSize: showHamburgerMenu ? '1.7vw' : '0.6vw'}}>7 jan. 2020</ItemContainer>
          <ItemContainer>
            <img src={urls[0]} alt="" style={{ width: 15, height: 15, borderRadius: 15/2}} />
          </ItemContainer>
          <ItemContainer style={{ color: Colors.profileTextColor, fontWeight: 500, fontSize: showHamburgerMenu ? '1.7vw' : '0.6vw'}}>{name}</ItemContainer>
        </BodyDetailsContainer>
      </RightContainer>
    </Container>
  );
}

export default PublicationComponent;