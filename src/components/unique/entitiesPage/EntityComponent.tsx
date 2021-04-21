import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface EntityComponentProps {
  photoUrl: string;
  title: string;
  body: string;
  isMosaicLayout: boolean;
}

const Container = styled.div`
  width: 23.5%;
  padding: 5px;
  margin: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
  box-shadow: 0px 11px 11px -7px ${Colors.subProfileTextColor};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 5px;
`;

const PhotoContainer = styled.div`
  /* flex: 0.3; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
`;

const RightContainer = styled.div`
  display: flex;
  /* flex: 0.7; */
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;

const TitleSpan = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 900;
  font-size: 1.1vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BodySpan = styled.div`
  color: ${Colors.subProfileTextColor};
  display: flex;
  justify-content: center;
`;


const EntityComponent = (props: EntityComponentProps) => {
  const { photoUrl, title, body, isMosaicLayout } = props;
  return (
    <Container
      style={{
        width: isMosaicLayout ? '23.5%' : '100%',
        height: isMosaicLayout ? undefined : 105,
      }}
    >
      <PhotoContainer
        style={{ 
          flex: isMosaicLayout ? 0.3 : 0.15,
          
        }}
      >
        <img 
          src={photoUrl}
          alt=""
          style={{ 
            width: '100%', 
            borderRadius: 5, 
            height: isMosaicLayout ? undefined : 100,
          }}
        />
      </PhotoContainer>
      <RightContainer
        style={{
          flex: isMosaicLayout ? 0.7 : 0.85
        }}
      >
        <TitleSpan>{title}</TitleSpan>
        <BodySpan
          style={{
            width: isMosaicLayout ? undefined : '100%',
            fontSize: isMosaicLayout ? '0.75vw' : '0.95vw',
            justifyContent: isMosaicLayout ? 'flex-start' : 'center',
            marginTop: isMosaicLayout ? '14%' : undefined
          }}
        >
          {body}
        </BodySpan>
      </RightContainer>
    </Container>
  );
}

export default EntityComponent;