import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../store/reducers';
import { fetchAllPublications } from '../../store/actions/publicationActions'
import { fetchAllUsers } from '../../store/actions/userActions';
import { fetchAllPhotos } from '../../store/actions/photoActions';
import PublicationView from './publications/PublicationView';
import SliderItem from './workspaces/SliderItem';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

interface HomePageProps {
  fetchAllPublications: Function;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 55px;
`;

const SliderContainer = styled.div`
  width: 90%;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BasicContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-left: 45px;
  color: ${Colors.profileItemTextColor};
  font-weight: bold;
  font-size: ${fontSize[20]};
`;

const HomePage = (props: HomePageProps) => {
  const { 
    fetchAllPublications, 
    fetchAllUsers,
    fetchAllPhotos,
  } = props;
  
  const publications = useSelector((state: StoreState) => state.publications.publications);
  const userList = useSelector((state: StoreState) => state.user.userList);
  const photos = useSelector((state: StoreState) => state.photos.photos);

  useEffect(() => {
    fetchAllPublications();
    fetchAllUsers();
    fetchAllPhotos();
  }, [fetchAllPublications, fetchAllUsers, fetchAllPhotos]);

  useEffect(() => {
  }, [publications, userList, photos]);

  return (
    <Container>
      <PublicationView />
      <BasicContainer>
        Workspaces
      </BasicContainer>
      <SliderContainer>
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </SliderContainer>
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { 
  fetchAllPublications,
  fetchAllUsers,
  fetchAllPhotos
})(HomePage);