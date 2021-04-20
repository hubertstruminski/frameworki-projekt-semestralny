import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import RigidButton from './RigidButton';
import {  
  BarContainer,
  Border
} from '../../../styledHelpers/EntitiesPageComponents';
import FilterButton from './FilterButton';

interface LeftBarProps {

}

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

const LeftBar = (props: LeftBarProps): ReactElement => {
  return (
    <BarContainer>
      <RigidButton />
      <DotsContainer>...</DotsContainer>
      <Border />
      <FilterButton text="Sort" iconUrl="/media/icons/sort.svg" appendText />
      <FilterButton text="Filters" iconUrl="/media/icons/filter.svg" appendText />
      <Border />
      <FilterButton isMarginLeft iconUrl="/media/icons/full-screen.svg" />
      <Border />
      <FilterButton text="Share" iconUrl="/media/icons/share.svg" appendText />
    </BarContainer>
  );
}

export default LeftBar;