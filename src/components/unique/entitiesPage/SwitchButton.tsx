import React, { ReactElement } from 'react';
import styled from 'styled-components';
import MosaicButton from './MosaicButton';

interface SwitchButtonProps {
  isMosaicLayout: boolean;
  setIsMosaicLayout: Function;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const SwitchButton = (props: SwitchButtonProps): ReactElement => {
  const { isMosaicLayout, setIsMosaicLayout } = props;
  return (
    <Container>
      <MosaicButton 
        isPushed={isMosaicLayout} 
        appendText
        iconUrl="/media/icons/windows.svg" 
        setIsMosaicLayout={setIsMosaicLayout}
      />
      <MosaicButton 
        isPushed={!isMosaicLayout}
        iconUrl="/media/icons/menu.svg"
        setIsMosaicLayout={setIsMosaicLayout}
      />
    </Container>
  );
}

export default SwitchButton;