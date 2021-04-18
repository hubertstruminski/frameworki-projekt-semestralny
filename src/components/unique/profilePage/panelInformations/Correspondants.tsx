import React, { ReactElement, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { inputStyles } from '../../../../styledHelpers/ProfileDataFormComponents';
import { cancelIconStyles, buttonStyles } from '../../../../styledHelpers/InlinePropertiesComponents';

interface CorrespondantsProps {
  isFormVisible: boolean;
}

const TitleSpan = styled.div` 
  margin-top: 20px;
  margin-left: 20px;
  font-weight: 700;
  color: ${Colors.black};
  font-size: 0.9vw;
`;

const ItemContainer = styled.div`
  background-color: ${Colors.subProfileTextColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const ImgContainer = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const TextSpan = styled.div`
  color: ${Colors.black};
  font-weight: 700;
  font-size: 0.9vw;
  margin-right: 25px;
`;

const Item = styled.div`
  color: ${Colors.black};
  font-size: 0.8vw;
  margin-right: 20px;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Correspondants = (props: CorrespondantsProps): ReactElement => {
  const [people, setPeople] = useState([
    'Firstname Lastname',
    'Firstname Lastname'
  ]);
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