import React, { ReactElement } from 'react';
import {
  Container,
  LinkSpan,
  NameContainer
} from '../../../styledHelpers/ProfileItemComponents';
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ProfileItemProps extends RouteComponentProps {
  photoUrl: string;
  name: string;
}



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