import React, { ChangeEvent, ReactElement, useState } from 'react';
import { inputStyles } from '../../../styledHelpers/DisabledInputComponents';
import { DisabledInputProps } from '../../../entities/disabledInput';
import '../../../styledHelpers/disabledInput.css';

const DisabledInput = (props: DisabledInputProps): ReactElement => {
  const [value, setValue] = useState('');
  const { placeholder } = props;

  return (
    <input
      type="text"
      placeholder={placeholder}
      style={inputStyles}
      value={value}
      className="disabledInputFilters"
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
    />
  );
}

export default DisabledInput;