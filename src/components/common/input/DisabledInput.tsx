import React, { ReactElement } from 'react';
import { inputStyles } from '../../../styledHelpers/DisabledInputComponents';
import { DisabledInputProps } from '../../../entities/disabledInput';

const DisabledInput = (props: DisabledInputProps): ReactElement => {
  const { placeholder } = props;

  return (
    <input
      type="text"
      disabled
      placeholder={placeholder}
      style={inputStyles}
      className="disabledInputFilters"
    />
  );
}

export default DisabledInput;