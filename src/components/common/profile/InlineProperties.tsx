import React, { ReactNode, useState } from 'react';
import { 
  ItemContainer,
  WrapInlineContainer,
  buttonStyles,
  cancelIconStyles
} from '../../../styledHelpers/InlinePropertiesComponents';
import { inputStyles } from '../../../styledHelpers/ProfileDataFormComponents';

interface InlinePropertiesProps {
  data: string[];
  isMainElement?: boolean;
  setState?: Function;
  isFormVisible: boolean;
}

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
          <div style={{ width: isMainElement ? '30%' : undefined }}>
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
          </div>
        )}
      </div>
    </>
  );
}

InlineProperties.defaultProps = {
  isFormVisible: false
}

export default InlineProperties;