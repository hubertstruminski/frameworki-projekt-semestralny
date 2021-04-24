import { RouteComponentProps } from "react-router";

export interface LeftMenuProps extends RouteComponentProps {
  fetchUserMe: Function;
  fetchUserPhoto: Function;
  showHamburgerMenu: boolean;
}