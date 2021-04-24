import React, { ReactElement } from 'react';
import {
  Container,
  ItemContainer
} from '../../../styledHelpers/WorkspaceDetailsComponents';
import { WorkspaceDetailsProps } from '../../../entities/workspaceDetails';

const WorkspaceDetails = (props: WorkspaceDetailsProps): ReactElement => {
  const { type, users, icon, showHamburgerMenu } = props;

  const smallIconStyles = {
    width: showHamburgerMenu ? 7.5 : 15, 
    height: showHamburgerMenu ? 7.5 : 15
  }

  const itemContainerStyles = {
    fontSize: showHamburgerMenu ? '1.5vw' : '0.7vw'
  }

  return (
    <Container>
      <ItemContainer>
        <img src={process.env.PUBLIC_URL + icon} alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>
        {type}
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>.</ItemContainer>
      <ItemContainer>
        <img src={process.env.PUBLIC_URL + "/media/icons/people.png"} alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer style={itemContainerStyles}>{users} users</ItemContainer>
    </Container>
  );
}

export default WorkspaceDetails;