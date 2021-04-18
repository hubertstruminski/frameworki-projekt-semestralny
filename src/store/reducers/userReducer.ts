import { UserAction, ActionTypes } from '../actions/actionTypes';
import { User, UserPhoto } from '../actions/userActions';

export interface IUserReducerInterface {
  user: User;
  userPhotoUrl: UserPhoto,
  userList: User[],
}

const initialState = {
  user: {
    id: 0,
    name: '',
    company: {
      name: '',
    }
  },
  userPhotoUrl: {
    url: ''
  },
  userList: []
}

export const userReducer = (state: IUserReducerInterface = initialState, action: UserAction) => {
  switch(action.type) {
    case ActionTypes.RETRIEVE_USER_ME:
      state.user =  action.payload;
      return state;
    case ActionTypes.RETRIEVE_USER_PHOTO:
      state.userPhotoUrl = action.payload;
      return state;
    case ActionTypes.RETRIEVE_ALL_USERS:
      state.userList = action.payload;
      return state;
    case ActionTypes.UPDATE_USER_ME:
      state.user = action.payload;
      return state;
    default: 
      return state; 
  }
};

