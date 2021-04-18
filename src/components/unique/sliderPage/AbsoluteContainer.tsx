import React, { ReactNode } from 'react';

interface AbsoluteContainerProps {
  children: ReactNode
  right?: number;
  top?: number;
  left?: number;
}

const AbsoluteContainer = (props: AbsoluteContainerProps) => {
  const { children, right, top, left } = props;
  return (
    <div 
      style={{ 
        position: 'absolute', 
        right: right,
        top: top,
        left: left
      }}
    >
      { children }
    </div>
  );
}

export default AbsoluteContainer;