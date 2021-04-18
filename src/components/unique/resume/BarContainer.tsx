import React from 'react';
import styled from 'styled-components';
import BarItem from './BarItem';
import Entities2 from '../../../svgs/entities2';
import Comments from '../../../svgs/comments';
import Ecosystem from '../../../svgs/ecosystem';
import Bell from '../../../svgs/bell';

interface BarContainerProps {

}

export interface IBarItem {
  isIconVisible: boolean;
  color: string;
  backgroundColor: string;
  title: string;
}

const Container = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BarContainer = (props: BarContainerProps) => {
  return (
    <Container>
      <BarItem 
        isIconVisible={false} 
        color="#2E439F" 
        backgroundColor="#EAECF5"
        title="All"
      />
      <BarItem
        icon={<Entities2 fill="#399C39" />}  
        color="#399C39" 
        backgroundColor="#CCE5CC"
        title="SAS"
      />
      <BarItem 
        icon={<Entities2 fill="#3B9DCC" />}  
        color="#3B9DCC" 
        backgroundColor="#EDF6FA"
        title="SARL"
      />
      <BarItem 
        icon={<Entities2 fill="#D9AE4B" />}  
        color="#D9AE4B" 
        backgroundColor="#F2E5C4"
        title="Secondary business"
      />
      <BarItem
        icon={<Comments fill="#555B6F" />}   
        color="#555B6F" 
        backgroundColor="#CCCCCC"
        title="Communities"
      />
      <BarItem
        icon={<Ecosystem fill="#878C9A" />}  
        color="#878C9A" 
        backgroundColor="#E8E8E8"
        title="POA"
      />
      <BarItem
        icon={<Bell fill="#858A99" />}   
        color="#858A99" 
        backgroundColor="#FFFFFF"
        title="Survey"
      />
      <BarItem
        isIconVisible={false} 
        color="black" 
        backgroundColor="#FFFFFF"
        title="..."
      />
    </Container>
  );
}

export default BarContainer;