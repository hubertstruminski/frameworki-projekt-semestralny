import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { inputStyles } from '../../../styledHelpers/ProfileDataFormComponents';
import { Colors } from '../../../styledHelpers/Colors';
import { cancelIconStyles, buttonStyles } from '../../../styledHelpers/InlinePropertiesComponents';

interface InlinePropertiesProps {
  data: string[];
  isMainElement?: boolean;
  setState?: Function;
  isFormVisible: boolean;
}

const WrapInlineContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ItemContainer = styled.div`
  background-color: ${Colors.profilePropertiesBackground};
  color: ${Colors.profilePropertiesColor};
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InlineProperties = (props: InlinePropertiesProps) => {
  const [newElement, setNewElement] = useState('');

  const { data, isMainElement, setState, isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    if(setState) {
      setState((data: string[]) => data.filter((item: string, index: number): boolean => index !== indexToRemove));
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNewElement(newValue);
  }

  const onSubmit = () => {
    if(setState) {
      setState((oldArray: string[]) => [...oldArray, newElement]);
      setNewElement('');
    }
  }

  const renderItems = (): ReactNode => {
    return data.map((item: string, index: number): ReactNode => {
      return (
        <ItemContainer 
          key={index}
          style={{ 
            marginLeft: isMainElement ? 20 : undefined,
          }}
          
        >
          <div style={{ marginRight: isFormVisible ? 5 : undefined }}>{item}</div>
          { isFormVisible ?
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/plus.svg'} 
              style={cancelIconStyles}
              alt=""
              onClick={() => onRemoveItem(index)}
            /> : null
          }
        </ItemContainer>
      );
    });
  }

  return (
    <>
      <WrapInlineContainer>
        { renderItems() }
      </WrapInlineContainer>
      <div style={{ marginLeft: isMainElement ? 20 : undefined }}>
        { isFormVisible && (
          <>
            <input 
              type="text" 
              value={newElement} 
              onChange={onChange} 
              style={inputStyles}
            />
            <button 
              onClick={() => onSubmit()}
              style={buttonStyles}
            >
              Add
            </button>
          </>
        )}
      </div>
    </>
  );
}

InlineProperties.defaultProps = {
  isFormVisible: false
}

export default InlineProperties;