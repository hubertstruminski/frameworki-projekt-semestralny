import { RouteComponentProps } from "react-router";

export interface InternalReviewsProps extends RouteComponentProps {
  isFormVisible: boolean;
}

export interface Review {
  name?: string;
  entity?: string;
  location?: string;
  expertise?: string;
  date?: string;
}