import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ProfileItemProps extends RouteComponentProps {
  photoUrl: string;
  name: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 15px;
`;

const LinkSpan = styled.span`
  color: ${Colors.profileTextColor};
  font-weight: 700;
  font-size: ${fontSize[14]};
`;

const ProfileItem = (props: ProfileItemProps): ReactElement => {
  const { photoUrl, name, history } = props;

  const onProfileRedirect = () => {
    history.push({ pathname: '/profile' });
  }

  return (
    <Container>
      <img src={photoUrl} alt="" style={{ width: 30, height: 30, borderRadius: 15}} />
      <NameContainer>
        { name }
        <LinkSpan 
          onClick={onProfileRedirect}
          style={{ cursor: 'pointer' }}
        >
          See profile
        </LinkSpan>
      </NameContainer>
    </Container>
  );
}

export default withRouter(ProfileItem);