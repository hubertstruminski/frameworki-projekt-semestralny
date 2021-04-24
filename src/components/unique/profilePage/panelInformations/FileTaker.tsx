import React, { ChangeEvent, ReactElement, useState } from 'react';
import {
  Container,
  TextSpan
} from '../../../../styledHelpers/FileTakerComponents';
import { FileTakerProps } from '../../../../entities/fileTaker';
import { FILE_NAME_DATA } from '../../../../mocks/fileTakerMocks';

const FileTaker = (props: FileTakerProps): ReactElement => {
  const [fileName, setFileName] = useState(FILE_NAME_DATA);
  
  const { isFormVisible } = props;

  const inputStyles = {
    border: 'none',
    marginLeft: 20,
    marginTop: 10
  }

  const onSelectedFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;

    if(files && files[0]) {
      const { name } = files[0];
      setFileName(name);
    }
  }
  
  return (
    <>
      <Container>
        <img 
          src={process.env.PUBLIC_URL + '/media/icons/writing.svg'}
          alt=""
          style={{ width: 20, height: 20, marginRight: 5 }}
        />
        <TextSpan>{fileName}</TextSpan>
      </Container>
      { isFormVisible && (
          <input 
            type="file" 
            placeholder="Browse file(s)" 
            onChange={onSelectedFile}
            style={inputStyles}
          />
        )
      }
    </>
  );
}

export default FileTaker;