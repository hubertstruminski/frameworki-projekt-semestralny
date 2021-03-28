import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../store/reducers';
import { fetchAllPublications } from '../../store/actions/publicationActions'
import { fetchAllUsers } from '../../store/actions/userActions';
import { fetchAllPhotos } from '../../store/actions/photoActions';
import PublicationList from './publications/PublicationList';

interface HomePageProps {
  fetchAllPublications: Function;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 55px;
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
    console.log(publications);
    console.log(userList);
    console.log(photos);
  }, [publications, userList, photos]);

  return (
    <Container>
      <PublicationList />
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