import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface WorkspaceDetailsProps {
  photoUrl: string;
  type: string;
  users: number;
  icon: string;
  showHamburgerMenu: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  /* font-size: ${fontSize[14]}; */
  margin: 5px;
`;



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