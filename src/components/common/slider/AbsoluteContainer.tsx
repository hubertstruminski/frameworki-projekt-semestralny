import React, { ReactElement } from 'react';
import { AbsoluteContainerProps } from '../../../entities/absoluteContainer';

const AbsoluteContainer = (props: AbsoluteContainerProps): ReactElement => {
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