import React, { ChangeEvent, ReactElement, ReactNode, useState } from 'react';
import { Colors } from '../../../../styledHelpers/Colors';
import {
  Cell,
  Container,
  Row,
  TableContainer,
  TableWrapper,
  ThCell,
  TitleContainer,
  buttonStyles,
  inputStyles
} from '../../../../styledHelpers/ProposalsComponents';
import { MoreContainer } from '../../../../styledHelpers/InternalReviewsComponents';
import { InternalReviewsProps, Review } from '../../../../entities/internalReviews';

const REVIEW_DATA: Review[] = [
  { name: 'Operation Tindeen', entity: 'Renault Cordova', location: 'France', expertise: '#Tax', date: '20/01/2018' },
  { name: 'Op. Prometheus', entity: 'Renault HQ', location: 'USA', expertise: '#M&A', date: '18/02/2019' },
  { name: 'Op. Latandre', entity: 'Renault Brno', location: 'Italia', expertise: '#Social', date: '18/02/2019' },
];

const InternalReviews = (props: InternalReviewsProps): ReactElement => {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [location, setLocation] = useState('');
  const [expertise, setExpertise] = useState('');
  const [date, setDate] = useState('');

  const [reviews, setReviews] = useState(REVIEW_DATA);
  const { isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    setReviews((data: Review[]) => data.filter((review: Review, index: number): boolean => index !== indexToRemove));
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.currentTarget.value;
    switch(index) {
      case 1:
        setName(newValue);
        break;
      case 2:
        setEntity(newValue);
        break;
      case 3:
        setLocation(newValue);
        break;
      case 4:
        setExpertise(newValue);
        break;
      case 5:
        setDate(newValue);
        break;
    }
  }

  const renderRows = (): ReactNode=> {
    return reviews.map((review: Review, index: number): ReactNode => {
      const { date, entity, expertise, location, name } = review;
      return (
        <Row>
          <Cell>{name}</Cell>
          <Cell>{entity}</Cell>
          <Cell>{location}</Cell>
          <Cell>{expertise}</Cell>
          <Cell>{date}</Cell>
          { isFormVisible &&
            <Cell>
              <img 
                src={process.env.PUBLIC_URL + '/media/icons/plus.svg'}
                alt=""
                style={{ width: 20, height: 20, transform: `rotate(45deg)` }}
                onClick={() => onRemoveItem(index)}
              />
            </Cell>  
          }
        </Row>
      );
    });
  }

  const onSubmit = () => {
    const newElement = {
      name: name, 
      entity: entity, 
      location: location, 
      expertise: expertise, 
      date: date, 
    }
    setReviews((oldArray: Review[]) => [...oldArray, newElement]);
    setName('');
    setEntity('');
    setLocation('');
    setExpertise('');
    setDate('');
  }
  
  return (
    <Container>
      <TitleContainer>Internal reviews</TitleContainer>
      <TableWrapper>
        <TableContainer>
          <Row style={{ borderBottom: `1px solid ${Colors.subProfileTextColor}`}}>
            <ThCell>Name</ThCell>
            <ThCell>Entity</ThCell>
            <ThCell>Location</ThCell>
            <ThCell>Expertise</ThCell>
            <ThCell>Date</ThCell>
            { isFormVisible &&
              <ThCell>Delete</ThCell>
            }
          </Row>
          { renderRows() }
        </TableContainer>
        { isFormVisible &&
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
            <input type="text" placeholder="Name..." style={inputStyles} value={name} onChange={(e) => onChange(e, 1)} />
            <input type="text" placeholder="Entity..." style={inputStyles} value={entity} onChange={(e) => onChange(e, 2)} />
            <input type="text" placeholder="Location..." style={inputStyles} value={location} onChange={(e) => onChange(e, 3)} />
            <input type="text" placeholder="Expertise..." style={inputStyles} value={expertise} onChange={(e) => onChange(e, 4)} />
            <input type="text" placeholder="Date..." style={inputStyles} value={date} onChange={(e) => onChange(e, 5)} />
            <button style={buttonStyles} onClick={onSubmit}>Add</button>
          </div>
        }
        <MoreContainer>
          See more Reviews
        </MoreContainer>
      </TableWrapper>
    </Container>
  );
}

export default InternalReviews;