export interface EntitiesPageProps {
  showHamburgerMenu: boolean;
  fetchAllPhotos: Function;
}

export interface Entity {
  title: string;
  body: string;
  photoUrl: string;
}