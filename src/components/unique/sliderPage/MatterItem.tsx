import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import AbsoluteContainer from './AbsoluteContainer';

interface MatterItemProps {
  smallIcon: ReactNode;
  bigIcon: ReactNode;
  firstTitle: string;
  secondTitle: string;
  body: string;
}

const ItemContainer = styled.div`
  width: 25%;
  height: 220px;
  background-color: ${Colors.white};
  margin: 25px;
  border-radius: 10px;
  position: relative;
`;


const MatterItem = (props: MatterItemProps) => {
  const { smallIcon, bigIcon, firstTitle, secondTitle, body } = props;
  return (
    <ItemContainer>
      <AbsoluteContainer top={10} left={15}>
        {smallIcon}
      </AbsoluteContainer>
      <AbsoluteContainer top={20} right={15}>
        {bigIcon}
      </AbsoluteContainer>
      <AbsoluteContainer left={15} top={90}>
        <span style={{ fontSize: '1.15vw'}}>{firstTitle}<span style={{ fontWeight: 900}}>{secondTitle}</span></span>
      </AbsoluteContainer>
      <AbsoluteContainer left={15} top={130}>
        <div style={{ paddingRight: 100}}>
          <span style={{ fontSize: '0.9vw' }}>
            {body}
          </span>
        </div>
      </AbsoluteContainer>
    </ItemContainer>
  );
}

export default MatterItem;