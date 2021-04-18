import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface BarItemProps {
 isIconVisible?: boolean;
 icon?: ReactNode;
 color: string;
 backgroundColor: string;
 title: string;
 isMargin?: boolean;
}

const Container = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  /* margin: 10px; */
  border-radius: 5px;
`;

const BarItem = (props: BarItemProps) => {
  const { 
    isIconVisible, 
    icon,
    color, 
    backgroundColor,
    title,
    isMargin
  } = props;

  return (
    <Container 
      style={{ 
        backgroundColor: backgroundColor,
        margin: isMargin ? 0 : 10,
        marginRight: isMargin ? 10 : undefined
      }}
    >
      { isIconVisible &&
        <div style={{ marginRight: 10 }}>
          { icon }
        </div>
      }
      <div style={{ color: color }}>
        {title}
      </div>
    </Container>
  );
}

BarItem.defaultProps = {
  isIconVisible: true
}

export default BarItem;