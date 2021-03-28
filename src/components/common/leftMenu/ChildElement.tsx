import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface ChildElementProps {
  leftIconPath: string;
  title: string;
  rightIconPath?: string;
  withRightIcon: boolean;
  marginBottom?: number;
  navigateTo: string;
}

const Container = styled.div`
  width: '100%';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RightIconContainer = styled.div`
  border: 1px solid ${Colors.black};
  border-radius: 5px;
  padding-right: 7.5px;
  padding-left: 7.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
`;

const TitleContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  font-size: ${fontSize[16]};
  font-weight: 700;
  color: ${Colors.profileItemTextColor};
`;

const ChildElement = (props: ChildElementProps): ReactElement => {
  const { 
    leftIconPath, 
    title, 
    rightIconPath, 
    withRightIcon,
    marginBottom,
    navigateTo
  } = props;

  return (
    <Link to={navigateTo} style={{ textDecoration: 'none' }}>
      <Container style={{ marginBottom: marginBottom ? marginBottom : 0}}>
        <img src={process.env.PUBLIC_URL + leftIconPath} alt="" />
        <TitleContainer>{title}</TitleContainer>
        { withRightIcon ? (
            <RightIconContainer>
              <img src={process.env.PUBLIC_URL + rightIconPath} alt="" />
            </RightIconContainer>
          ) : null
        }
      </Container>
    </Link>
    
  );
}

export default ChildElement;