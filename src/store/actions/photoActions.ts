import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';

export interface Photo {
 albumId: number;
 id: number;
 title: string;
 url: string;
 thumbnailUrl: string;
}

export interface FetchAllPhotos {
  type: ActionTypes.RETRIEVE_ALL_PHOTOS,
  payload: Photo[],
}

export const fetchAllPhotos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");

    dispatch<FetchAllPhotos>({
      type: ActionTypes.RETRIEVE_ALL_PHOTOS,
      payload: response.data
    });
  };
};