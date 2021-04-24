import { FullScreenHandle } from "react-full-screen";

export interface LeftBarProps {
  handle: FullScreenHandle;
  setIsAscendingOrder: Function;
  isAscendingOrder: boolean;
  setIsFiltersOpened: Function;
  isFiltersOpened: boolean;
}