import React, { ReactElement } from 'react';
import { 
  Container,
  DotContainer
} from '../../../styledHelpers/RigidButtonComponents';
import { Colors } from '../../../styledHelpers/Colors';
import ArrowDown from '../../../svgs/arrowDown';

interface RigidButtonProps {

}



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