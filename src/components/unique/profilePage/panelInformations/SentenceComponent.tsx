import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

interface SentenceComponentProps {
 title: string;
 value: string;
 color?: string;
 fontSize?: string;
 isBold?: boolean;
 isFormVisible: boolean;
 isMainElement?: boolean;
}

const TitleSpan = styled.div` 
  margin-top: 20px;
  margin-left: 20px;
`;

const ValueSpan = styled.div`
  color: ${Colors.black};
  margin-left: 20px;
  margin-top: 10px;
  font-size: 0.85vw;
`;

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
  
  const cancelIconStyles = {
    width: 20,
    height: 20,
    transform: 'rotate(45deg)',
    cursor: 'pointer'
  }

  const inputStyles = {
    border: 'none',
    color: `${Colors.subProfileTextColor}`,
    padding: 5,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 10
  }

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