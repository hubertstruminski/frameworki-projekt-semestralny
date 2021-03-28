import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import ChildElement from './ChildElement';
import { fetchUserMe, fetchUserPhoto } from '../../../store/actions/userActions';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';

interface LeftMenuProps {
  fetchUserMe: Function;
  fetchUserPhoto: Function;
}

const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 55px;
`;

const ProfileContainer = styled.div`
  width: 240px;
  height: 250px;
  background-color: white;
  margin-top: 25px;
  border: 1px solid #EBEDF0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #EBEDF0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  flex: 1;
  padding-right: 15px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
  padding-top: 15px;
`;

const NameContainer = styled.div`
  color: ${Colors.profileTextColor};
  font-weight: 600;
  margin-top: 10px;
`;

const JobTitleContainer = styled.div`
  color: ${Colors.subProfileTextColor};
`;

const ItemsContainer = styled.div`
  width: 240px;
  display: flex;
  justify-content: flex-start;
  padding-left: 30px;
  flex-direction: column;
`;

const LeftMenu = (props: LeftMenuProps): ReactElement => {
  const { fetchUserMe, fetchUserPhoto } = props;

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

  

  return (
    <Container>
      <ProfileContainer>
        <TopContainer>
          <img src={url} alt="" style={{ width: 70, height: 70, borderRadius: '50%'}} />
          <NameContainer>{name}</NameContainer>
          <JobTitleContainer>{company.name}</JobTitleContainer>
        </TopContainer>
        <BottomContainer>
          <ChildElement 
            title="Your network"
            leftIconPath="/media/icons/network.png"
            rightIconPath="/media/icons/user-plus.svg"
            withRightIcon={true}
            navigateTo="/test"
          />
          <ChildElement 
            title="Your Publications"
            leftIconPath="/media/icons/publications.svg"
            rightIconPath="/media/icons/plus.svg"
            withRightIcon={true}
            navigateTo="/test"
          />
        </BottomContainer>
      </ProfileContainer>
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
          navigateTo="/test"
        />
      </ItemsContainer>
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}


export default connect(mapStateToProps, { 
  fetchUserMe,
  fetchUserPhoto
})(LeftMenu);