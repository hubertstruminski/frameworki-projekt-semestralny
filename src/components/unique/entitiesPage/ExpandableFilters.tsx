import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import {Collapse} from 'react-collapse';
import LabelWithPlus from './LabelWithPlus';
import ArrowDownContainer from './ArrowDownContainer';
import DisabledInput from '../../common/input/DisabledInput';
import {
  LabelText
} from '../../../styledHelpers/ExpandableFiltersComponents';
import Plus from '../../../svgs/plus';

interface ExpandableFiltersProps {
  isOpened: boolean;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${Colors.filtersBackground};
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

const InfoSpan = styled.span`
  margin-left: 10px;
  margin-top: 10px;
  color: ${Colors.subProfileTextColor};
  font-size: 0.7vw;
  width: 100%;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-left: 25px;
  margin-top: 10px;

`;



const ExpandableFilters = (props: ExpandableFiltersProps): ReactElement => {
  const { isOpened } = props;
  
  return (
    <Collapse isOpened={isOpened} style={{ position: 'absolute'}}>
      <Container>
        <InfoSpan>Rows are filtered by the following conditions starting from the top.</InfoSpan>
        <ItemsContainer>
          <ItemContainer>
            <LabelWithPlus title="Where" />
            <ArrowDownContainer title="Company" />
            <ArrowDownContainer title="Contains" />
            <DisabledInput placeholder="Type..." />
          </ItemContainer>
          <ItemContainer>
            <LabelWithPlus title="Where" />
            <ArrowDownContainer title="Status" />
            <ArrowDownContainer title="Is" />
            <DisabledInput placeholder="Type..." />
            <ArrowDownContainer title="In" />
            <DisabledInput placeholder="Entity..." />
          </ItemContainer>
          <ItemContainer>
            <LabelWithPlus title="And" />
            <ArrowDownContainer title="Status" />
            <ArrowDownContainer title="Ends before" />
            <DisabledInput placeholder="Date" />
            <ArrowDownContainer title="In" />
            <DisabledInput placeholder="Entity..." />
          </ItemContainer>
          <ItemContainer>
            <Plus fill="blue" height="15" width="15" />
            <LabelText style={{ marginLeft: 10, marginRight: 15, color: 'blue'}}>Add filter</LabelText>
            <ArrowDownContainer title="choose property" isJSComponent />
          </ItemContainer>
        </ItemsContainer>
      </Container>
    </Collapse>
  );
}

export default ExpandableFilters;