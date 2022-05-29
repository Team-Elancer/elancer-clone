import { useState } from 'react';

import * as S from './style';

const EducationInfo = () => {
  const [educationType, setEductionType] = useState('');

  const handleEducation = (e) => {
    setEductionType(e.target.value);
  };

  return (
    <S.JobUl>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInputLeft
          name="education"
          id="education1"
          type="radio"
          value="HIGHSCHOOL"
          bgColor={educationType === 'HIGHSCHOOL' ? '#f16300' : '#f2f2f2'}
          tabletColor={educationType === 'HIGHSCHOOL' ? '#f16300' : 'white'}
          onClick={handleEducation}
        />

        <S.JobLabel color={educationType === 'HIGHSCHOOL' ? 'white' : 'black'} htmlFor="education1">
          고등학교
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          name="education"
          id="education2"
          type="radio"
          value="UNIVERSITY"
          bgColor={educationType === 'UNIVERSITY' ? '#f16300' : '#f2f2f2'}
          tabletColor={educationType === 'UNIVERSITY' ? '#f16300' : 'white'}
          onClick={handleEducation}
        />
        <S.JobLabel color={educationType === 'UNIVERSITY' ? 'white' : 'black'} htmlFor="education2">
          대학교(4년)
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInputRight
          name="education"
          id="education3"
          type="radio"
          value="MASTER_DEGREE"
          bgColor={educationType === 'MASTER_DEGREE' ? '#f16300' : '#f2f2f2'}
          tabletColor={educationType === 'MASTER_DEGREE' ? '#f16300' : 'white'}
          onClick={handleEducation}
        />
        <S.JobLabel color={educationType === 'MASTER_DEGREE' ? 'white' : 'black'} htmlFor="education3">
          대학원(석사)
        </S.JobLabel>
      </S.JobRadioLi>
    </S.JobUl>
  );
};

export default EducationInfo;
