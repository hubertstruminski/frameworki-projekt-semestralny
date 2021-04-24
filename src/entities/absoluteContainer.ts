import { ReactNode } from "react";

export interface AbsoluteContainerProps {
  children: ReactNode
  right?: number;
  top?: number;
  left?: number;
}