import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import ArrowDown from '../../../svgs/arrowDown';

interface RigidButtonProps {

}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${Colors.switchButtonBackgroundColor};
  border-radius: 5px;
  margin-right: 5px;
`;

const DotContainer = styled.div`
  font-size: 1.5vw;
  font-weight: 900;
  /* margin-top: -20px; */
  margin-right: 5px;
  width: 5px;
  height: 5px;
  color: ${Colors.rigidButtonTextColor};
  border: 2px solid ${Colors.rigidButtonTextColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 3px;
  align-items: center;
`;

const RigidButton = (props: RigidButtonProps): ReactElement => {
  return (
    <Container>
      <DotContainer>
        <div style={{ marginTop: -16.675}}>.</div>
      </DotContainer>
      <div style={{ marginRight: 5, color: Colors.rigidButtonTextColor }}>All</div>
      <ArrowDown fill="#2A3F9D" />
    </Container>
  );
}

export default RigidButton;