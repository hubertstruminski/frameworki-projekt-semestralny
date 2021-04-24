import React, { ReactElement, useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import { fetchAllPublications } from '../../../store/actions/publicationActions'
import { fetchAllUsers } from '../../../store/actions/userActions';
import { fetchAllPhotos } from '../../../store/actions/photoActions';
import PublicationView from '../publications/PublicationView';
import SliderItem from '../../common/workspaces/SliderItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResumeView from '../resume/ResumeView';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import { BasicContainer, Container } from '../../../styledHelpers/HomePageComponents';
import { Workspace, HomePageProps } from '../../../entities/homePage';
import { WORKSPACES_DATA } from '../../../mocks/homePageMocks';

const HomePage = (props: HomePageProps): ReactElement => {
  const [sliderWidth, setSliderWidth] = useState<number>((window.innerWidth * 0.9)- 285);
  const { 
    fetchAllPublications, 
    fetchAllUsers,
    fetchAllPhotos,
    showHamburgerMenu
  } = props;

  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  
  const publications = useSelector((state: StoreState) => state.publications.publications);
  const userList = useSelector((state: StoreState) => state.user.userList);
  const photos = useSelector((state: StoreState) => state.photos.photos);

  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const updateLayout = () => {
    if(window.innerWidth < 800) {
      setSliderWidth((window.innerWidth * 0.9) - 15);
    } else {
      setSliderWidth((window.innerWidth * 0.9) - 285);
    }
  }

  useEffect(() => {
    fetchAllPublications();
    fetchAllUsers();
    fetchAllPhotos();
  }, [fetchAllPublications, fetchAllUsers, fetchAllPhotos]);

  useEffect(() => {
    const titles: Workspace[] = WORKSPACES_DATA;
    let index: number = 0 ;
    titles.forEach((title: Workspace): void => {
      if(photos[index]) {
        title.url = photos[index++].url
      }
    });
    setWorkspaces(titles);
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
          isRelative={index === (workspaces.length - 1) ? true : false}
          showHamburgerMenu={showHamburgerMenu}
        />
      );
    });
  } 

  return (
    <Container>
      { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <PublicationView showHamburgerMenu={showHamburgerMenu} />
      <BasicContainer style={{ fontSize: showHamburgerMenu ? '2.5vw' : '1vw'}}>
        Workspaces
      </BasicContainer>
      <div style={{ maxWidth: sliderWidth, marginTop: 25}}>
        <Slider  
          infinite 
          autoplay 
          speed={1000} 
          arrows={false}
          slidesToShow={5}
          variableWidth
          adaptiveHeight
        >
          { renderSlider() }
        </Slider>
      </div>
      <ResumeView 
        showHamburgerMenu={showHamburgerMenu} 
        placeholderTitle="Resume your work"
        isComponentsBar={false}
      />
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