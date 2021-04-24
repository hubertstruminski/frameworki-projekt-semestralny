import React, { ReactElement, useState } from 'react';
import PropertiesContainer from './PropertiesContainer';
import { PropertiesProps } from '../../../entities/properties';
import { 
  ADMISSIONS_DATA, 
  COUNTIES_DATA, 
  EXPERTISES_DATA, 
  SPECIALITIES_DATA 
} from '../../../mocks/propertiesMocks';

const Properties = (props: PropertiesProps): ReactElement => {
  const [expertises, setExpertises] = useState(EXPERTISES_DATA);
  const [specialities, setSpecialities] = useState(SPECIALITIES_DATA);
  const [admissions, setAdmisssions] = useState(ADMISSIONS_DATA);
  const [counties, setCounties] = useState(COUNTIES_DATA);

  const { isFormVisible, setIsFormVisible } = props;

  const onEditForm = () => {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <React.Fragment>
      <PropertiesContainer 
        expertises={expertises} 
        admissions={admissions} 
        specialities={specialities}
        counties={counties}
        setExpertises={setExpertises}
        setSpecialities={setSpecialities}
        setAdmisssions={setAdmisssions}
        setCounties={setCounties}
        isFormVisible={isFormVisible}
        onEditForm={onEditForm}
      />
    </React.Fragment>
  );
}

export default Properties;