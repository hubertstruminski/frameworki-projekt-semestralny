export interface Workspace {
  title: string;
  type: string;
  users: number;
  days: number;
  url: string;
  icon: string;
}

export interface HomePageProps {
  fetchAllPublications: Function;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
  showHamburgerMenu: boolean;
}