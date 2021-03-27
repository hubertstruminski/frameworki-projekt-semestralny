import React, { ReactElement, useEffect } from 'react';
import { HeaderProps } from '../../../entities/headerInterfaces/header';
import styled from 'styled-components';
import house2 from '../../../svgs/house2';
import { Colors } from '../../../styledHelpers/Colors';
import HeaderInput from './HeaderInput';

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  height: 55px;
  position: fixed;
  margin-top: 0;
  box-shadow: 0px 5px 2px ${Colors.headerShadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PartialContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const CircleDiv = styled.div`
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${Colors.headerCircleGrayBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  position: relative;
`;

const TextContainer = styled.div`
  color: ${Colors.black};
`;

const CircleWhiteDiv = styled(CircleDiv)`
  background-color: ${Colors.white};
`;

const CounterContainer = styled.div`
  width: 20px;
  height: 15px;
  background-color: ${Colors.headerCounters};
  position: absolute;
  top: -5px;
  right: -4px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  z-index: 1000;
`;

const ArrowDownMenuContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;  

const Header = (props: HeaderProps): ReactElement => {
  
  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <PartialContainer>
        <img style={{ margin: '15px' }} src={process.env.PUBLIC_URL + '/media/logo.png'} alt="" width="35" height="35" />
        { house2() }
        <TextContainer style={{margin: '15px'}}>Home</TextContainer>
        <ArrowDownMenuContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/arrow-down.svg'} alt="" />
        </ArrowDownMenuContainer>
      </PartialContainer>
      <HeaderInput />
      <PartialContainer>
        <CircleWhiteDiv>
          <img src={process.env.PUBLIC_URL + '/media/icons/house.svg'} alt="" />
        </CircleWhiteDiv>  
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/comments.svg'} alt="" />
        </CircleDiv>   
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/bell.svg'} alt="" />
        </CircleDiv>   
      </PartialContainer>
    </Container>
  );
}

export default Header;

