import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react';
import { fetchAllComments } from '../../../store/actions/commentActions';
import { StoreState } from '../../../store/reducers';
import FollowedButton from '../../common/followedButton/FollowedButton';
import Input from '../../common/input/Input';
import { connect, useSelector } from 'react-redux';
import { Comment } from '../../../store/actions/commentActions';
import { User } from '../../../store/actions/userActions';
import { Photo } from '../../../store/actions/photoActions';
import ReactPaginate from 'react-paginate';
import ResumeList from './ResumeList';
import {
  Container,
  FeaturesContainer,
  TitleContainer,
  TopContainer
} from '../../../styledHelpers/ResumeViewComponents';
import BarContainer from './BarContainer';
import { Resume, ResumeViewProps } from '../../../entities/resumeView';

const ResumeView = (props: ResumeViewProps): ReactElement => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchUsernameTerm, setSearchUsernameTerm] = useState<string>('');
  const [offsetResumes, setOffsetResumes] = useState(10);
  const [isFollowedClicked, setIsFollowedClicked] = useState(false);

  const { 
    fetchAllComments, 
    showHamburgerMenu, 
    placeholderTitle,
    isComponentsBar 
  } = props;
  
  const comments = useSelector((state: StoreState): Comment[] => state.comments.comments);
  const userList = useSelector((state: StoreState): User[] => state.user.userList);
  const photos = useSelector((state: StoreState): Photo[] => state.photos.photos);
  const userMe = useSelector((state: StoreState) => state.user.user);
  
  const { name } = userMe;

  useEffect(() => {
    console.log(searchUsernameTerm);
  }, [searchUsernameTerm]);

  useEffect(() => {
    fetchAllComments();
  }, [fetchAllComments]);

  const processComments = useCallback(() => {
    const result: Resume[] = [];
    comments.forEach((comment: Comment): void => {
        const { postId, body } = comment;
        const commentName = comment.name;

        const foundUser = userList.filter((user: User): boolean => user.id === postId);
        const { name, username } = foundUser[0] || {};

        const foundPhoto = photos.filter((photo: Photo): boolean => photo.id === postId);
        const singlePhoto = foundPhoto[0] || {};

        const resumeObject: Resume = { body, commentName, name, username, photoUrl: singlePhoto.url };
        result.push(resumeObject);
    });
    setResumes(result);
  }, [comments, photos, userList]);

  useEffect(() => {
    processComments();
  }, [processComments]);

  useEffect(() => {
    const offset = activePage * PER_PAGE;
    setOffsetResumes(offset);
    
  }, [activePage]);

  const editSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setIsFollowedClicked(false);
    setActivePage(0);
    setSearchTerm(value === null ? '' : value);
  }

  const handlePageChange = async (data: any) => {
    setActivePage(data.selected);
  }

  const dynamicSearch = () => {
    if(!isFollowedClicked) {
      return resumes.filter((resume: Resume): 
      boolean => resume.commentName?.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      if(searchUsernameTerm === name) {
        return resumes.filter((resume: Resume): 
          boolean => resume.name?.toLowerCase().includes(name.toLowerCase()));
      } else {
        return resumes;
      }
    }
  }

  const PER_PAGE = 10;
  const pageCount = Math.ceil(resumes.length / PER_PAGE);

  return (
    <Container>
      <TopContainer>
        <TitleContainer style={{ fontSize: showHamburgerMenu ? '2.5vw' : '1vw' }}>{placeholderTitle}</TitleContainer>
        <FeaturesContainer>
          <Input placeholder="Filter by title..." value={searchTerm} onChange={editSearchTerm} />
          <FollowedButton 
            showHamburgerMenu={showHamburgerMenu} 
            setSearchTerm={setSearchUsernameTerm}
            setIsFollowedClicked={setIsFollowedClicked} 
            setActivePage={setActivePage}
          />
        </FeaturesContainer>
      </TopContainer>
      {
        isComponentsBar && (
          <BarContainer />
        )
      }
      <div className="pagination" style={{width: '100%'}}>
        <div style={{marginBottom: 25, width: '100%'}}>
          <ResumeList 
            offset={offsetResumes} 
            resumes={dynamicSearch()} 
            PER_PAGE={PER_PAGE}
            showHamburgerMenu={showHamburgerMenu} 
            isComponentsBar={isComponentsBar}
          />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <ReactPaginate
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        forcePage={activePage}
      />
      </div>
    </Container>
  );
}

ResumeView.defaultProps = {
  
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { fetchAllComments })(ResumeView);