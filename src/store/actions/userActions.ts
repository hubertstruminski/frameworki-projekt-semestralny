import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes, API_URL } from './actionTypes';

export interface User {
  id?: number;
  name: string;
  company: {
    name: string;
    bs?: string;
  },
  username?: string;
  email?: string;
  phone?: string;
}

export interface UserPhoto {
  url: string;
}

export interface FetchUserMe {
  type: ActionTypes.RETRIEVE_USER_ME;
  payload: User;
}

export interface FetchUserPhoto {
  type: ActionTypes.RETRIEVE_USER_PHOTO;
  payload: UserPhoto;
}

export interface FetchAllUsers {
  type: ActionTypes.RETRIEVE_ALL_USERS;
  payload: User[];
}

export interface UpdateUserMe {
  type: ActionTypes.UPDATE_USER_ME;
  payload: User;
}

export const url = `${API_URL}/users/1`;

export const fetchUserMe = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User>(url);

    dispatch<FetchUserMe>({
      type: ActionTypes.RETRIEVE_USER_ME,
      payload: response.data
    });
  };
};

export const fetchUserPhoto = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<UserPhoto>(`${API_URL}/photos/${id}`);

    dispatch<FetchUserPhoto>({
      type: ActionTypes.RETRIEVE_USER_PHOTO,
      payload: response.data
    });
  };
};

export const fetchAllUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    
    dispatch<FetchAllUsers>({
      type: ActionTypes.RETRIEVE_ALL_USERS,
      payload: response.data
    });
  };
};

export const updateUser = (updatedUser: User) => {
  return async (dispatch: Dispatch) => {
    dispatch<UpdateUserMe>({
      type: ActionTypes.UPDATE_USER_ME,
      payload: updatedUser
    });
  };
}