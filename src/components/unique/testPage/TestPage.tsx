import React from 'react';
import { Container } from '../../../styledHelpers/TestPageComponents';

interface TestPageProps {

}

const TestPage = (props: TestPageProps) => {
  return (
    <Container>
      <h1>Test Page!</h1>
    </Container>
  );
}

export default TestPage;