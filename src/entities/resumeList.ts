export interface Resume {
  body: string;
  commentName: string;
  name: string;
  username: string | undefined;
  photoUrl: string;
}

export interface ResumeListProps {
  offset: number;
  resumes: Resume[];
  PER_PAGE: number;
  showHamburgerMenu: boolean;
  isComponentsBar: boolean;
}