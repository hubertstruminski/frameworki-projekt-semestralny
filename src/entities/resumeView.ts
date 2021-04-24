export interface ResumeViewProps {
  title?: string;
  fetchAllComments: Function;
  showHamburgerMenu: boolean;
  placeholderTitle: string;
  isComponentsBar: boolean;
 }
 
export interface Resume {
  body: string;
  commentName: string;
  name: string;
  username: string | undefined;
  photoUrl: string;
 }