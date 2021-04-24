import { RouteComponentProps } from "react-router";

export interface ProfilePageProps extends RouteComponentProps {
  showHamburgerMenu: boolean;
  fetchUserMe: Function;
  fetchUserPhoto: Function;
}