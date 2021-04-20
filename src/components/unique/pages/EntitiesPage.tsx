import React, { ChangeEvent, ReactElement, useState, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import LeftMenu from '../../common/leftMenu/LeftMenu';
import LeftBar from '../entitiesPage/LeftBar';
import RightBar from '../entitiesPage/RightBar';
import SwitchButton from '../entitiesPage/SwitchButton';
import { connect, useSelector } from 'react-redux';
import { StoreState } from '../../../store/reducers';
import EntityComponent from '../entitiesPage/EntityComponent';

interface EntitiesPageProps {
  showHamburgerMenu: boolean;
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
  width: 90%;
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
  const [entities, setEntities] = useState<Entity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { showHamburgerMenu } = props;

  const photos = useSelector((state: StoreState) => state.photos.photos);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e;
    setSearchTerm(value);
  }

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

  const renderEntities = (): ReactNode => {
    return entities.map((entity: Entity, index: number): ReactNode => {
      const { body, title, photoUrl } = entity;
      return (
        <EntityComponent 
          title={title}
          body={body}
          photoUrl={photoUrl}
        />
      );
    });
  }

  return (
    <Container>
      <Wrapper>
        { showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
        <TopBarContainer>
          <LabelContainer>
            <span style={{ marginRight: 10 }}>Entities</span>
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/cog.svg'}
              alt=""
              style={{ width: 12.5, height: 12.5, marginTop: -5 }}
            />
          </LabelContainer>
          <SwitchButton 
            isMosaicLayout={isMosaicLayout}
            setIsMosaicLayout={setIsMosaicLayout}
          />
        </TopBarContainer>
        <BottomBarContainer>
          <LeftBar />
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
    </Container>
  );
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { 

})(EntititiesPage);