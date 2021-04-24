import React, { ReactElement, useState } from 'react';
import PropertiesContainer from './PropertiesContainer';

interface PropertiesProps {
  isFormVisible: boolean;
  setIsFormVisible: Function;
}

const Properties = (props: PropertiesProps): ReactElement => {
  const [expertises, setExpertises] = useState(['Mergers and acquisition']);
  const [specialities, setSpecialities] = useState([
    'Cross border operation',
    'Transaction over 500ME/$'
  ]);
  const [admissions, setAdmisssions] = useState([
    'Paris bar association',
    'Tunisian bar association'
  ]);
  const [counties, setCounties] = useState([
    'Tunisia'
  ]);

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