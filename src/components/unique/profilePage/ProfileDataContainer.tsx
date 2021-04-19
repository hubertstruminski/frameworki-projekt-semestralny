import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import {  
  Container,
  LeftContainer,
  RightContainer
} from '../../../styledHelpers/ProfileDataContainerComponents';

interface ProfileDataContainerProps {
  name: string;
  companyName: string;
  city: string;
  bs: string | undefined;
  onEditProfileDataClick: Function;
  email: string | undefined;
  phone: string | undefined;
}

const TextContainer = styled.span`
  color: ${Colors.black};
  font-size: 0.85vw;
  margin: 3px;
`;

const ProfileDataContainer = (props: ProfileDataContainerProps) => {
  const { name, companyName, city, bs, email, onEditProfileDataClick, phone } = props;
  
  const onEdit = () => {
    onEditProfileDataClick();
  }

  return (
    <Container>
      <LeftContainer>
        <TextContainer>{name}</TextContainer>
        <TextContainer>{companyName}</TextContainer>
        <TextContainer>{city}</TextContainer>
        <TextContainer>{bs}</TextContainer>
      </LeftContainer>
      <RightContainer>
        <img 
          src={process.env.PUBLIC_URL + '/media/icons/pencil.svg'} 
          alt=""
          style={{ width: 25, height: 25, marginBottom: 20, cursor: 'pointer'}}
          onClick={onEdit}
        />
        <TextContainer>{email}</TextContainer>
        <TextContainer>{phone}</TextContainer>
      </RightContainer>
    </Container>
  );
}

export default ProfileDataContainer;