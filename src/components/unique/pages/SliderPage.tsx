import React, { ReactElement, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import SliderPlaceholder from '../sliderPage/SliderPlaceholder';
import MattersContainer from '../sliderPage/MattersContainer';
import ResumeView from '../resume/ResumeView';
import { fetchAllUsers } from '../../../store/actions/userActions';
import { fetchAllPhotos } from '../../../store/actions/photoActions';
import { StoreState } from '../../../store/reducers';
import { connect } from 'react-redux';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import { Container } from '../../../styledHelpers/SliderPageComponents';
import { SliderItemState, SliderPageProps } from '../../../entities/sliderPage';


const SliderPage = (props: SliderPageProps): ReactElement => {
  const location = useLocation<SliderItemState>();
  const { state: { photoUrl, title } } = location;
  
  const { 
    showHamburgerMenu, 
    fetchAllPhotos, 
    fetchAllUsers 
  } = props;

  useEffect(() => {
    fetchAllPhotos();
    fetchAllUsers();
  }, [fetchAllPhotos, fetchAllUsers]);

  return (
    <Container>
      { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <SliderPlaceholder 
        photoUrl={photoUrl}
        title={title}
      />
      <MattersContainer />
      <ResumeView
        showHamburgerMenu={showHamburgerMenu} 
        placeholderTitle="Latest updates"
        isComponentsBar={true}
      />
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { 
  fetchAllUsers,
  fetchAllPhotos
})(SliderPage);