import axios from 'axios';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import EducationInfoTemplate from './EducationInfoTemplate';

import * as S from './style';

import { BaseUrl } from 'utils/config/api';

const EducationInfo = () => {
  const [userData, setUserData, detailProfileData, setDetailProfileData, profileSimpleData, setProfileSimpleData] =
    useOutletContext();

  const [userSchoolData, setUserSchoolData] = useState([
    {
      schoolName: '',
      schoolLevel: 'DOCTORAL_DEGREE',
      enterSchoolDate: '',
      graduationDate: '',
      academicState: 'GRADUATION',
      majorName: '',
    },
    {
      schoolName: '',
      schoolLevel: 'DOCTORAL_DEGREE',
      enterSchoolDate: '',
      graduationDate: '',
      academicState: 'GRADUATION',
      majorName: '',
    },
    {
      schoolName: '',
      schoolLevel: 'DOCTORAL_DEGREE',
      enterSchoolDate: '',
      graduationDate: '',
      academicState: 'GRADUATION',
      majorName: '',
    },
  ]);

  const [educationType, setEductionType] = useState(0);

  // ======== Handle state (onChange) ========
  const handleEducationState = (e, index) => {
    const { name, value } = e.target;

    const STATE_LIST = [...userSchoolData];

    STATE_LIST[index][name] = value;

    setUserSchoolData(STATE_LIST);
  };

  // ======== Get DATA from Database ========
  useEffect(() => {
    if (detailProfileData?.academicAbilityResponses?.length > 0) {
      const newLists = detailProfileData?.academicAbilityResponses?.map((state, index) => {
        const { schoolName, schoolLevel, enterSchoolDate, graduationDate, academicState, majorName } = state;

        const newData = {
          schoolName,
          schoolLevel,
          enterSchoolDate,
          graduationDate,
          academicState,
          majorName,
        };

        return newData;
      });

      setUserSchoolData(newLists);
    }
  }, [detailProfileData]);

  // PUT /freelancer-profile/academic-ability
  const submitAcademicAbility = (e) => {
    e.preventDefault();

    const newData = {
      academicAbilityCoverRequests: userSchoolData,
    };

    console.log(newData);
    axios({
      url: `${BaseUrl}/freelancer-profile/academic-ability`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        setUserSchoolData(newData.academicAbilityCoverRequests);
        alert('정보를 수정했습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <form>
      <S.JobUl>
        {userSchoolData?.map((state, index) => (
          <S.JobRadioLi left="-0.5rem" key={`education_radio${index + 1}`}>
            <S.JobInput
              radius={index}
              type="radio"
              name={index}
              id={`scope${index}`}
              value={index || ''}
              bgColor={educationType === index ? '#f16300' : '#f2f2f2'}
              tabletColor={educationType === index ? '#f16300' : 'white'}
              onClick={(e) => setEductionType(Number(e.target.name))}
            />
            <S.JobLabel color={educationType === index ? 'white' : 'black'} htmlFor={`scope${index}`}>
              {state.schoolLevel === 'HIGH_SCHOOL' && '고등학교'}
              {state.schoolLevel === 'COLLEGE' && '대학(2,3년)'}
              {state.schoolLevel === 'UNIVERSITY' && '대학교(4년)'}
              {state.schoolLevel === 'MASTER_DEGREE' && '대학원(석사)'}
              {state.schoolLevel === 'DOCTORAL_DEGREE' && '대학원(박사)'}
            </S.JobLabel>
          </S.JobRadioLi>
        ))}
      </S.JobUl>

      {userSchoolData?.map(
        (state, index) =>
          index === educationType && (
            <EducationInfoTemplate
              key={`academic_response${index + 1}`}
              state={state}
              handleEducationState={handleEducationState}
              index={index}
            />
          ),
      )}

      {/* ============= 저장 ============= */}
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={(e) => submitAcademicAbility(e)}>
          학력사항 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </form>
  );
};
export default EducationInfo;
