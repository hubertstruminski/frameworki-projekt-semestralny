import React, { ReactElement, useEffect, useState } from 'react';
import {
  ButtonContainer,
  Container,
  TextContainer
} from '../../../styledHelpers/MosaicButtonComponents';
import { Colors } from '../../../styledHelpers/Colors';
import { MosaicButtonProps } from '../../../entities/mosaicButton';

const MosaicButton = (props: MosaicButtonProps): ReactElement => {
  const [isEnabled, setIsEnabled] = useState(true);
  const { iconUrl, setIsMosaicLayout } = props;

  const onClick = () => {
    setIsEnabled(!isEnabled);
  }

  useEffect(() => {
    setIsMosaicLayout(isEnabled);
  }, [isEnabled, setIsMosaicLayout]);

  return (
    <Container>
      <ButtonContainer 
        style={{ 
          backgroundColor: 
            isEnabled ? Colors.switchButtonBackgroundColor : Colors.white 
        }}
        onClick={onClick}
      >
        <img
          src={process.env.PUBLIC_URL + iconUrl}
          alt=""
          style={{ width: 15, height: 15, marginRight: 10 }}
        />
        <TextContainer>Mosaic</TextContainer>
      </ButtonContainer>
      <ButtonContainer 
        style={{ 
          backgroundColor: 
            isEnabled ? Colors.white : Colors.switchButtonBackgroundColor
        }}
        onClick={onClick}
      >
        <img
          src={process.env.PUBLIC_URL + '/media/icons/menu.svg'}
          alt=""
          style={{ width: 15, height: 15 }}
        />
      </ButtonContainer>
    </Container>
  );
}

export default MosaicButton;