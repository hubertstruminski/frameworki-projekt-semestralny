import React, { 
  ChangeEvent, 
  ReactElement, 
  useState, 
  useEffect, 
  ReactNode,
  useLayoutEffect 
} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import LeftBar from '../entitiesPage/LeftBar';
import RightBar from '../entitiesPage/RightBar';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import EntityComponent from '../entitiesPage/EntityComponent';
import MosaicButton from '../entitiesPage/MosaicButton';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { fetchAllPhotos } from '../../../store/actions/photoActions';

interface EntitiesPageProps {
  showHamburgerMenu: boolean;
  fetchAllPhotos: Function;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 55px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  /* width: 90%; */
  background-color: ${Colors.white};
  margin-top: 30px;
`;

const TopBarContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${Colors.black};
  font-weight: 700;
  font-size: 1vw;
`;

const BottomBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 5px;
  flex-wrap: wrap;
`;

const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

interface Entity {
  title: string;
  body: string;
  photoUrl: string;
}

const ENTITIES_DATA: Entity[] = [
  { title: 'ABC generic company', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 1', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 2', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 3', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 1', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 2', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 3', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 4', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 5', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 4', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 6', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 7', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 6', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 7', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 45', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 77', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 8', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 9', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 89', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 97', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 10', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 11', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 31', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 41', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 12', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 13', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 11', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'Subsid Corp Ltd 21', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 14', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 15', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
  { title: 'World company SAS 16', body: 'Caracas 1050, Distrito Capital, Venezuela', photoUrl: '' },
];

const EntititiesPage = (props: EntitiesPageProps): ReactElement => {
  const [isMosaicLayout, setIsMosaicLayout] = useState(true);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);
  const [entities, setEntities] = useState<Entity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

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
          <BottomBarContainer>
            <LeftBar 
              handle={handle}
              setIsAscendingOrder={setIsAscendingOrder}
              isAscendingOrder={isAscendingOrder}
            />
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