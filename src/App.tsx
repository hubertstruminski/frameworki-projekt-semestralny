import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import styled from 'styled-components';
import { Colors } from './styledHelpers/Colors';
import LeftMenu from './components/common/leftMenu/LeftMenu';


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

function App() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftMenu />
      </Wrapper>
    </Container>
    
  );
}

export default App;
