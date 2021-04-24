import { RouteComponentProps } from "react-router";

export interface DropdownMenuProps extends RouteComponentProps {
  setDropdownUrl: Function;
  setDropdownTitle: Function;
}