import { RouteComponentProps } from "react-router";

export interface MenuItemProps extends RouteComponentProps {
  iconUrl: string;
  routeUrl: string;
  title: string;
  setDropdownTitle: Function;
  setDropdownUrl: Function;
  photoUrl?: string;
  icon?: string;
}