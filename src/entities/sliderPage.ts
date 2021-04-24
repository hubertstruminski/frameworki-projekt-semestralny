export interface SliderPageProps {
  showHamburgerMenu: boolean;
  fetchAllUsers: Function;
  fetchAllPhotos: Function;
}

export interface SliderItemState {
  icon: string;
  photoUrl?: string;
  title: string;
}