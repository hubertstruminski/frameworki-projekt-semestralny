import React from 'react';
import {
  BodySpan,
  Container,
  PhotoContainer,
  RightContainer,
  TitleSpan
} from '../../../styledHelpers/EntityComponentComponents';

interface EntityComponentProps {
  photoUrl: string;
  title: string;
  body: string;
  isMosaicLayout: boolean;
}




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