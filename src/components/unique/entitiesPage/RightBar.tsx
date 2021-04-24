import React, { ReactElement } from 'react';
import {  
  BarContainer,
  Border
} from '../../../styledHelpers/EntitiesPageComponents';
import FollowedButton from '../../common/followedButton/FollowedButton';
import Input from '../../common/input/Input';
import { RightBarProps } from '../../../entities/rightBar';

const RightBar = (props: RightBarProps): ReactElement => {
  const { searchTerm, showHamburgerMenu, setSearchTerm, onChange } = props;
  return (
    <BarContainer>
      <Input 
        placeholder="Search ..." 
        value={searchTerm}
        onChange={onChange}
      />
      <Border style={{ marginRight: 20 }} />
      <FollowedButton 
        isOutline 
        setSearchTerm={setSearchTerm}
        showHamburgerMenu={showHamburgerMenu}
        isDisabled
      />
    </BarContainer>
  );
}

export default RightBar;