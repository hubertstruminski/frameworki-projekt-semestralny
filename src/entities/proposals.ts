import { RouteComponentProps } from "react-router";

export interface ProposalsProps extends RouteComponentProps {
  isFormVisible: boolean;
}

export interface Proposal {
  name?: string;
  entity?: string;
  location?: string;
  expertise?: string;
  date?: string;
  firm?: string;
}