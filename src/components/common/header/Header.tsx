import React, { ReactElement } from 'react';
import { HeaderProps } from '../../../entities/headerInterfaces/header';
import styled from 'styled-components';
import house2 from '../../../svgs/house2';
import { Colors } from '../../../styledHelpers/Colors';
import house from '../../../svgs/house';
import comments from '../../../svgs/comments';
import bell from '../../../svgs/bell';

const Container = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  height: 50px;
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

const Logo = styled.img`
  width: 25px;
  height: 25px;
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

const Header = (props: HeaderProps): ReactElement => {
  return (
    <Container>
      <PartialContainer>
        <Logo src="" />
        { house2() }
        <TextContainer>Home</TextContainer>
      </PartialContainer>
      <PartialContainer>
        
      </PartialContainer>
      <PartialContainer>
        <CircleWhiteDiv>
          { house() }
        </CircleWhiteDiv>  
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          { comments() }
        </CircleDiv>   
        <CircleDiv>
          <CounterContainer>3</CounterContainer>
          { bell() }
        </CircleDiv>   
      </PartialContainer>
    </Container>
  );
}

export default Header;
