import { ReactNode } from "react";

export interface MatterItemProps {
  smallIcon: ReactNode;
  bigIcon: ReactNode;
  firstTitle: string;
  secondTitle: string;
  body: string;
  minHeight: number;
  isSmallScreen: boolean;
}