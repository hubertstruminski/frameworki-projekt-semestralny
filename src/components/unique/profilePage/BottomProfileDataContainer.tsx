import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import InlineProperties from './InlineProperties';
import PanelInformations from './panelInformations/PanelInformations';
import Properties from './Properties';
import Proposals from './proposals/Proposals';

interface BottomProfileDataContainerProps {

}

const Container = styled.div`
  width: 50%;
  border-right: 1px solid ${Colors.subProfileTextColor};
  border-left: 1px solid ${Colors.subProfileTextColor};
  border-bottom: 1px solid ${Colors.subProfileTextColor};
  padding-top: 10px;
  margin-bottom: 30px;
`;

const BorderDiv = styled.div`
  border-top: 1px solid ${Colors.subProfileTextColor};
  width: 100%;
  margin-top: 15px;
`;

const BottomProfileDataContainer = (props: BottomProfileDataContainerProps) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <Container>
      <Properties 
        isFormVisible={isFormVisible} 
        setIsFormVisible={setIsFormVisible}
      />
      <BorderDiv />
      <PanelInformations isFormVisible={isFormVisible} />
      <BorderDiv />
      <Proposals isFormVisible={isFormVisible} />
    </Container>
  );
}

export default BottomProfileDataContainer;