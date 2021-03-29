import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { StoreState } from '../../../store/reducers';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import MainViewElement from './MainViewElement';
import PublicationList from './PublicationList';
import { connect, useSelector } from 'react-redux';
import { User } from '../../../store/actions/userActions';
import { Publication } from '../../../store/actions/publicationActions';
import { Photo } from '../../../store/actions/photoActions';
import { PublicationDto } from '../../../entities/headerInterfaces/publication';

interface PublicationListProps {

}


const Container = styled.div`
  width: 90%;
  height: 315px;
  margin-top: 25px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  width: 30%;
  background-color: red;
  /* padding-bottom: 25px; */

`;

const LeftWrapper = styled.div`
  height: 100%;
`;

const RightContainer = styled.div`
  width: 70%;
  background-color: ${Colors.white};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const RightWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 20px;
`;

const latestStyles = {
  color: Colors.profileItemTextColor,
  fontWeight: 700,
  fontSize: fontSize[20],
}

const moreStyles = {
  color: Colors.profileTextColor,
  fontWeight: 700,
  fontSize: fontSize[16],
}

const PublicationView = (props: PublicationListProps): ReactElement => {
  const [collection, setCollection] = useState<PublicationDto[]>([]);

  const publications = useSelector((state: StoreState) => state.publications.publications);
  const userList = useSelector((state: StoreState) => state.user.userList);
  const photos = useSelector((state: StoreState) => state.photos.photos);
  
  useEffect(() => {
    const tmp: PublicationDto[] = []
    publications.slice(20).forEach((publication: Publication): void => {
      const { title, body, userId } = publication;

      const foundUser = userList.filter((user: User): boolean => user.id === userId);
      if(!foundUser[0]) {
        return;
      }
      
      const { name }: User = foundUser[0];

      const foundPhoto = photos.filter((photo: Photo): boolean => photo.id === userId);
      const urls: string[] = [];
      if(!foundPhoto[0]) {
        return;
      }
      urls.push(foundPhoto[0].url);
      urls.push(photos[Math.floor(Math.random() * photos.length)].url);
      

      tmp.push({ title, body, userId, name, urls });
    });
    setCollection(tmp);
  }, [photos, publications, userList]);

  return (
    <Container>
      <LeftContainer>
        <LeftWrapper>
          <MainViewElement 
            body={collection.length !== 0 ? collection[0].body : ''}
            userName={collection.length !== 0 ? collection[0].name : ''}
            userPhotoUrl={collection.length !== 0 && collection[0].urls[0] ? collection[0].urls[0] : ''}
            backgroundImageUrl={collection.length !== 0 && collection[0].urls[1] ? collection[0].urls[1] : ''}
          />
        </LeftWrapper>
      </LeftContainer>
      <RightContainer>
        <RightWrapper>
          <span style={latestStyles}>Latest publications</span>
          <PublicationList collection={collection.slice(1, 4)} />
          <span style={moreStyles}>See more publications</span>
        </RightWrapper>
      </RightContainer>
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, {  })(PublicationView);
