import React, { ReactElement, useEffect } from 'react';
import ChildElement from './ChildElement';
import { fetchUserMe, fetchUserPhoto } from '../../../store/actions/userActions';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import {
  BottomContainer,
  Container,
  ProfileContainer,
  TopContainer,
  NameContainer,
  JobTitleContainer,
  ItemsContainer,
} from '../../../styledHelpers/LeftMenuComponents';
import { withRouter } from "react-router-dom";
import { LeftMenuProps } from '../../../entities/leftMenu';

const LeftMenu = (props: LeftMenuProps): ReactElement => {
  const { fetchUserMe, fetchUserPhoto, showHamburgerMenu, history } = props;

  const userMe = useSelector((state: StoreState) => state.user.user);
  const userPhotoUrl = useSelector((state: StoreState) => state.user.userPhotoUrl);

  const { name, company, id } = userMe;
  const { url } = userPhotoUrl;

  useEffect(() => {
    fetchUserMe();
  }, [fetchUserMe]);

  useEffect(() => {
    if(id !== 0) {
      fetchUserPhoto(id);
    }
  }, [fetchUserPhoto, id]);

  useEffect(() => {
    console.log("UserPhoto: " + userPhotoUrl.url);
  }, [userPhotoUrl]);

  const bottomContainerPaddingStyles = {
    paddingTop: showHamburgerMenu ? 30 : 15,
    paddingBottom: showHamburgerMenu ? 15 : 15,
    paddingLeft: showHamburgerMenu ? 30 : 15,
    paddingRight: showHamburgerMenu ? 30 : 15
  }

  const onProfileRedirect = () => {
    history.push({ pathname: '/profile' });
  }

  return (
    <Container 
      style={{ 
        width: showHamburgerMenu ? '90%' : 300, 
        marginTop: showHamburgerMenu ? 0 : 55
      }}
    >
      <ProfileContainer
        style={{
          width: showHamburgerMenu ? '100%' : 240,
          height: showHamburgerMenu ? undefined : 250,
        }}
      >
        <TopContainer
          style={{
            height: showHamburgerMenu ? undefined : 150,
            paddingTop: showHamburgerMenu ? 30 : undefined,
            paddingBottom: showHamburgerMenu ? 30 : undefined,
          }}
        >
          <img 
            src={url} 
            alt="" 
            style={{ 
              width: 70, 
              height: 70, 
              borderRadius: '50%',
              cursor: 'pointer'
            }} 
            onClick={onProfileRedirect}
          />
          <NameContainer>{name}</NameContainer>
          <JobTitleContainer>{company.name}</JobTitleContainer>
        </TopContainer>
        <BottomContainer style={bottomContainerPaddingStyles}>
          <ChildElement 
            title="Your network"
            leftIconPath="/media/icons/network.png"
            rightIconPath="/media/icons/user-plus.svg"
            marginBottom={showHamburgerMenu ? 20 : undefined}
            withRightIcon={true}
            navigateTo="/test"
          />
          <ChildElement 
            title="Your Publications"
            leftIconPath="/media/icons/publications.svg"
            rightIconPath="/media/icons/plus.svg"
            marginBottom={showHamburgerMenu ? 20 : undefined}
            withRightIcon={true}
            navigateTo="/test"
          />
          { showHamburgerMenu &&
            <React.Fragment>
              <ChildElement 
                title="Publications"
                leftIconPath="/media/icons/publications.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/test"
              />
              <ChildElement 
                title="Ecosystem"
                leftIconPath="/media/icons/ecosystem.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/test"
              />
              <ChildElement 
                title="Entities"
                leftIconPath="/media/icons/entities2.svg"
                withRightIcon={false}
                marginBottom={20}
                navigateTo="/entities"
              />
            </React.Fragment>
          }
        </BottomContainer>
      </ProfileContainer>
      { !showHamburgerMenu &&
        <ItemsContainer>
          <ChildElement 
            title="Publications"
            leftIconPath="/media/icons/publications.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/test"
          />
          <ChildElement 
            title="Ecosystem"
            leftIconPath="/media/icons/ecosystem.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/test"
          />
          <ChildElement 
            title="Entities"
            leftIconPath="/media/icons/entities2.svg"
            withRightIcon={false}
            marginBottom={20}
            navigateTo="/entities"
          />
        </ItemsContainer>
      }
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}


export default connect(mapStateToProps, { 
  fetchUserMe,
  fetchUserPhoto
})(withRouter(LeftMenu));