import React, { ReactElement } from 'react';
import {
  BodyContainer,
  InternalContainer,
  LeftContainer,
  PlaceholderContainer,
  RightContainer,
  TopContainer,
  Wrapper
} from '../../../styledHelpers/SliderPlaceholderComponents';
import { SliderPlaceholderProps } from '../../../entities/sliderPlaceholder';

const SliderPlaceholder = (props: SliderPlaceholderProps): ReactElement => {
  const { photoUrl, title } = props;
  return (
    <TopContainer>
      <PlaceholderContainer style={{ backgroundImage: `url(${photoUrl})`}} />
      <Wrapper>
        <LeftContainer>
          <img src={process.env.PUBLIC_URL + '/media/icons/entities2.svg'} alt="" style={{ height: 70, width: 50}} />
        </LeftContainer>
        <RightContainer>
          <InternalContainer>
            <div style={{ fontSize: '1.25vw'}}>{title}</div>
            <img src={process.env.PUBLIC_URL + '/media/icons/cog.svg'} alt="" />
          </InternalContainer>
          <BodyContainer>
            Workspace purpose and a bit of context. This much needed description is ehere to remind people where they are, if they are new or have poor memory.
          </BodyContainer>
        </RightContainer>
      </Wrapper>
    </TopContainer>
  );
}

export default SliderPlaceholder;