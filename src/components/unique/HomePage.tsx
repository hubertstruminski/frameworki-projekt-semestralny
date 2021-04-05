import React, { ReactElement, useEffect, useState } from 'react';
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
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResumeView from './resume/ResumeView';

interface HomePageProps {
  fetchAllPublications: Function;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
}

interface Workspace {
  title: string;
  type: string;
  users: number;
  days: number;
  url: string;
  icon: string;
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 55px;
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

  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  
  const publications = useSelector((state: StoreState) => state.publications.publications);
  const userList = useSelector((state: StoreState) => state.user.userList);
  const photos = useSelector((state: StoreState) => state.photos.photos);

  useEffect(() => {
    fetchAllPublications();
    fetchAllUsers();
    fetchAllPhotos();
  }, [fetchAllPublications, fetchAllUsers, fetchAllPhotos]);

  useEffect(() => {
    const titles: Workspace[] = [
      { title: "Client contract", type: "Contract", users: 150, days: 2, url: '', icon: '/media/icons/entities2.png' },
      { title: "Supplier contract", type: "Contract", users: 25, days: 2, url: '', icon: '/media/icons/entities2.png' },
      { title: "Corporate", type: "Corporate", users: 25, days: 2, url: '', icon: '/media/icons/entities2.png' },
      { title: "Group number", type: "B2B", users: 78, days: 3, url: '', icon: '/media/icons/entities2.png' },
      { title: "Client contract 2", type: "Contract", users: 161, days: 3, url: '', icon: '/media/icons/entities2.png' },
      { title: "Supplier contract 2", type: "Contract", users: 13, days: 3, url: '', icon: '/media/icons/entities2.png' },
      { title: "Corporate 2", type: "Corporate", users: 8, days: 3, url: '', icon: '/media/icons/entities2.png' },
      { title: "Group number 2", type: "B2B", users: 11, days: 4, url: '', icon: '/media/icons/entities2.png' },
      { title: "Client contract 3", type: "Contract", users: 254, days: 4, url: '', icon: '/media/icons/entities2.png' },
      { title: "Supplier contract 3", type: "Contract", users: 67, days: 5, url: '', icon: '/media/icons/entities2.png' },
      { title: "Corporate 3", type: "Corporate", users: 207, days: 5, url: '', icon: '/media/icons/entities2.png' },
      { title: "Group number 3", type: "B2B", users: 111, days: 6, url: '', icon: '/media/icons/entities2.png' },
      { title: "Client contract 4", type: "Contract", users: 98, days: 7, url: '', icon: '/media/icons/entities2.png' },
      { title: "Supplier contract 4", type: "Contract", users: 3, days: 7, url: '', icon: '/media/icons/entities2.png' },
      { title: "Corporate 4", type: "Corporate", users: 567, days: 8, url: '', icon: '/media/icons/entities2.png' }
    ];
    let index: number = 0 ;
    titles.forEach((title: Workspace): void => {
      if(photos[index]) {
        title.url = photos[index++].url
      }
    });
    setWorkspaces(titles);
    console.log(titles);
  }, [publications, userList, photos]);

  const renderSlider = () => {
    return workspaces.map((workspace: Workspace, index: number): ReactElement => {
      const { url, title, type, users, icon, days } = workspace;
      return (
        <SliderItem 
          key={index}
          photoUrl={url}
          title={title}
          type={type}
          users={users}
          icon={icon}
          days={days}
        />
      );
    });
  } 

  return (
    <Container>
      <PublicationView />
      <BasicContainer>
        Workspaces
      </BasicContainer> 
      <div style={{ width: '90%', height: 200, position: 'relative', marginTop: 25}}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
          <Slider  
            infinite 
            autoplay 
            speed={1000} 
            arrows={false}
            slidesToShow={5}
            variableWidth
          >
            { renderSlider() }
          </Slider>
        </div>
      </div>
      <ResumeView />
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