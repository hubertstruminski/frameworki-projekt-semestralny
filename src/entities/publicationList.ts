import { PublicationDto } from './publication';

export interface PublicationListProps {
  collection: PublicationDto[];
  showHamburgerMenu: boolean;
}