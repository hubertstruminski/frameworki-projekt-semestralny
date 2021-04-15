import React from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import { url } from '../../../store/actions/userActions';
import { Colors } from '../../../styledHelpers/Colors';
import SliderPlaceholder from '../sliderPage/SliderPlaceholder';
import Entities2 from '../../../svgs/entities2';
import AbsoluteContainer from '../sliderPage/AbsoluteContainer';
import MatterItem from '../sliderPage/MatterItem';
import Ecosystem from '../../../svgs/ecosystem';
import Comments from '../../../svgs/comments';

interface SliderPageProps {
  showHamburgerMenu: boolean;
}

interface SliderItemState {
  icon: string;
  photoUrl: string;
  title: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
`;

const BottomContainer = styled.div`
  width: 85%;
  background-color: ${Colors.constantPartContainer};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 35px;

`;

const ItemContainer = styled.div`
  width: 25%;
  height: 220px;
  background-color: ${Colors.white};
  margin: 25px;
  border-radius: 10px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  margin-left: 30px;
  color: ${Colors.subProfileTextColor};
  font-size: 1.2vw;
  margin-top: 10px;
  font-weight: 700;
`;

const SliderPage = (props: SliderPageProps) => {
  const location = useLocation<SliderItemState>();
  const { state: { icon, photoUrl, title } } = location;

  return (
    <Container>
      <SliderPlaceholder 
        photoUrl={photoUrl}
        title={title}
      />
      <BottomContainer>
        <LabelContainer>Start working on corporate matters</LabelContainer>
        <Wrapper>
          <MatterItem 
            smallIcon={<Entities2 fill="darkblue" height={70} width={40} />}
            bigIcon={<Entities2 fill="#F4F5FA" height={150} width={150} />}
            firstTitle="Explore your "
            secondTitle="entities"
            body="Take a few minutes to look at the most important elements and specificities of your entities"
          />
          <MatterItem 
            smallIcon={<Ecosystem fill="darkblue" height={70} width={40} />}
            bigIcon={<Ecosystem fill="#F4F5FA" height={150} width={150} />}
            firstTitle="Structure the "
            secondTitle="ownership"
            body="Get a clear view of the ownership by looking at the relations between individuals and entities."
          />
          <MatterItem 
            smallIcon={<Comments fill="darkblue" height={70} width={40} />}
            bigIcon={<Comments fill="#F4F5FA" height={150} width={150} />}
            firstTitle="Define the "
            secondTitle="calendar"
            body="Prepare future events by creating detailed plans around the life of your entity."
          />
        </Wrapper>
      </BottomContainer>
    </Container>
  );
}

export default SliderPage