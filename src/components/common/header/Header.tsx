import React, { ReactElement } from 'react';
import { HeaderProps } from '../../../entities/header';
import HeaderInput from './HeaderInput';
import { Link, withRouter } from 'react-router-dom';
import { 
  Container,
  PartialContainer,
  TextContainer,
  ArrowDownMenuContainer,
  CircleDiv,
  CircleWhiteDiv,
  CounterContainer
} from '../../../styledHelpers/HeaderComponents';
import DropdownMenu from '../menu/DropdownMenu';

const Header = (props: HeaderProps): ReactElement => {
  const { 
    showHamburgerMenu, 
    wrapperRef, 
    toggleDropdown,
    dropdownOpen,
    dropdownTitle,
    dropdownUrl,
    setDropdownTitle,
    setDropdownUrl,
    history
  } = props;

  const arrowDownContainerStyles = {
    width: showHamburgerMenu ? 50 : 250,
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  }

  const onClick = () => {
    history.push({ pathname: '/test' });
  }

  return (
    <Container>
      <PartialContainer>
        <img 
          style={{ margin: '15px', cursor: 'pointer' }} 
          src={process.env.PUBLIC_URL + '/media/logo.png'} 
          alt="" 
          width="35" 
          height="35"
          onClick={onClick} 
        />
        <div ref={wrapperRef}>
          <ArrowDownMenuContainer 
            style={arrowDownContainerStyles}
            onClick={toggleDropdown}
          >
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
              <img src={process.env.PUBLIC_URL + dropdownUrl} alt="" />
              <TextContainer style={{margin: '15px'}}>
                <Link style={{ textDecoration: 'none' }} to="/">{dropdownTitle}</Link>
              </TextContainer>
            </div>
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/arrow-down.svg'} 
              alt=""
            />
          </ArrowDownMenuContainer>
          { !showHamburgerMenu && dropdownOpen &&
            <div style={{position: 'relative', zIndex: 1000}}>
              <div style={{position: 'absolute', width: 250}}>
                <DropdownMenu 
                  setDropdownUrl={setDropdownUrl}
                  setDropdownTitle={setDropdownTitle}
                />
              </div>
            </div>
          }
        </div>
      </PartialContainer>
      { !showHamburgerMenu && <HeaderInput /> }
      <PartialContainer>
        <CircleWhiteDiv
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        >
          <img src={process.env.PUBLIC_URL + '/media/icons/house.svg'} alt="" />
        </CircleWhiteDiv>  
        <CircleDiv
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        >
          <CounterContainer>3</CounterContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/comments.svg'} alt="" />
        </CircleDiv>   
        <CircleDiv
          style={{ cursor: 'pointer' }}
          onClick={onClick}
        >
          <CounterContainer>3</CounterContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/bell.svg'} alt="" />
        </CircleDiv>   
      </PartialContainer>
    </Container>
  );
}

export default withRouter(Header);

