import { combineReducers } from "redux";
import { userReducer, IUserReducerInterface } from "./userReducer";
import { publicationReducer, IPublicationReducer } from './publicationReducer';
import { photoReducer, IPhotoReducer } from './photoReducer';

export interface StoreState {
  user: IUserReducerInterface;
  publications: IPublicationReducer;
  photos: IPhotoReducer
}

export const reducers = combineReducers<StoreState>({
  user: userReducer,
  publications: publicationReducer,
  photos: photoReducer,
});
