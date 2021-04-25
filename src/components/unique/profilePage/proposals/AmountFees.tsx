import React, { ChangeEvent, ReactElement, ReactNode, useState } from 'react';
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
import { AmountFeesProps, Fee } from '../../../../entities/amountFees';
import { FEES_DATA } from '../../../../mocks/amountFeeMocks';

const AmountFees = (props: AmountFeesProps): ReactElement => {
  const [year, setYear] = useState('');
  const [costCenter, setCostCenter] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [lawFirm, setLawFirm] = useState('');

  const [fees, setFees] = useState(FEES_DATA);
  const { isFormVisible } = props;

  const onRemoveItem = (indexToRemove: number) => {
    setFees((data: Fee[]) => data.filter((fee: Fee, index: number): boolean => index !== indexToRemove));
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.currentTarget.value;
    switch(index) {
      case 1:
        setYear(newValue);
        break;
      case 2:
        setCostCenter(newValue);
        break;
      case 3:
        setTotalAmount(newValue);
        break;
      case 4:
        setLawFirm(newValue);
        break;
    }
  }

  const renderRows = (): ReactNode=> {
    return fees.map((fee: Fee, index: number): ReactNode => {
      const { year, costCenter, lawFirm, totalAmount } = fee;
      return (
        <Row>
          <Cell>{year}</Cell>
          <Cell>{costCenter}</Cell>
          <Cell>{totalAmount}</Cell>
          <Cell>{lawFirm}</Cell>
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
      year: year, 
      costCenter: costCenter, 
      totalAmount: totalAmount, 
      lawFirm: lawFirm,  
    }
    setFees((oldArray: Fee[]) => [...oldArray, newElement]);
    setYear('');
    setCostCenter('');
    setTotalAmount('');
    setLawFirm('');
  }
  
  return (
    <Container>
      <TitleContainer>Amount of fees</TitleContainer>
      <TableWrapper>
        <TableContainer>
          <Row>
            <ThCell>Year</ThCell>
            <ThCell>Cost center</ThCell>
            <ThCell>Total amount</ThCell>
            <ThCell>Law firm</ThCell>
            { isFormVisible &&
              <ThCell>Delete</ThCell>
            }
          </Row>
          { renderRows() }
        </TableContainer>
        { isFormVisible &&
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flex-start' }}>
            <input type="text" placeholder="Year..." style={inputStyles} value={year} onChange={(e) => onChange(e, 1)} />
            <input type="text" placeholder="Cost center..." style={inputStyles} value={costCenter} onChange={(e) => onChange(e, 2)} />
            <input type="text" placeholder="Total amount..." style={inputStyles} value={totalAmount} onChange={(e) => onChange(e, 3)} />
            <input type="text" placeholder="Law firm..." style={inputStyles} value={lawFirm} onChange={(e) => onChange(e, 4)} />
            <button style={buttonStyles} onClick={onSubmit}>Add</button>
          </div>
        }
      </TableWrapper>
    </Container>
  );
}

export default AmountFees;