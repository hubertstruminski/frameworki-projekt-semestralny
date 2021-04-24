import React, { ReactElement } from 'react';
import { Container } from '../../../styledHelpers/BarItemComponents';
import { BarItemProps } from '../../../entities/barItem';

const BarItem = (props: BarItemProps): ReactElement => {
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