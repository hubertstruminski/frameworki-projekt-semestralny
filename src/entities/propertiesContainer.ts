export interface PropertiesContainerProps {
  expertises: string[];
  specialities: string[];
  admissions: string[];
  counties: string[];
  setExpertises: Function;
  setSpecialities: Function;
  setAdmisssions: Function;
  setCounties: Function;
  isFormVisible: boolean;
  onEditForm: Function;
}