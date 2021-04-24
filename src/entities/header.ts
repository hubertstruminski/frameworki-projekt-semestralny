import React from "react";
import { RouteComponentProps } from "react-router";

export interface HeaderProps extends RouteComponentProps {
  title?: string
  isGray?: boolean;
  showHamburgerMenu: boolean;
  wrapperRef: React.RefObject<HTMLDivElement>
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  setDropdownUrl: Function;
  setDropdownTitle: Function;
  dropdownUrl: string;
  dropdownTitle: string;
}
