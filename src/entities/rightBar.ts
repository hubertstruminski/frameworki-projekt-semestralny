import { ChangeEventHandler } from "react";

export interface RightBarProps {
  searchTerm: string;
  showHamburgerMenu: boolean;
  setSearchTerm: Function;
  onChange: ChangeEventHandler<HTMLInputElement>;
}