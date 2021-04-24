import React, { ReactElement } from 'react';
import {  
  LabelText
} from '../../../styledHelpers/ExpandableFiltersComponents';
import { LabelWithPlusProps } from '../../../entities/labelWithPlus';

const LabelWithPlus = (props: LabelWithPlusProps): ReactElement => {
  const { title } = props;
  
  const rotatedPlusStyles = {
    width: 20,
    height: 20,
    transform: 'rotate(45deg)',
    marginRight: 5
  }  

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