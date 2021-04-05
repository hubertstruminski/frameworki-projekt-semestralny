import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import FollowedButton from '../../common/followedButton/FollowedButton';
import Input from '../../common/input/Input';
import MainResume from './MainResume';

interface ResumeViewProps {
 title?: string;
}

const Container = styled.div`
  width: 90%;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
`;

const TitleContainer = styled.div`
  color: ${Colors.profileItemTextColor};
  font-weight: bold;
  font-size: ${fontSize[20]};
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ResumeView = (props: ResumeViewProps): ReactElement => {
  return (
    <Container>
      <TopContainer>
        <TitleContainer>Resume your work</TitleContainer>
        <FeaturesContainer>
          <Input placeholder="Filter by title..." />
          <FollowedButton />
        </FeaturesContainer>
      </TopContainer>
      <MainResume />
    </Container>
  );
}

export default ResumeView;