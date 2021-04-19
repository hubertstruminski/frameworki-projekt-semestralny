import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import FilterButton from '../entitiesPage/FilterButton';
import MosaicButton from '../entitiesPage/MosaicButton';
import RigidButton from '../entitiesPage/RigidButton';
import SwitchButton from '../entitiesPage/SwitchButton';

interface EntitiesPageProps {
  showHamburgerMenu: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  width: 90%;
  background-color: ${Colors.white};
  margin-top: 30px;
`;

const TopBarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
  font-weight: 700;
  font-size: 1vw;
`;

const BottomBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  color: ${Colors.black};
  font-size: 1.5vw;
  font-weight: 900;
  margin-top: -15px;
`;

const Border = styled.div`
  border-right: 1px solid ${Colors.subProfileTextColor};
  width: 1px;
  height: 25px;
`;



const EntititiesPage = (props: EntitiesPageProps): ReactElement => {
  const { showHamburgerMenu } = props;
  return (
    <Container>
      <Wrapper>
        { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
        <TopBarContainer>
          <LabelContainer>
            <span style={{ marginRight: 10 }}>Entities</span>
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/cog.svg'}
              alt=""
              style={{ width: 12.5, height: 12.5, marginTop: -5 }}
            />
          </LabelContainer>
          <SwitchButton />
        </TopBarContainer>
        <BottomBarContainer>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <RigidButton />
            <DotsContainer>...</DotsContainer>
            <Border />
            <FilterButton text="Sort" iconUrl="/media/icons/sort.svg" appendText />
            <FilterButton text="Filters" iconUrl="/media/icons/filter.svg" appendText />
            <Border />
            <FilterButton isMarginLeft iconUrl="/media/icons/full-screen.svg" />
            <Border />
            <FilterButton text="Share" iconUrl="/media/icons/share.svg" appendText />
          </div>
        </BottomBarContainer>
      </Wrapper>
    </Container>
  );
}

export default EntititiesPage;