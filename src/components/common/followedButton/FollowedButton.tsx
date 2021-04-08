import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import useDropdown from 'react-dropdown-hook';

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

const ItemContainer = styled.div`
  width: 100%;
  background-color: red;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
  
`;

const FollowedButton = (props: FollowedButtonProps) => {
  const { onClick } = props;
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

  return (
    <div ref={wrapperRef}>
      <Container onClick={toggleDropdown}>
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
      { dropdownOpen &&
        <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', width: '100%'}}>
          <ItemContainer>My</ItemContainer>
          <ItemContainer>All</ItemContainer>
        </div>
        </div>
      }
    </div>
  ); 
}

export default FollowedButton;