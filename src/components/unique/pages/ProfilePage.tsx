import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import ButtonsContainer from '../profilePage/ButtonsContainer';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import { fetchUserMe, fetchUserPhoto } from '../../../store/actions/userActions';
import ProfileDataContainer from '../profilePage/ProfileDataContainer';
import ProfileDataForm from '../profilePage/ProfileDataForm';
import BottomProfileDataContainer from '../profilePage/BottomProfileDataContainer';

interface ProfilePageProps extends RouteComponentProps {
  showHamburgerMenu: boolean;
  fetchUserMe: Function;
  fetchUserPhoto: Function;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
`;

const TopContainer = styled.div`
  width: 50%;
  border: 1px solid ${Colors.subProfileTextColor};
  margin-top: 30px;
`;

const InternalContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.3;
  flex-direction: column;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const ProfileLinkSpan = styled.span`
  margin-top: 10px;
  color: ${Colors.profileTextColor};
`;

const ProfilePage = (props: ProfilePageProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [city, setCity] = useState('New-york');

  const { fetchUserMe, fetchUserPhoto, showHamburgerMenu, history } = props;

  const userMe = useSelector((state: StoreState) => state.user.user);
  const userPhotoUrl = useSelector((state: StoreState) => state.user.userPhotoUrl);

  const { name, company, id, email, phone, company: { bs } } = userMe;
  const { url } = userPhotoUrl;

  useEffect(() => {
    fetchUserMe();
    console.log("Profile page");
    console.log(userMe);
  }, [fetchUserMe]);

  useEffect(() => {
    if(id !== 0) {
      fetchUserPhoto(id);
    }
  }, [fetchUserPhoto, id]);

  const onEditProfileDataClick = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <Container>
      <TopContainer>
        <ButtonsContainer />
        <InternalContainer>
          <ImageContainer>
            <img 
              src={url} 
              alt="" 
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <ProfileLinkSpan>See profile</ProfileLinkSpan>
          </ImageContainer>
          { !isFormVisible ? (
            <ProfileDataContainer 
              name={name}
              companyName={company.name}
              city={city}
              bs={bs}
              email={email}
              onEditProfileDataClick={onEditProfileDataClick}
              phone={phone}
            /> ) : (
              <ProfileDataForm 
                onEditProfileDataClick={onEditProfileDataClick}
                setCity={setCity}
                userMe={userMe}
                city={city}
              />
            )
          }
        </InternalContainer>
      </TopContainer>
      <BottomProfileDataContainer />
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { 
  fetchUserMe,
  fetchUserPhoto
})(withRouter(ProfilePage));