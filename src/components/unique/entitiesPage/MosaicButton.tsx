import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface MosaicButtonProps {
  iconUrl: string;
  setIsMosaicLayout: Function;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid ${Colors.subProfileTextColor};
  cursor: pointer;
`;

const TextContainer = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: 0.75vw;
`;

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