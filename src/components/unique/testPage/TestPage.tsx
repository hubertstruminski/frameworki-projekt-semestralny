import React from 'react';
import styled from 'styled-components';

interface TestPageProps {

}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestPage = (props: TestPageProps) => {
  return (
    <Container>
      <h1>Test Page!</h1>
    </Container>
  );
}

export default TestPage;