import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PublicationDto } from '../../../entities/headerInterfaces/publication';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface PublicationProps {
  publication: PublicationDto;
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const LeftContainer = styled.div`
  flex: 0.1;
  background-color: red;
  height: 100%;
`;

const RightContainer = styled.div`
  flex: 0.8;
  color: ${Colors.profileTextColor};
  font-weight: bold;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemContainer = styled.div`
  margin: 5px;
`;

const PublicationComponent = (props: PublicationProps): ReactElement => {
  const { publication: { body, name, urls } } = props;

  const backgroundImageStyles = { 
    backgroundImage: `url(${urls[0]})`,
    backgroundSize: '100% 100%',
  }
  
  return (
    <Container>
      <LeftContainer style={backgroundImageStyles} />
      <RightContainer>
        <BodyContainer>
          <span>{ body.substr(0, body.length - 10).concat("...") }</span>
        </BodyContainer>
        <BodyDetailsContainer>
          <ItemContainer style={{ color: Colors.subProfileTextColor, fontWeight: 500, fontSize: fontSize[12]}}>7 jan. 2020</ItemContainer>
          <ItemContainer>
            <img src={urls[0]} alt="" style={{ width: 15, height: 15, borderRadius: 15/2}} />
          </ItemContainer>
          <ItemContainer style={{ color: Colors.profileTextColor, fontWeight: 500, fontSize: fontSize[14]}}>{name}</ItemContainer>
        </BodyDetailsContainer>
      </RightContainer>
    </Container>
  );
}

export default PublicationComponent;