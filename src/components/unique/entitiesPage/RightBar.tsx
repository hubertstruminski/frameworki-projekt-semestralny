import React, { ChangeEventHandler, ReactElement } from 'react';
import {  
  BarContainer,
  Border
} from '../../../styledHelpers/EntitiesPageComponents';
import FollowedButton from '../../common/followedButton/FollowedButton';
import Input from '../../common/input/Input';

interface RightBarProps {
  searchTerm: string;
  showHamburgerMenu: boolean;
  setSearchTerm: Function;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const RightBar = (props: RightBarProps): ReactElement => {
  const { searchTerm, showHamburgerMenu, setSearchTerm, onChange } = props;
  return (
    <BarContainer>
      <Input 
        placeholder="Search ..." 
        value={searchTerm}
        onChange={onChange}
      />
      <Border />
      <FollowedButton 
        isOutline 
        setSearchTerm={setSearchTerm}
        showHamburgerMenu={showHamburgerMenu}
      />
    </BarContainer>
  );
}

export default RightBar;