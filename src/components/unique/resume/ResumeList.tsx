import React, { ReactElement } from 'react';
import MainResume from './MainResume';

interface Resume {
  body: string;
  commentName: string;
  name: string;
  username: string | undefined;
  photoUrl: string;
}

interface ResumeListProps {
  offset: number;
  resumes: Resume[];
  PER_PAGE: number;
  showHamburgerMenu: boolean;
  isComponentsBar: boolean;
}

const ResumeList = (props: ResumeListProps): ReactElement => {
  const { 
    resumes, 
    offset, 
    PER_PAGE, 
    showHamburgerMenu, 
    isComponentsBar 
  } = props;

  const renderResumes = (offset: number) => {
    console.log("GRAHAM");
    console.log(resumes);
    return resumes.slice(offset, offset + PER_PAGE).map((resume: Resume): ReactElement => {
      const { commentName, photoUrl, username, name, body } = resume;
      return (
        <MainResume
          commentName={commentName}
          body={body}
          photoUrl={photoUrl}
          username={username}
          name={name}
          showHamburgerMenu={showHamburgerMenu}
          isComponentsBar={isComponentsBar}
        />
      );
    });
  }

  return (
    <div>
      { renderResumes(offset) }
    </div>
  )
}

export default ResumeList;