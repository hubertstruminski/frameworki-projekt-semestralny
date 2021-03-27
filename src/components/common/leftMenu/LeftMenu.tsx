import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import ChildElement from './ChildElement';

const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-top: 55px;
`;

const ProfileContainer = styled.div`
  width: 240px;
  height: 250px;
  background-color: white;
  margin-top: 25px;
  border: 1px solid #EBEDF0;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #EBEDF0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  flex: 1;
  height: 100px;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameContainer = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 600;
`;

const JobTitleContainer = styled.div`
  color: ${Colors.subProfileTextColor};
`;

const LeftMenu = (): ReactElement => {
  return (
    <Container>
      <ProfileContainer>
        <TopContainer>
          <NameContainer>Humberta Swift</NameContainer>
          <JobTitleContainer>Job title - Company</JobTitleContainer>
        </TopContainer>
        <BottomContainer>
          <ChildElement 
            title="Your network"
            leftIconPath="/media/icons/network.png"
            rightIconPath="/media/icons/user-plus.svg"
            withRightIcon={true}
          />
          <ChildElement 
            title="Your publications"
            leftIconPath="/media/icons/publications.svg"
            rightIconPath="/media/icons/plus.svg"
            withRightIcon={true}
          />
        </BottomContainer>
      </ProfileContainer>
    </Container>
  );
}

export default LeftMenu;