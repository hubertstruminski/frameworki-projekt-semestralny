import { RouteComponentProps } from "react-router";

export interface SliderItemProps extends RouteComponentProps {
  photoUrl: string;
  title: string;
  type: string;
  users: number;
  icon: string;
  days: number;
  isRelative: boolean;
  showHamburgerMenu: boolean;
}