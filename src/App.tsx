import React from 'react';
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
  height: 100vh;
  background-color: ${Colors.background};
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const store = createStore(reducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Header />
          <Wrapper>
            <LeftMenu />
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/test" component={TestPage}></Route>
            </Switch>
          </Wrapper>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
