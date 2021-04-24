import React, { 
  ChangeEvent, 
  ReactElement, 
  ReactNode, 
  useEffect, 
  useState 
} from 'react';
import { 
  MENU_ITEMS_DATA, 
  IMenuItem, 
  MenuItemTypeEnum 
} from '../../../mocks/MenuMocks';
import MenuItem from './MenuItem';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import { Container } from '../../../styledHelpers/InputComponents';
import ConstantPartMenu from './ConstantPartMenu';
import {
  LogoutContainer,
  MenuContainer,
  TypeContainer,
  imgLogoutStyles,
  inputStyles
} from '../../../styledHelpers/DropdownMenuComponents';
import { WORKSPACES_DATA } from '../../../mocks/homePageMocks';
import { Workspace } from '../../../entities/homePage';
import { DropdownMenuProps } from '../../../entities/dropdownMenu';

const DropdownMenu = (props: DropdownMenuProps): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const [isRetrieved, setIsRetrieved] = useState<boolean>(false);

  const userMe = useSelector((state: StoreState) => state.user.user);
  const userPhotoUrl = useSelector((state: StoreState) => state.user.userPhotoUrl);
  const photos = useSelector((state: StoreState) => state.photos.photos);

  const { name } = userMe;
  const { url } = userPhotoUrl;

  const { setDropdownTitle, setDropdownUrl } = props;

  useEffect(() => {
    if(!isRetrieved) {
      let result: IMenuItem[] = [];
      result = MENU_ITEMS_DATA; 
      WORKSPACES_DATA.forEach((item: Workspace, index: number): void => {
        const { title, icon } = item;
  
        const element: IMenuItem = { type: MenuItemTypeEnum.WORKSPACES, iconUrl: icon, routeUrl: '/sliderItem', title, photoUrl: '' };
        
        if(photos[index]) {
          element.photoUrl = photos[index].url
        }
        result.push(element);
      });
      setMenuItems(result);
      setIsRetrieved(true);
    }
  }, [photos, isRetrieved]);

  const editSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setSearchTerm(value === null ? '' : value);
  }

  const dynamicSearch = () => {
    return menuItems.filter((item: IMenuItem): boolean => {
      const { title  } = item;
      return title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  const renderContent = (): ReactNode => {
    let isPlatform = true;
    let isWorkspaces = true;
    return dynamicSearch().map((menuItem: IMenuItem): ReactNode => {
      const { iconUrl, routeUrl, title, type, photoUrl } = menuItem;
      if(isPlatform && type === MenuItemTypeEnum.PLATFORM) {
        isPlatform = false;
        return (
          <React.Fragment>
            <TypeContainer>Platform</TypeContainer>
            <MenuItem 
              iconUrl={iconUrl}
              routeUrl={routeUrl}
              title={title}
              setDropdownTitle={setDropdownTitle}
              setDropdownUrl={setDropdownUrl}
            />
          </React.Fragment>
        );
      } else if(isWorkspaces && type === MenuItemTypeEnum.WORKSPACES) {
        isWorkspaces = false;
        return (
          <React.Fragment>
            <TypeContainer>Workspaces</TypeContainer>
            <MenuItem 
              iconUrl={iconUrl}
              routeUrl={routeUrl}
              title={title}
              setDropdownTitle={setDropdownTitle}
              setDropdownUrl={setDropdownUrl}
              photoUrl={photoUrl}
              icon={iconUrl}
            />
          </React.Fragment>
        );
      } else {
         return ( 
          <MenuItem 
            iconUrl={iconUrl}
            routeUrl={routeUrl}
            title={title}
            setDropdownTitle={setDropdownTitle}
            setDropdownUrl={setDropdownUrl}
            photoUrl={photoUrl}
            icon={iconUrl}
          />
        );
      }
    });
  }

  return (
    <MenuContainer>
      <Container style={{ marginLeft: 10, display: 'flex', flex: 1 }} onClick={(e) => e.stopPropagation()}>
        <input 
          type="text" 
          placeholder="Filter..." 
          style={inputStyles}
          value={searchTerm}
          onChange={editSearchTerm}
        />
      </Container>
      <div style={{ overflowY: 'scroll', overflowX: 'hidden', maxHeight: 400 }}>
      { renderContent() }
      </div>
      <ConstantPartMenu 
        name={name}
        url={url}
        setDropdownTitle={setDropdownTitle}
        setDropdownUrl={setDropdownUrl}
      />
      <LogoutContainer>
        <img 
          src={process.env.PUBLIC_URL + '/media/icons/logout.png'} 
          alt="" 
          style={imgLogoutStyles} 
        />
        Logout
      </LogoutContainer>
    </MenuContainer>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { })(DropdownMenu);