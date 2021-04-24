export interface ProfileDataContainerProps {
  name: string;
  companyName: string;
  city: string;
  bs: string | undefined;
  onEditProfileDataClick: Function;
  email: string | undefined;
  phone: string | undefined;
}