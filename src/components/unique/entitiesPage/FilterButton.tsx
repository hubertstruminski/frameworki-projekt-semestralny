import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface FilterButtonProps {
 iconUrl: string;
 text?: string;
 appendText?: boolean;
 isMarginLeft?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-right: 5px;
`;

const TextSpan = styled.span`
  color: ${Colors.subProfileTextColor};
  font-size: 0.75vw;
`;

const FilterButton = (props: FilterButtonProps): ReactElement => {
  const { iconUrl, text, appendText, isMarginLeft } = props;
  return (
    <Container>
      <img 
        src={process.env.PUBLIC_URL + iconUrl} 
        alt=""
        style={{ 
          width: 12, 
          height: 12, 
          marginRight: appendText ? 5 : undefined,
          marginLeft: isMarginLeft ? 5 : undefined
        }}

      />
      { appendText &&
        <TextSpan>{text}</TextSpan>
      }
    </Container>
  );
}

export default FilterButton;