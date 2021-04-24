import React, { ReactElement, useState } from 'react';
import {
  BorderDiv,
  Container
} from '../../../styledHelpers/BottomProfileDataContainerComponents';
import PanelInformations from './panelInformations/PanelInformations';
import Properties from './Properties';
import AmountFees from './proposals/AmountFees';
import InternalReviews from './proposals/InternalReviews';
import Proposals from './proposals/Proposals';
import { BottomProfileDataContainerProps } from '../../../entities/bottomProfileDataContainer';

const BottomProfileDataContainer = (props: BottomProfileDataContainerProps): ReactElement => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { width } = props;

  return (
    <Container style={{ width: width }}>
      <Properties 
        isFormVisible={isFormVisible} 
        setIsFormVisible={setIsFormVisible}
      />
      <BorderDiv />
      <PanelInformations isFormVisible={isFormVisible} />
      <BorderDiv />
      <Proposals isFormVisible={isFormVisible} />
      <BorderDiv />
      <InternalReviews isFormVisible={isFormVisible} />
      <BorderDiv />
      <AmountFees isFormVisible={isFormVisible} />
    </Container>
  );
}

export default BottomProfileDataContainer;