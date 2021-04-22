import React, { ReactElement } from 'react';
import { Colors } from '../../../styledHelpers/Colors';

interface DisabledInputProps {
  placeholder: string;
}

const DisabledInput = (props: DisabledInputProps): ReactElement => {
  const { placeholder } = props;

  const inputStyles = {
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.subProfileTextColor,
    border: 'none',
    width: '20%',
    marginRight: 10
  }

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