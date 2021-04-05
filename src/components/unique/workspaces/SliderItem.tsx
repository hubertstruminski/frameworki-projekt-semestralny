import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import WorkspaceDetails from './WorkspaceDetails';

interface SliderItemProps {
  photoUrl: string;
  title: string;
  type: string;
  users: number;
  icon: string;
  days: number;
}

const Container = styled.div`
  /* width: 20%; */
  height: 200px;
  background-color: ${Colors.white};
  margin-right: 10px;
  min-width: 200px;
  position: relative;
  z-index: 0;
  width: 300px;
  /* width: 20%; */
`;

const TopContainer = styled.div`
  width: 100%;
  height: 75px;
  /* position: absolute; */
  /* z-index: 0; */
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 125px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  color: ${Colors.workspaceTitleColor};
  font-weight: bold;
  margin-left: 20px;
`;

const LeftContainer = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
`;

const RightContainer = styled.div`
  flex: 0.7;
  font-size: 1vw;
  padding: 10px;
`;

const IconContainer = styled.div`
  width: 90px;
  height: 90px;
  top: 60px;
  box-shadow: 1.5px 1.5px 4px 1px ${Colors.headerShadow};
  display: flex;
  justify-content: center;
  align-items: center; 
  position: absolute;
  z-index: 1000;
  background-color: white;
  left: 10px;
`;

const DetailsContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const TextDetailContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  font-size: ${fontSize[12]};
`;

const SliderItem = (props: SliderItemProps): ReactElement => {
  const { photoUrl, title, type, users, icon, days } = props;
  console.log(photoUrl);
  return (
    <Container>
      <IconContainer>
        <img src={process.env.PUBLIC_URL + "/media/icons/entities2.png"} alt="" style={{ width: 45, height: 60}} />
      </IconContainer>
      <TopContainer style={{ backgroundImage: `url(${photoUrl})`, backgroundSize: '100% 100%'}} />
      <BottomContainer>
        <TitleContainer>
          <LeftContainer />
          <RightContainer>
            { title }
          </RightContainer>
        </TitleContainer>
        <DetailsContainer>
          <WorkspaceDetails
            photoUrl={photoUrl} 
            type={type}
            users={users}
            icon={icon}
          />
          <TextDetailContainer style={{ margin: 5}}>Last update {days} days ago</TextDetailContainer>
        </DetailsContainer>
      </BottomContainer>
    </Container>
  );
}

export default SliderItem;