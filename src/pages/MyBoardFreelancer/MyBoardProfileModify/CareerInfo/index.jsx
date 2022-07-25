import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from '../style';

import CareerTemplate from './CareerTemplate';

import Loader from 'components/Loader';

import { BaseUrl } from 'utils/config/api';

const CareerInfo = () => {
  const [
    userData,
    setUserData,
    detailProfileData,
    profileSimpleData,
    profilePublisherData,
    profileETCData,
    profilePlannerData,
    profileDesignerData,
  ] = useOutletContext();

  const [CAREER_STATE, SET_CAREER_STATE] = useState([
    {
      companyName: '',
      departmentName: '',
      companyPosition: 'ASSISTANT_MANAGER',
      careerStartDate: '',
      careerEndDate: '',
    },
  ]);

  // ======== Get DATA from Database ========
  useEffect(() => {
    if (detailProfileData?.careerResponses?.length > 0) {
      const newLists = detailProfileData.careerResponses?.map((state) => {
        const { careerStartDate, careerEndDate, companyName, companyPosition, departmentName } = state;

        const newData = {
          companyName,
          departmentName,
          companyPosition,
          careerStartDate,
          careerEndDate,
        };

        return newData;
      });

      SET_CAREER_STATE(newLists);
    }
  }, [detailProfileData]);

  // ======== Remove the clicked state + component ========
  const onDeleteTemplate = (index) => {
    const newState = [...CAREER_STATE];

    if (newState.length > 1) {
      newState.splice(index, 1);
      SET_CAREER_STATE(newState);
    } else {
      alert('한개는 남겨둬야함!');
    }
  };

  // ======== Handle state (onChange) ========
  const handleStateChange = (e, index) => {
    const { name, value } = e.target;

    const STATE_LIST = [...CAREER_STATE];

    STATE_LIST[index][name] = value;
    SET_CAREER_STATE(STATE_LIST);
  };

  // ======== Add state + component (onChange) ========
  const onAddCareerTemplate = () => {
    SET_CAREER_STATE([
      ...CAREER_STATE,
      {
        companyName: '',
        departmentName: '',
        companyPosition: 'ASSISTANT_MANAGER',
        careerStartDate: '',
        careerEndDate: '',
      },
    ]);
  };

  const submitCareer = (e) => {
    e.preventDefault();

    const newData = {
      careerCoverRequests: CAREER_STATE,
    };

    axios({
      url: `${BaseUrl}/freelancer-profile/career`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        alert('정보를 수정했습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <>
      {!detailProfileData ? (
        <Loader />
      ) : (
        CAREER_STATE &&
        CAREER_STATE.map((state, index) => {
          return (
            <CareerTemplate
              key={`CAREER_STATE${index + 1}`}
              state={state}
              index={index}
              handleStateChange={handleStateChange}
              onDeleteTemplate={onDeleteTemplate}
            />
          );
        })
      )}

      <S.HRline />

      <S.FlexCenter>
        <S.ButtonAddExtra type="button" onClick={onAddCareerTemplate}>
          경력 추가+
        </S.ButtonAddExtra>
      </S.FlexCenter>
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitCareer}>
          근무경력 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default CareerInfo;
