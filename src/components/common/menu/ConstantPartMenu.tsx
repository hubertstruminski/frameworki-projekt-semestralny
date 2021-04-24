import React, { ReactElement, ReactNode } from 'react';
import { LineBreakContainer } from '../../../styledHelpers/ConstantPartMenuComponents';
import MenuItem from './MenuItem';
import ProfileItem from './ProfileItem';
import { 
  TypeContainer
} from '../../../styledHelpers/DropdownMenuComponents';
import { 
  CONSTANT_MENU_ITEMS,
  IMenuItem, 
} from '../../../mocks/menuMocks';
import { ConstantPartMenuProps } from '../../../entities/constantPartMenu';

const ConstantPartMenu = (props: ConstantPartMenuProps): ReactElement => {
  const { name, url, setDropdownTitle, setDropdownUrl } = props;

  const renderConstantItems = (): ReactNode => {
    return CONSTANT_MENU_ITEMS.map((item: IMenuItem, index: number): ReactNode => {
      const { iconUrl, routeUrl, title } = item;
      return (
        <MenuItem
          key={index} 
          iconUrl={iconUrl}
          routeUrl={routeUrl}
          title={title}
          setDropdownTitle={setDropdownTitle}
          setDropdownUrl={setDropdownUrl}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <LineBreakContainer />
      <TypeContainer>Account</TypeContainer>
      <ProfileItem 
        photoUrl={url}
        name={name}
      />
      { renderConstantItems() }
    </React.Fragment>
  );
}

export default ConstantPartMenu;