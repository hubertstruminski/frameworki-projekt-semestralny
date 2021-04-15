import React, { useLayoutEffect, useState } from 'react';
import './App.css';
import Header from './components/common/header/Header';
import styled from 'styled-components';
import { Colors } from './styledHelpers/Colors';
import LeftMenu from './components/common/leftMenu/LeftMenu';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './store/reducers';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/unique/HomePage';
import TestPage from './components/unique/testPage/TestPage';
import useDropdown from 'react-dropdown-hook';
import DropdownMenu from './components/common/menu/DropdownMenu';
import SliderPage from './components/unique/pages/SliderPage';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.background};
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
`;

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [rowFlexDirection, setRowFlexDirection] = useState(true);

  const [dropdownTitle, setDropdownTitle] = useState('Home');
  const [dropdownUrl, setDropdownUrl] = useState('/media/icons/house2.svg');

  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

  useLayoutEffect(() => {
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const updateLayout = () => {
    if(window.innerWidth < 800) {
      setShowHamburgerMenu(true)
      setRowFlexDirection(false);
    } else {
      setShowHamburgerMenu(false)
      setRowFlexDirection(true);
    }
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header 
            showHamburgerMenu={showHamburgerMenu} 
            wrapperRef={wrapperRef}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
            setDropdownUrl={setDropdownUrl}
            setDropdownTitle={setDropdownTitle}
            dropdownUrl={dropdownUrl}
            dropdownTitle={dropdownTitle}
          />
          { showHamburgerMenu && dropdownOpen &&
            <div style={{position: 'relative', marginTop: 55, zIndex: 1000 }}>
              <div style={{position: 'fixed', width: '100%'}}>
                <DropdownMenu 
                  setDropdownUrl={setDropdownUrl}
                  setDropdownTitle={setDropdownTitle}
                />
              </div>
            </div>
          }
          <Wrapper style={{flexDirection: rowFlexDirection ? 'row' : 'column'}}>
            { !showHamburgerMenu && <LeftMenu showHamburgerMenu={showHamburgerMenu} />}
            <Switch>
              <Route 
                exact 
                path="/" 
                component={() => (
                  <HomePage 
                    showHamburgerMenu={showHamburgerMenu} 
                  />
                )}
              ></Route>
              <Route exact path="/test" component={() => (<TestPage />)}></Route>
              <Route 
                exact
                path="/sliderItem" 
                component={() => (
                  <SliderPage 
                    showHamburgerMenu={showHamburgerMenu} 
                  />
                )}
              />
            </Switch>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
