import { FetchAllPhotos } from "./photoActions";
import { FetchAllPublications } from "./publicationActions";
import { FetchAllUsers, FetchUserMe, FetchUserPhoto, UpdateUserMe } from "./userActions";
import { FetchAllComments } from './commentActions';

export const RETRIEVE_USER_ME = "RETRIEVE_USER_ME";
export const RETRIEVE_USER_PHOTO = "RETRIEVE_USER_PHOTO";
export const RETRIEVE_ALL_PUBLICATIONS = "RETRIEVE_ALL_PUBLICATIONS";
export const RETRIEVE_ALL_USERS = "RETRIEVE_ALL_USERS";
export const RETRIEVE_ALL_PHOTOS = "RETRIEVE_ALL_PHOTOS";
export const RETRIEVE_ALL_COMMENTS = "RETRIEVE_ALL_COMMENTS";
export const UPDATE_USER_ME = "UPDATE_USER_ME";

export enum ActionTypes {
  RETRIEVE_USER_ME,
  RETRIEVE_USER_PHOTO,
  RETRIEVE_ALL_PUBLICATIONS,
  RETRIEVE_ALL_USERS,
  RETRIEVE_ALL_PHOTOS,
  RETRIEVE_ALL_COMMENTS,
  UPDATE_USER_ME
}

export type UserAction = FetchUserMe | FetchUserPhoto | FetchAllUsers | UpdateUserMe;
export type PublicationActions = FetchAllPublications;
export type PhotoActions = FetchAllPhotos;
export type CommentActions = FetchAllComments;

