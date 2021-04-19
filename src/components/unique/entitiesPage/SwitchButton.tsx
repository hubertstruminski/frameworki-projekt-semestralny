import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MosaicButton from './MosaicButton';

interface SwitchButtonProps {

}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SwitchButton = (props: SwitchButtonProps): ReactElement => {
  return (
    <Container>
      <MosaicButton 
        isPushed 
        appendText
        iconUrl="/media/icons/windows.svg" 
      />
      <MosaicButton 
        isPushed={false}
        iconUrl="/media/icons/menu.svg"
      />
    </Container>
  );
}

export default SwitchButton;