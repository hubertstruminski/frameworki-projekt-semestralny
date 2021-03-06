import React, { ReactElement, useState } from 'react';
import {
  TitleSpan,
  ValueSpan,
  inputStyles
} from '../../../styledHelpers/SentenceComponentComponents';
import { Colors } from '../../../styledHelpers/Colors';
import { SentenceComponentProps } from '../../../entities/sentenceComponent';

const SentenceComponent = (props: SentenceComponentProps): ReactElement => {
  const { 
    title, 
    value, 
    color, 
    fontSize, 
    isBold,
    isFormVisible,
    isMainElement 
  } = props;

  const [valueForm, setValueForm] = useState(value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValueForm(newValue);
  }

  return (
    <React.Fragment>
      <TitleSpan
        style={{
          color: color ? color : Colors.subProfileTextColor,
          fontSize: fontSize ? fontSize : '0.85vw',
          fontWeight: isBold ? 700 : undefined
        }}
      >
        {title}
      </TitleSpan>
      <ValueSpan>{valueForm}</ValueSpan>
      <div style={{ marginLeft: isMainElement ? 20 : undefined }}>
        { isFormVisible && (
          
          <input 
            type="text" 
            value={valueForm} 
            onChange={onChange} 
            style={inputStyles}
          />
        )}
      </div>
    </React.Fragment>
  );
}

export default SentenceComponent;