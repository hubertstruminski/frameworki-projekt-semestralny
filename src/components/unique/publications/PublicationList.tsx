import React, { ReactElement } from 'react';
import { PublicationDto } from '../../../entities/headerInterfaces/publication';
import PublicationComponent from './PublicationComponent';
import { Container } from '../../../styledHelpers/PublicationListComponents';

interface PublicationListProps {
  collection: PublicationDto[];
  showHamburgerMenu: boolean;
}

const PublicationList = (props: PublicationListProps): ReactElement => {
  const { collection, showHamburgerMenu } = props;
  
  const renderPublications = () => {
    return collection.map((publication: PublicationDto, index: number): ReactElement => {
      return (
        <PublicationComponent
          key={index} 
          publication={publication} 
          showHamburgerMenu={showHamburgerMenu}
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