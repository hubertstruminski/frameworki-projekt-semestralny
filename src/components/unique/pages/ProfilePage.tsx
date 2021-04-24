import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  Container,
  ImageContainer,
  InternalContainer,
  ProfileLinkSpan,
  TopContainer
} from '../../../styledHelpers/ProfilePageComponents';
import ButtonsContainer from '../profilePage/ButtonsContainer';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import { fetchUserMe, fetchUserPhoto } from '../../../store/actions/userActions';
import ProfileDataContainer from '../profilePage/ProfileDataContainer';
import ProfileDataForm from '../profilePage/ProfileDataForm';
import BottomProfileDataContainer from '../profilePage/BottomProfileDataContainer';
import LeftMenu from '../../common/leftMenu/LeftMenu';

interface ProfilePageProps extends RouteComponentProps {
  showHamburgerMenu: boolean;
  fetchUserMe: Function;
  fetchUserPhoto: Function;
}

const ProfilePage = (props: ProfilePageProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [city, setCity] = useState('New-york');
  const [width, setWidth] = useState('50%');
  const [imgSize, setImgSize] = useState(100);

  const { fetchUserMe, fetchUserPhoto, showHamburgerMenu } = props;

  const userMe = useSelector((state: StoreState) => state.user.user);
  const userPhotoUrl = useSelector((state: StoreState) => state.user.userPhotoUrl);

  const { name, company, id, email, phone, company: { bs } } = userMe;
  const { url } = userPhotoUrl;

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    fetchUserMe();
  }, [fetchUserMe]);

  useEffect(() => {
    if(id !== 0) {
      fetchUserPhoto(id);
    }
  }, [fetchUserPhoto, id]);

  const onEditProfileDataClick = () => {
    setIsFormVisible(!isFormVisible);
  }

  const updateLayout = () => {
    if(window.innerWidth < 900) {
      setWidth('80%');
      setImgSize(40);
    } else if(window.innerWidth < 1050) {
      setWidth('70%');
      setImgSize(60);
    } else if(window.innerWidth < 1350) {
      setWidth('60%');
      setImgSize(80);
    } else {
      setWidth('50%');
      setImgSize(100);
    }
  }

  return (
    <Container>
      { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <TopContainer style={{ width: width }}>
        <ButtonsContainer />
        <InternalContainer>
          <ImageContainer>
            <img 
              src={url} 
              alt="" 
              style={{ width: imgSize, height: imgSize, borderRadius: imgSize / 2 }}
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
      <BottomProfileDataContainer width={width} />
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