import { ReactNode } from "react";

export interface BarItemProps {
  isIconVisible?: boolean;
  icon?: ReactNode;
  color: string;
  backgroundColor: string;
  title: string;
  isMargin?: boolean;
 }