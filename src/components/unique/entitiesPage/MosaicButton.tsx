import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface MosaicButtonProps {
  isPushed: boolean;
  appendText?: boolean;
  iconUrl: string;
  setIsMosaicLayout: Function;
}

const Container = styled.div`
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
  const { isPushed, appendText, iconUrl, setIsMosaicLayout } = props;

  const onClick = () => {
    setIsMosaicLayout(isPushed);
  }

  return (
    <Container 
      style={{ 
        backgroundColor: 
          isPushed ? Colors.switchButtonBackgroundColor : Colors.white 
      }}
      onClick={onClick}
    >
      <img
        src={process.env.PUBLIC_URL + iconUrl}
        alt=""
        style={{ 
          width: 15, 
          height: 15, 
          marginRight: appendText ? 10 : undefined
        }}
      />
      { appendText &&
        <TextContainer>Mosaic</TextContainer>
      }
    </Container>
  );
}

export default MosaicButton;