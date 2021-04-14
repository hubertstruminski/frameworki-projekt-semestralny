import React, { 
  ChangeEvent, 
  ReactElement, 
  ReactNode, 
  useEffect, 
  useState 
} from 'react';
import styled from 'styled-components';
import { 
  MENU_ITEMS_DATA, 
  IMenuItem, 
  MenuItemTypeEnum 
} from '../../../mocks/MenuMocks';
import { Colors } from '../../../styledHelpers/Colors';
import MenuItem from './MenuItem';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import ProfileItem from './ProfileItem';
import { Container } from '../../../styledHelpers/InputComponents';

interface DropdownMenuProps {
  setDropdownUrl: Function;
  setDropdownTitle: Function;
}

const MenuContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  padding: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
`;

const TypeContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  color: ${Colors.black};
  padding-top: 12.5px;
  padding-bottom: 12.5px;
`;

const LogoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${Colors.subProfileTextColor};
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  color: ${Colors.subProfileTextColor};
`;

const LineBreakContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${Colors.subProfileTextColor};
  margin-top: 5px;
`;

const DropdownMenu = (props: DropdownMenuProps): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

  const userMe = useSelector((state: StoreState) => state.user.user);
  const userPhotoUrl = useSelector((state: StoreState) => state.user.userPhotoUrl);

  const { name } = userMe;
  const { url } = userPhotoUrl;

  const { setDropdownTitle, setDropdownUrl } = props;

  const imgLogoutStyles = {
    width: 20,
    height: 20,
    marginRight: 20
  }

  useEffect(() => {
    setMenuItems(MENU_ITEMS_DATA);
  }, []);

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

  const inputStyles = {
    border: 0, 
    outline: 'none',  
    color: Colors.headerInputColor,
    fontWeight: 400,
    padding: 5,
    width: '100%'
  }

  const renderContent = (startIndex: number, endIndex: number): ReactNode => {
    let isPlatform = true;
    let isWorkspaces = true;
    let isAccount = true;
    return dynamicSearch().slice(startIndex, endIndex).map((menuItem: IMenuItem): ReactNode => {
      const { iconUrl, routeUrl, title, type } = menuItem;
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
            />
          </React.Fragment>
        );
      } else if(isAccount && type === MenuItemTypeEnum.ACCOUNT) {
        isAccount = false;
        return (
          <React.Fragment>
            <LineBreakContainer />
            <TypeContainer>Account</TypeContainer>
            <ProfileItem 
              photoUrl={url}
              name={name}
            />
            <MenuItem 
              iconUrl={iconUrl}
              routeUrl={routeUrl}
              title={title}
              setDropdownTitle={setDropdownTitle}
              setDropdownUrl={setDropdownUrl}
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
      <div style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
      { renderContent(0, 10) }
      </div>
      { renderContent(10, 12) }
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