import React, { ReactElement, useEffect } from 'react';
import { HeaderProps } from '../../../entities/headerInterfaces/header';
import house2 from '../../../svgs/house2';
import HeaderInput from './HeaderInput';
import { Link } from 'react-router-dom';
import { 
  Container,
  PartialContainer,
  TextContainer,
  ArrowDownMenuContainer,
  CircleDiv,
  CircleWhiteDiv,
  CounterContainer
} from '../../../styledHelpers/HeaderComponents';


const Header = (props: HeaderProps): ReactElement => {
  const { showHamburgerMenu } = props;
  
  useEffect(() => {
    
  }, []);

  return (
    <Container>
      <PartialContainer>
        <img style={{ margin: '15px' }} src={process.env.PUBLIC_URL + '/media/logo.png'} alt="" width="35" height="35" />
        { house2() }
        <TextContainer style={{margin: '15px'}}>
          <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
        </TextContainer>
        <ArrowDownMenuContainer style={{ width: showHamburgerMenu ? 50 : 150}}>
          <img src={process.env.PUBLIC_URL + '/media/icons/arrow-down.svg'} alt="" />
        </ArrowDownMenuContainer>
      </PartialContainer>
      { !showHamburgerMenu && <HeaderInput /> }
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

