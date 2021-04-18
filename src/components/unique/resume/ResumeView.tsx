import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
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

interface ResumeViewProps {
 title?: string;
 fetchAllComments: Function;
 showHamburgerMenu: boolean;
 placeholderTitle: string;
 isComponentsBar: boolean;
}

interface Resume {
  body: string;
  commentName: string;
  name: string;
  username: string | undefined;
  photoUrl: string;
}

const ResumeView = (props: ResumeViewProps): ReactElement => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [activePage, setActivePage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchUsernameTerm, setSearchUsernameTerm] = useState<string>('');

  const { 
    fetchAllComments, 
    showHamburgerMenu, 
    placeholderTitle,
    isComponentsBar 
  } = props;
  
  const comments = useSelector((state: StoreState): Comment[] => state.comments.comments);
  const userList = useSelector((state: StoreState): User[] => state.user.userList);
  const photos = useSelector((state: StoreState): Photo[] => state.photos.photos);

  useEffect(() => {
    console.log(searchUsernameTerm);
  }, [searchUsernameTerm]);

  useEffect(() => {
    fetchAllComments();
  }, [fetchAllComments]);

  useEffect(() => {
    const result: Resume[] = [];
    comments.forEach((comment: Comment): void => {
      if(comment) {
        const { postId, body } = comment;
        const commentName = comment.name;

        const foundUser = userList.filter((user: User): boolean => user.id === postId);
        if(foundUser[0] && foundUser[0].username) {
          const { name, username } = foundUser[0];

          const foundPhoto = photos.filter((photo: Photo): boolean => photo.id === postId);
          if(foundPhoto[0]) {
            const resumeObject: Resume = { body, commentName, name, username, photoUrl: foundPhoto[0].url };
            result.push(resumeObject);
          }
        }  
      }
    });
    setResumes(result);
    console.log(result);
  }, [comments, userList, photos]);

  

  const editSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setSearchTerm(value === null ? '' : value);
  }

  const handlePageChange = (data: any) => {
    setActivePage(data.selected);
  }

  const dynamicSearch = () => {
    return resumes.filter(
      (resume: Resume): boolean => {
        return resume.commentName.toLowerCase().includes(searchTerm.toLowerCase())
        &&
        resume.name.toLowerCase().includes(searchUsernameTerm.toLowerCase())
      });
  }

  const PER_PAGE = 10;
  const offset = activePage * PER_PAGE;
  const pageCount = Math.ceil(resumes.length / PER_PAGE);

  return (
    <Container>
      <TopContainer>
        <TitleContainer style={{ fontSize: showHamburgerMenu ? '2.5vw' : '1vw' }}>{placeholderTitle}</TitleContainer>
        <FeaturesContainer>
          <Input placeholder="Filter by title..." value={searchTerm} onChange={editSearchTerm} />
          <FollowedButton showHamburgerMenu={showHamburgerMenu} setSearchTerm={setSearchUsernameTerm} />
        </FeaturesContainer>
      </TopContainer>
      {
        isComponentsBar && (
          <BarContainer />
        )
      }
      <div className="pagination" style={{width: '100%'}}>
        <div style={{marginBottom: 25, width: '100%'}}>
          {/* { renderResumes(offset) } */}
          <ResumeList 
            offset={offset} 
            resumes={dynamicSearch()} 
            PER_PAGE={PER_PAGE}
            showHamburgerMenu={showHamburgerMenu} 
            isComponentsBar={isComponentsBar}
          />
        </div>
      </div>
      <ReactPaginate
        marginPagesDisplayed={2}
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
      />
    </Container>
  );
}

ResumeView.defaultProps = {
  
}

function mapStateToProps(state: StoreState) {
  return {};
}

export default connect(mapStateToProps, { fetchAllComments })(ResumeView);