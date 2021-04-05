import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface WorkspaceDetailsProps {
  photoUrl: string;
  type: string;
  users: number;
  icon: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemContainer = styled.div`
  color: ${Colors.subProfileTextColor};
  font-size: ${fontSize[14]};
  margin: 5px;
`;

const smallIconStyles = {
  width: 15, 
  height: 15
}

const WorkspaceDetails = (props: WorkspaceDetailsProps): ReactElement => {
  const { type, users, icon } = props;
  return (
    <Container>
      <ItemContainer>
        <img src={process.env.PUBLIC_URL + icon} alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer>
        {type}
      </ItemContainer>
      <ItemContainer style={{ fontWeight: 'bold' }}>.</ItemContainer>
      <ItemContainer>
        <img src={process.env.PUBLIC_URL + "/media/icons/people.png"} alt="" style={smallIconStyles} />
      </ItemContainer>
      <ItemContainer>{users} users</ItemContainer>
    </Container>
  );
}

export default WorkspaceDetails;