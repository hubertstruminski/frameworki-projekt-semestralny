import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface SliderPlaceholderProps {
  photoUrl: string;
  title: string;
}

const TopContainer = styled.div`
  width: 85%;
  background-color: ${Colors.white};
  margin-top: 30px;
  border-radius: 10px;
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 150px;
  background-size: 100% 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* min-height: 100px; */
  padding-bottom: 25px;
  padding-top: 20px;
`;

const LeftContainer = styled.div`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  display: flex;
  /* height: 100px; */
  padding-left: 10px;
  padding-right: 10px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 0.9;
  align-items: flex-start;
  /* height: 100px; */
  color: white;
  flex-direction: column;
  padding-right: 20px;
`;

const InternalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* margin-top: 10px; */
  padding-right: 20px;
  color: ${Colors.black};
  font-size: 1.5vw;
`;

const BodyContainer = styled.div`
  margin-top: 15px;
  margin-right: 15px;
  color: ${Colors.subProfileTextColor};
`;

const SliderPlaceholder = (props: SliderPlaceholderProps) => {
  const { photoUrl, title } = props;
  return (
    <TopContainer>
      <PlaceholderContainer style={{ backgroundImage: `url(${photoUrl})`}} />
      <Wrapper>
        <LeftContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/entities2.svg'} alt="" style={{ height: 70, width: 50}} />
        </LeftContainer>
        <RightContainer>
          <InternalContainer>
            <div style={{ fontSize: '1.25vw'}}>{title}</div>
            <img src={process.env.PUBLIC_URL + '/media/icons/cog.svg'} alt="" />
          </InternalContainer>
          <BodyContainer>
            Workspace purpose and a bit of context. This much needed description is ehere to remind people where they are, if they are new or have poor memory.
          </BodyContainer>
        </RightContainer>
      </Wrapper>
    </TopContainer>
  );
}

export default SliderPlaceholder;