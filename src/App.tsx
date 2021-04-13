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

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.background};
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: row; */
`;

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [rowFlexDirection, setRowFlexDirection] = useState(true);

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
          <Header showHamburgerMenu={showHamburgerMenu} />
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
            </Switch>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
