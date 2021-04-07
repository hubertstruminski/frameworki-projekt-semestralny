import { FetchAllPhotos } from "./photoActions";
import { FetchAllPublications } from "./publicationActions";
import { FetchAllUsers, FetchUserMe, FetchUserPhoto } from "./userActions";
import { FetchAllComments } from './commentActions';

export const RETRIEVE_USER_ME = "RETRIEVE_USER_ME";
export const RETRIEVE_USER_PHOTO = "RETRIEVE_USER_PHOTO";
export const RETRIEVE_ALL_PUBLICATIONS = "RETRIEVE_ALL_PUBLICATIONS";
export const RETRIEVE_ALL_USERS = "RETRIEVE_ALL_USERS";
export const RETRIEVE_ALL_PHOTOS = "RETRIEVE_ALL_PHOTOS";
export const RETRIEVE_ALL_COMMENTS = "RETRIEVE_ALL_COMMENTS";

export enum ActionTypes {
  RETRIEVE_USER_ME,
  RETRIEVE_USER_PHOTO,
  RETRIEVE_ALL_PUBLICATIONS,
  RETRIEVE_ALL_USERS,
  RETRIEVE_ALL_PHOTOS,
  RETRIEVE_ALL_COMMENTS,
}

export type UserAction = FetchUserMe | FetchUserPhoto | FetchAllUsers;
export type PublicationActions = FetchAllPublications;
export type PhotoActions = FetchAllPhotos;
export type CommentActions = FetchAllComments;

