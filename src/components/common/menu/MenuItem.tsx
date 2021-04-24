import React, { ReactElement } from 'react';
import {  
  Container,
  TextContainer
} from '../../../styledHelpers/MenuItemComponents';
import { withRouter } from "react-router-dom";
import { MenuItemProps } from '../../../entities/menuItem';


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