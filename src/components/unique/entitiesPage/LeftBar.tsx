import React, { ReactElement } from 'react';
import {
  DotsContainer
} from '../../../styledHelpers/LeftBarComponents';
import RigidButton from './RigidButton';
import {  
  BarContainer,
  Border
} from '../../../styledHelpers/EntitiesPageComponents';
import FilterButton from '../../common/entities/FilterButton';
import { FullScreenHandle } from 'react-full-screen';

interface LeftBarProps {
  handle: FullScreenHandle;
  setIsAscendingOrder: Function;
  isAscendingOrder: boolean;
  setIsFiltersOpened: Function;
  isFiltersOpened: boolean;
}

const LeftBar = (props: LeftBarProps): ReactElement => {
  const { 
    handle, 
    setIsAscendingOrder, 
    isAscendingOrder,
    setIsFiltersOpened,
    isFiltersOpened 
  } = props;

  const shareUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Skopiowano adres strony internetowej do schowka!");
  }
  
  return (
    <BarContainer>
      <RigidButton />
      <DotsContainer>...</DotsContainer>
      <Border />
      <FilterButton 
        text="Sort" 
        iconUrl="/media/icons/sort.svg" 
        appendText
        onClick={() => setIsAscendingOrder(!isAscendingOrder)} 
      />
      <FilterButton 
        text="Filters" 
        iconUrl="/media/icons/filter.svg" 
        appendText 
        onClick={() => setIsFiltersOpened(!isFiltersOpened)}
      />
      <Border />
      <FilterButton 
        isMarginLeft 
        iconUrl="/media/icons/full-screen.svg"
        onClick={handle.active ? handle.exit : handle.enter} 
      />
      <Border />
      <FilterButton 
        text="Share" 
        iconUrl="/media/icons/share.svg" 
        appendText 
        onClick={shareUrl}
      />
    </BarContainer>
  );
}

export default LeftBar;