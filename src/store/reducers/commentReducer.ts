import { ActionTypes, CommentActions } from '../actions/actionTypes';
import { Comment } from '../actions/commentActions';

export interface ICommentReducer {
  comments: Comment[];
}

const initialState = {
  comments: [],
}

export const commentReducer = (state: ICommentReducer = initialState, action: CommentActions) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_ALL_COMMENTS:
      state.comments = action.payload;
      return state;
    default: 
      return state; 
  }
};