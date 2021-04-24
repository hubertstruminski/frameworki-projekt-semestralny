import React, { ReactElement } from 'react';
import {Collapse} from 'react-collapse';
import LabelWithPlus from '../../common/entities/LabelWithPlus';
import ArrowDownContainer from '../../common/entities/ArrowDownContainer';
import DisabledInput from '../../common/input/DisabledInput';
import {
  LabelText,
  Container,
  InfoSpan,
  ItemContainer,
  ItemsContainer
} from '../../../styledHelpers/ExpandableFiltersComponents';
import Plus from '../../../svgs/plus';
import { ExpandableFiltersProps } from '../../../entities/expandableFilters';

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