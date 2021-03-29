import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PublicationDto } from '../../../entities/headerInterfaces/publication';
import PublicationComponent from './PublicationComponent';

interface PublicationListProps {
  collection: PublicationDto[]
}

const Container = styled.div`
  width: 100%;
  display: block;
  /* padding-right: 20px; */
`;

const PublicationList = (props: PublicationListProps): ReactElement => {
  const { collection } = props;
  
  const renderPublications = () => {
    return collection.map((publication: PublicationDto, index: number): ReactElement => {
      return (
        <PublicationComponent
          key={index} 
          publication={publication} 
        />
      );
    })
  }

  return (
    <Container>
      { renderPublications() }
    </Container>
  );
}

export default PublicationList;