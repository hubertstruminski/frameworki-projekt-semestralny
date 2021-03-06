import React, { 
  ChangeEvent, 
  ReactElement, 
  useState, 
  useEffect, 
  ReactNode,
  useLayoutEffect 
} from 'react';
import {  
  BottomBarContainer,
  Container,
  DataContainer,
  LabelContainer,
  TopBarContainer,
  Wrapper
} from '../../../styledHelpers/EntitiesPageComponents';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import LeftBar from '../entitiesPage/LeftBar';
import RightBar from '../entitiesPage/RightBar';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import EntityComponent from '../../common/entities/EntityComponent';
import MosaicButton from '../entitiesPage/MosaicButton';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { fetchAllPhotos } from '../../../store/actions/photoActions';
import ExpandableFilters from '../entitiesPage/ExpandableFilters';
import { EntitiesPageProps, Entity } from '../../../entities/entitiesPage';
import { ENTITIES_DATA } from '../../../mocks/entitiesPageMocks';
import '../../../styledHelpers/entitiesPage.css';

const EntititiesPage = (props: EntitiesPageProps): ReactElement => {
  const [isMosaicLayout, setIsMosaicLayout] = useState(true);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersOpened, setIsFiltersOpened] = useState(false);

  const handle = useFullScreenHandle();

  const { showHamburgerMenu, fetchAllPhotos } = props;

  const photos = useSelector((state: StoreState) => state.photos.photos);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const updateLayout = () => {
    if(window.innerWidth < 900) {
      setIsMosaicLayout(false);
    } else if(window.innerWidth < 1050) {
      setIsMosaicLayout(false);
    } else if(window.innerWidth < 1350) {
      setIsMosaicLayout(false);
    } else {
      setIsMosaicLayout(true);
    }
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    setSearchTerm(value === null ? '' : value);
  }

  useEffect(() => {
    fetchAllPhotos();
  }, [fetchAllPhotos]);

  useEffect(() => {
    const result: Entity[] = [];

    ENTITIES_DATA.forEach((item: Entity, index: number): void => {
      let { photoUrl, title, body } = item;
      if(photos[index]) {
        photoUrl = photos[index].url;
      }
      result.push({ photoUrl, title, body });
    });
    setEntities(result);
  }, [photos]);

  const dynamicSearch = () => {
    return entities.filter((entity: Entity): boolean => entity.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const renderEntities = (): ReactNode => {
    return dynamicSearch()
    .sort((a, b) => isAscendingOrder ? (
      a.title > b.title ? 1 : -1
    ) : (
      a.title < b.title ? 1 : -1
    ))
    .map((entity: Entity, index: number): ReactNode => {
      const { body, title, photoUrl } = entity;
      return (
        <EntityComponent 
          title={title}
          body={body}
          photoUrl={photoUrl}
          isMosaicLayout={isMosaicLayout}
        />
      );
    });
  }

  return (
    <Container>
      { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
      <FullScreen handle={handle}>
        <div style={{ width: '100%', display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Wrapper 
          style={{
            width: handle.active ? '100%' : '90%',
            marginTop: showHamburgerMenu ? 10 : undefined
          }}
        >
          <TopBarContainer>
            <LabelContainer>
              <span style={{ marginRight: 10 }}>Entities</span>
              <img 
                src={process.env.PUBLIC_URL + '/media/icons/cog.svg'}
                alt=""
                style={{ width: 12.5, height: 12.5, marginTop: -5 }}
              />
            </LabelContainer>
            <MosaicButton 
              iconUrl="/media/icons/windows.svg" 
              setIsMosaicLayout={setIsMosaicLayout}
            />
          </TopBarContainer>
          <BottomBarContainer 
            style={{ 
              alignItems: isFiltersOpened ? 'flex-start' : 'center'
            }}
          >
            <div 
              style={{
                display: 'flex', 
                alignItems: 'flex-start', 
                flexDirection: 'column',
                justifyContent: !isFiltersOpened ? 'center' : undefined
              }}>
              <LeftBar 
                handle={handle}
                setIsAscendingOrder={setIsAscendingOrder}
                isAscendingOrder={isAscendingOrder}
                setIsFiltersOpened={setIsFiltersOpened}
                isFiltersOpened={isFiltersOpened}
              />
              { isFiltersOpened &&
                <ExpandableFilters isOpened={isFiltersOpened} />
              }
            </div>
            <RightBar 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showHamburgerMenu={showHamburgerMenu}
              onChange={onChange}
            />
          </BottomBarContainer>
          <DataContainer>
            { renderEntities() }
          </DataContainer>
        </Wrapper>
        </div>
      </FullScreen>
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { 
  fetchAllPhotos
})(EntititiesPage);