import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface EntityComponentProps {
  photoUrl: string;
  title: string;
  body: string;
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
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.7;
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
  font-size: 0.75vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14%;
`;


const EntityComponent = (props: EntityComponentProps) => {
  const { photoUrl, title, body } = props;
  return (
    <Container>
      <PhotoContainer>
        <img 
          src={photoUrl}
          alt=""
          style={{ width: '100%', borderRadius: 5 }}
        />
      </PhotoContainer>
      <RightContainer>
        <TitleSpan>{title}</TitleSpan>
        <BodySpan>{body}</BodySpan>
      </RightContainer>
    </Container>
  );
}

export default EntityComponent;