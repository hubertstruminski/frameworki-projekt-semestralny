import React, { ReactElement } from 'react';
import {
  ItemContainer
} from '../../../styledHelpers/MatterItemComponents';
import AbsoluteContainer from './AbsoluteContainer';
import { MatterItemProps } from '../../../entities/matterItem';

const MatterItem = (props: MatterItemProps): ReactElement => {
  const { 
    smallIcon, 
    bigIcon, 
    firstTitle, 
    secondTitle, 
    body, 
    minHeight,
    isSmallScreen
  } = props;

  return (
    <ItemContainer 
      style={{ 
        minHeight: minHeight,
        fontSize: isSmallScreen ? '2.5vw' : '1.2vw'
      }}
    >
      <AbsoluteContainer top={10} left={15}>
        {smallIcon}
      </AbsoluteContainer>
      <AbsoluteContainer top={isSmallScreen ? 75 : 20} right={15}>
        {bigIcon}
      </AbsoluteContainer>
      <AbsoluteContainer left={15} top={90}>
        <span style={{ fontSize: '1.15vw'}}>{firstTitle}<span style={{ fontWeight: 900}}>{secondTitle}</span></span>
      </AbsoluteContainer>
      <AbsoluteContainer left={15} top={130}>
        <div style={{ paddingRight: 50}}>
          <span style={{ fontSize: '0.9vw' }}>
            {body}
          </span>
        </div>
      </AbsoluteContainer>
    </ItemContainer>
  );
}

export default MatterItem;