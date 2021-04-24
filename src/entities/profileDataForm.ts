import { User } from '../store/actions/userActions'

export interface ProfileDataFormProps {
  onEditProfileDataClick: Function;
  setCity: Function;
  userMe: User;
  city: string;
  updateUser: Function;
}