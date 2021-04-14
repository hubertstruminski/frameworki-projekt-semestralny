import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../../styledHelpers/Colors';

interface MenuItemProps {
  iconUrl: string;
  routeUrl: string;
  title: string;
  setDropdownTitle: Function;
  setDropdownUrl: Function;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  color: ${Colors.black};
  margin-left: 15px;
`;

const MenuItem = (props: MenuItemProps): ReactElement => {
  const { 
    iconUrl, 
    routeUrl, 
    title, 
    setDropdownTitle, 
    setDropdownUrl 
  } = props;

  const onClick = () => {
    setDropdownTitle(title);
    setDropdownUrl(iconUrl);
  }

  return (
    <Container onClick={onClick}>
      <img 
        src={process.env.PUBLIC_URL + iconUrl} 
        alt="" 
        style={{ width: 20, height: 20 }}
      />
      <TextContainer>
        <Link style={{ textDecoration: 'none' }} to={routeUrl}>
          {title}
        </Link>
      </TextContainer>
    </Container>
  );
}

export default MenuItem;