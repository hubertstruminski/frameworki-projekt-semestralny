import React from "react";

export interface HeaderProps {
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
