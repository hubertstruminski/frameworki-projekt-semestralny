import React, { ReactElement } from 'react';
import {
  Container,
  TextSpan
} from '../../../styledHelpers/FilterButtonComponents';

interface FilterButtonProps {
 iconUrl: string;
 text?: string;
 appendText?: boolean;
 isMarginLeft?: boolean;
 onClick?: Function;
}



const FilterButton = (props: FilterButtonProps): ReactElement => {
  const { iconUrl, text, appendText, isMarginLeft, onClick } = props;

  const onSubmit = () => {
    if(onClick) {
      onClick();
    }
  }

  return (
    <Container onClick={onSubmit}>
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