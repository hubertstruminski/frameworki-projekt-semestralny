import React, { ReactElement } from 'react';
import styled from 'styled-components';
import {
  LabelText
} from '../../../styledHelpers/ExpandableFiltersComponents';
import ArrowDown from '../../../svgs/arrowDown';

interface ArrowDownContainerProps {
  title: string;
  isJSComponent?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

const ArrowDownContainer = (props: ArrowDownContainerProps): ReactElement => {
  const { title, isJSComponent } = props;
  
  return (
    <Container>
      <LabelText style={{ color: isJSComponent ? 'blue' : 'black'}}>{title}</LabelText>
      { !isJSComponent ? (
        <img
          src={process.env.PUBLIC_URL + '/media/icons/arrow-down.svg'}
          alt=""
          style={{ width: 10, height: 10 }}
        /> ) : (
          <ArrowDown fill="blue" width="10" height="10" />
        )
      }
    </Container>
  );
}

export default ArrowDownContainer;