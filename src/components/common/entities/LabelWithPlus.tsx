import React, { ReactElement } from 'react';
import {  
  LabelText
} from '../../../styledHelpers/ExpandableFiltersComponents';
import { LabelWithPlusProps } from '../../../entities/labelWithPlus';
import { rotatedPlusStyles } from '../../../styledHelpers/LabelWithPlusComponents';

const LabelWithPlus = (props: LabelWithPlusProps): ReactElement => {
  const { title } = props;

  return (
    <React.Fragment>
      <img 
        src={process.env.PUBLIC_URL + '/media/icons/plus.svg'}
        alt=""
        style={rotatedPlusStyles}
      />
      <LabelText>{title}</LabelText>
    </React.Fragment>
  );
}

export default LabelWithPlus;