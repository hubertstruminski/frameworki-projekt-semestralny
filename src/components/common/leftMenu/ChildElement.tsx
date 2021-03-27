import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface ChildElementProps {
  leftIconPath: string;
  title: string;
  rightIconPath?: string;
  withRightIcon: boolean;
}

const Container = styled.div`
  width: '100%';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const RightIconContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding-right: 7.5px;
  padding-left: 7.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
`;

const ChildElement = (props: ChildElementProps): ReactElement => {
  const { 
    leftIconPath, 
    title, 
    rightIconPath, 
    withRightIcon 
  } = props;

  return (
    <Container>
      <img src={process.env.PUBLIC_URL + leftIconPath} alt="" />
      <span>{title}</span>
      { withRightIcon ? (
          <RightIconContainer>
            <img src={process.env.PUBLIC_URL + rightIconPath} alt="" />
          </RightIconContainer>
        ) : null
      }
    </Container>
  );
}

export default ChildElement;