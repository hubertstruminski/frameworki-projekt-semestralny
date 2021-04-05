import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface FollowedButtonProps {
  onClick?: () => {}
}

const Container = styled.div`
  background-color: transparent;
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: ${fontSize[16]};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SmallerContainer = styled.div`
  font-size: ${fontSize[14]};
`;

const SmallestContainer = styled.div`
  font-size: ${fontSize[12]};
`;

const FollowedButton = (props: FollowedButtonProps) => {
  const { onClick } = props;
  return (
    <Container onClick={onClick}>
      (
      <SmallerContainer>(</SmallerContainer>
      <SmallestContainer>o</SmallestContainer>
      <SmallerContainer>)</SmallerContainer>
      ) 
      <div style={{marginLeft: 10, marginTop: 2}}>Followed</div>
      <div style={{marginLeft: 10, marginTop: -2}}>
        <img src={process.env.PUBLIC_URL + "/media/icons/arrow-down.svg"} alt="" />
      </div>
    </Container>
  ); 
}

export default FollowedButton;