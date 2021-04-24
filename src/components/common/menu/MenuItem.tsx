import React, { ReactElement } from 'react';
import {  
  Container,
  TextContainer
} from '../../../styledHelpers/MenuItemComponents';
import { RouteComponentProps, withRouter } from "react-router-dom";

interface MenuItemProps extends RouteComponentProps {
  iconUrl: string;
  routeUrl: string;
  title: string;
  setDropdownTitle: Function;
  setDropdownUrl: Function;
  photoUrl?: string;
  icon?: string;
}

const MenuItem = (props: MenuItemProps): ReactElement => {
  const { 
    iconUrl, 
    routeUrl, 
    title, 
    setDropdownTitle, 
    setDropdownUrl,
    history,
    photoUrl,
    icon 
  } = props;

  const onClick = () => {
    setDropdownTitle(title);
    setDropdownUrl(iconUrl);
    history.push({
      pathname: routeUrl,
      state: { photoUrl, title, icon }
    });
  }

  return (
    <Container onClick={onClick}>
      <img 
        src={process.env.PUBLIC_URL + iconUrl} 
        alt="" 
        style={{ width: 20, height: 20 }}
      />
      <TextContainer>
        {title}
      </TextContainer>
    </Container>
  );
}

export default withRouter(MenuItem);