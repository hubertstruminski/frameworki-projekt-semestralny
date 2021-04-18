import React, { ChangeEvent, ReactElement, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

interface ProposalsProps {
  isFormVisible: boolean;
}

interface Proposal {
  name?: string;
  entity?: string;
  location?: string;
  expertise?: string;
  date?: string;
  firm?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 15px;
  margin-left: 20px;
`;

const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TableContainer = styled.table`
  margin-left: 20px;
  margin-right: 20px;
  table-layout: auto;
`;

const Row = styled.tr`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

const ThCell = styled.th`
  padding: 15px;
  color: ${Colors.black};
  text-align: left;
  font-weight: 700;
  table-layout: fixed;
  width: 100%;
  color: ${Colors.black};
`;

const Cell = styled.td`
  padding: 15px;
  color: ${Colors.black};
  text-align: left;
  table-layout: fixed;
  width: 100%;
`;

const PROPOSALS_DATA: Proposal[] = [
  { name: 'Operation Tindeen', entity: 'Renault Cordova', location: 'France', expertise: '#Tax', date: '20/01/2018', firm: 'Racine' },
  { name: 'Op. Prometheus', entity: 'Renault HQ', location: 'USA', expertise: '#M&A', date: '18/02/2019', firm: 'Clifford chance'},
  { name: 'Op. Latandre', entity: 'Renault Brno', location: 'Italia', expertise: '#Social', date: '18/02/2019', firm: 'SVZ'},
]

const Proposals = (props: ProposalsProps): ReactElement => {
  const [name, setName] = useState('');
  const [entity, setEntity] = useState('');
  const [location, setLocation] = useState('');
  const [expertise, setExpertise] = useState('');
  const [date, setDate] = useState('');
  const [firm, setFirm] = useState('');

  const [proposals, setProposals] = useState(PROPOSALS_DATA);
  const { isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    setProposals((data: Proposal[]) => data.filter((proposal: Proposal, index: number): boolean => index !== indexToRemove));
  }

  const inputStyles = {
    border: 'none',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
  }

  const buttonStyles = {
    border: 'none',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.profileTextColor,
    color: Colors.white,
    paddingLeft: 15,
    paddingRight: 15,
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
      case 6:
        setFirm(newValue);
        break;
    }
  }

  const renderRows = (): ReactNode=> {
    return proposals.map((proposal: Proposal, index: number): ReactNode => {
      const { date, entity, expertise, firm, location, name } = proposal;
      return (
        <Row>
          <Cell>{name}</Cell>
          <Cell>{entity}</Cell>
          <Cell>{location}</Cell>
          <Cell>{expertise}</Cell>
          <Cell>{date}</Cell>
          <Cell>{firm}</Cell>
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
      firm: firm
    }
    setProposals((oldArray: Proposal[]) => [...oldArray, newElement]);
    setName('');
    setEntity('');
    setLocation('');
    setExpertise('');
    setDate('');
    setFirm('');
  }

  return (
    <Container>
      <TitleContainer>Proposals</TitleContainer>
      <TableWrapper>
        <TableContainer>
          <Row style={{ borderBottom: `1px solid ${Colors.subProfileTextColor}`}}>
            <ThCell>Name</ThCell>
            <ThCell>Entity</ThCell>
            <ThCell>Location</ThCell>
            <ThCell>Expertise</ThCell>
            <ThCell>Date</ThCell>
            <ThCell>Firm</ThCell>
            { isFormVisible &&
              <ThCell>Delete</ThCell>
            }
          </Row>
          { renderRows() }
        </TableContainer>
        { isFormVisible &&
          <>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
              <input type="text" placeholder="Name..." style={inputStyles} value={name} onChange={(e) => onChange(e, 1)} />
              <input type="text" placeholder="Entity..." style={inputStyles} value={entity} onChange={(e) => onChange(e, 2)} />
              <input type="text" placeholder="Location..." style={inputStyles} value={location} onChange={(e) => onChange(e, 3)} />
              <input type="text" placeholder="Expertise..." style={inputStyles} value={expertise} onChange={(e) => onChange(e, 4)} />
              <input type="text" placeholder="Date..." style={inputStyles} value={date} onChange={(e) => onChange(e, 5)} />
              <input type="text" placeholder="Firm..." style={inputStyles} value={firm} onChange={(e) => onChange(e, 6)} />
              <button style={buttonStyles} onClick={onSubmit}>Add</button>
            </div>
            
          </>
        }
      </TableWrapper>
    </Container>
  );
}

export default Proposals;