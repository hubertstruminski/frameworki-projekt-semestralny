import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

interface SliderItemProps {

}

const Container = styled.div`
  width: 20%;
  height: 200px;
  background-color: ${Colors.white};
  margin-right: 50px;
`;

const SliderItem = (props: SliderItemProps): ReactElement => {
  return (
    <Container>

    </Container>
  );
}

export default SliderItem;