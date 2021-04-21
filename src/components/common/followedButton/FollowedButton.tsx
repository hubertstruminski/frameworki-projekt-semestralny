import React from 'react';
import useDropdown from 'react-dropdown-hook';
import { StoreState } from '../../../store/reducers';
import { connect, useSelector } from 'react-redux';
import { 
  Container,
  ItemContainer,
  SmallerContainer,
  SmallestContainer
} from '../../../styledHelpers/FollowedButtonComponents';
import { Colors } from '../../../styledHelpers/Colors';

interface FollowedButtonProps {
  onClick?: () => {};
  showHamburgerMenu: boolean;
  setSearchTerm: Function;
  isOutline?: boolean;
}

const FollowedButton = (props: FollowedButtonProps) => {
  const { showHamburgerMenu, setSearchTerm, isOutline } = props;
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  
  const userMe = useSelector((state: StoreState) => state.user.user);
  const { name } = userMe;

  const searchResumes = (value: string) => {
    setSearchTerm(value);
    closeDropdown();
  }

  return (
    <div ref={wrapperRef}>
      <Container 
        onClick={toggleDropdown}
        style={{ 
          border: isOutline ? `1.5px solid ${Colors.profileTextColor}` : 'none',
          borderRadius: isOutline ? 5 : undefined,
          padding: isOutline ? 5 : undefined,
          // marginLeft: isOutline ? 20 : undefined
        }}
      >
        (
        <SmallerContainer>(</SmallerContainer>
        <SmallestContainer>o</SmallestContainer>
        <SmallerContainer>)</SmallerContainer>
        ) 
        <div style={{marginLeft: showHamburgerMenu ? 2 : 10, marginTop: 2, fontSize: showHamburgerMenu ? '2.5vw' : '0.9vw'}}>Followed</div>
        <div style={{marginLeft: showHamburgerMenu ? 2 : 10, marginTop: -2}}>
          <img src={process.env.PUBLIC_URL + "/media/icons/arrow-down.svg"} alt="" />
        </div>
      </Container>
      { dropdownOpen &&
        <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', width: '100%'}}>
            <ItemContainer onClick={() => searchResumes(name)}>My</ItemContainer>
            <ItemContainer onClick={() => searchResumes('')}>All</ItemContainer>
          </div>
        </div>
      }
    </div>
  ); 
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { })(FollowedButton);