import React, { ReactElement } from 'react';
import {  
  Container,
  LeftContainer,
  RightContainer,
  TextContainer
} from '../../../styledHelpers/ProfileDataContainerComponents';
import { ProfileDataContainerProps } from '../../../entities/profileDataContainer';

const ProfileDataContainer = (props: ProfileDataContainerProps): ReactElement => {
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