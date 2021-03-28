import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

export interface Publication {
 userId: number;
 id: number;
 title: string;
 body: string;
}

export interface FetchAllPublications {
  type: ActionTypes.RETRIEVE_ALL_PUBLICATIONS;
  payload: Publication[];
}

export const fetchAllPublications = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Publication[]>("https://jsonplaceholder.typicode.com/posts");

    dispatch<FetchAllPublications>({
      type: ActionTypes.RETRIEVE_ALL_PUBLICATIONS,
      payload: response.data
    });
  };
};