import React, { ReactElement } from 'react';
import { inputStyles } from '../../../styledHelpers/DisabledInputComponents';

interface DisabledInputProps {
  placeholder: string;
}

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