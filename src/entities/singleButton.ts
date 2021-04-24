import { RouteComponentProps } from "react-router";

export interface SingleButtonProps extends RouteComponentProps {
  title?: string;
  iconUrl: string
  isRotatedIcon?: boolean;
}