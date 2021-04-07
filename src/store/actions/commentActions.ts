import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

export interface Comment {
  postId: number;
  name: string;
  body: string;
}

export interface FetchAllComments {
  type: ActionTypes.RETRIEVE_ALL_COMMENTS,
  payload: Comment[],
}

export const fetchAllComments = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments");

    dispatch<FetchAllComments>({
      type: ActionTypes.RETRIEVE_ALL_COMMENTS,
      payload: response.data
    });
  };
};