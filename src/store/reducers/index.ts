import { combineReducers } from "redux";
import { userReducer, IUserReducerInterface } from "./userReducer";
import { publicationReducer, IPublicationReducer } from './publicationReducer';
import { photoReducer, IPhotoReducer } from './photoReducer';
import { commentReducer, ICommentReducer } from "./commentReducer";

export interface StoreState {
  user: IUserReducerInterface;
  publications: IPublicationReducer;
  photos: IPhotoReducer,
  comments: ICommentReducer,
}

export const reducers = combineReducers<StoreState>({
  user: userReducer,
  publications: publicationReducer,
  photos: photoReducer,
  comments: commentReducer,
});
