import { RouteComponentProps } from "react-router";

export interface ProfileItemProps extends RouteComponentProps {
  photoUrl: string;
  name: string;
}