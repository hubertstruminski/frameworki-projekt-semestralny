import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MainViewElement from './MainViewElement';

interface PublicationListProps {

}

const Container = styled.div`
  width: 90%;
  height: 315px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 35%;
  background-color: red;
  /* padding-bottom: 20px; */
  /* margin-bottom: 30px; */
  padding-bottom: 25px;
  /* padding-left: 10px; */
  /* margin-left: 10px; */
  /* padding-left: 15px; */
  /* padding-right: 15px; */
`;

const RightContainer = styled.div`
  width: 65%;
  background-color: yellow;
`;

const PublicationList = (props: PublicationListProps): ReactElement => {
  return (
    <Container>
      <LeftContainer>
        <MainViewElement 
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum dolor, ullamcorper ut urna in, fermentum sagittis purus. Pellentesque ut ultrices nibh. "
          userName="John Doe"
        />
      </LeftContainer>
      <RightContainer>

      </RightContainer>
    </Container>
  );
}

export default PublicationList;