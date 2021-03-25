import React from 'react';
import './App.css';
import Header from './components/common/header/Header';
import styled from 'styled-components';
import { Colors } from './styledHelpers/Colors';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.background}
`;

function App() {
  return (
    <Container>
      <Header />
    </Container>
    
  );
}

export default App;
