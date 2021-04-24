import React, { ReactElement, ReactNode, useState } from 'react';
import {
  ImgContainer,
  Item,
  ItemContainer,
  RowContainer,
  TextSpan,
  TitleSpan
} from '../../../../styledHelpers/CorrespondantsComponents';
import { inputStyles } from '../../../../styledHelpers/ProfileDataFormComponents';
import { cancelIconStyles, buttonStyles } from '../../../../styledHelpers/InlinePropertiesComponents';
import { CorrespondantsProps } from '../../../../entities/correspondants';
import { CORRESPONDANTS_DATA } from '../../../../mocks/correspondantsMocks';

const Correspondants = (props: CorrespondantsProps): ReactElement => {
  const [people, setPeople] = useState(CORRESPONDANTS_DATA);
  const [newElement, setNewElement] = useState('');

  const { isFormVisible } = props;

  const imgStyles = {
    width: 20, 
    height: 20, 
    marginRight: 5
  }

  const onRemoveItem = (indexToRemove: number) => {
    setPeople((data: string[]) => data.filter((item: string, index: number): boolean => index !== indexToRemove));
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNewElement(newValue);
  }

  const onSubmit = () => {
    setPeople((oldArray: string[]) => [...oldArray, newElement]);
    setNewElement('');
  }

  const renderList = (): ReactNode => {
    return people.map((person: string, index: number): ReactNode => {
      return (
        <ItemContainer>
          <RowContainer>
            <ImgContainer />
            <TextSpan>{person}</TextSpan>
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/comments.svg'}
              alt=""
              style={imgStyles}
            />
            <Item>Message</Item>
            <img 
              src={process.env.PUBLIC_URL + '/media/icons/people.svg'}
              alt=""
              style={imgStyles}
            />
            <Item>Profile</Item>
          </RowContainer>
          { isFormVisible &&
            <img
              src={process.env.PUBLIC_URL + '/media/icons/plus.svg'} 
              alt=""
              style={cancelIconStyles}
              onClick={() => onRemoveItem(index)}
            />
          }
        </ItemContainer>
      );
    });
  }
  
  return (
    <React.Fragment>
      <TitleSpan>Internal correspondants</TitleSpan>
      { renderList() }
      <div style={{ marginLeft: 20 }}>
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
    </React.Fragment>
  );
}

export default Correspondants;