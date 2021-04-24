import React, { ReactElement } from 'react';
import {
  MainTitle
} from '../../../../styledHelpers/PanelInformationsComponents';
import { Colors } from '../../../../styledHelpers/Colors';
import Correspondants from './Correspondants';
import FileTaker from './FileTaker';
import SentenceComponent from '../../../common/profile/SentenceComponent';
import { PanelInformationsProps } from '../../../../entities/panelInformations';

const PanelInformations = (props: PanelInformationsProps): ReactElement => {
  const { isFormVisible } = props;
  return (
    <React.Fragment>
      <MainTitle>
        Panel informations
      </MainTitle>
      <SentenceComponent 
        title="Hourly fee"
        value="610E/hour (Negociated)"
        isFormVisible={isFormVisible}
      />
      <SentenceComponent 
        title="Terms & conditions"
        value="Monthly 10kE retainer - see with Jeanny Smith"
        isFormVisible={isFormVisible}
      />
      <FileTaker 
        isFormVisible={isFormVisible}
      />
      <SentenceComponent 
        title="Services & projects"
        value="Corporate M&A and international acquisitions"
        color={Colors.black}
        fontSize="0.9vw"
        isBold
        isFormVisible={isFormVisible}
      />
      <Correspondants isFormVisible={isFormVisible} />
    </React.Fragment>
  );
}

export default PanelInformations;