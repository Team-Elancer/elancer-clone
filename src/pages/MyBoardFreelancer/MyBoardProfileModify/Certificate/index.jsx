import axios from 'axios';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from '../style';

import EducationTemplate from './EducationTemplate';
import LanguageTemplate from './LanguageTemplate';
import LicenseTemplate from './LicenseTemplate';

import Loader from 'components/Loader';

const Certificate = () => {
  const [EDUCATION_STATE, SET_EDUCATION_STATE] = useState([
    {
      educationTitle: '',
      educationOrganization: '',
      educationStartDate: '',
      educationEndDate: '',
    },
  ]);

  const [LICENSE_STATE, SET_LICENSE_STATE] = useState([
    {
      licenseTitle: '',
      licenseIssuer: '',
      acquisitionDate: '',
    },
  ]);

  const [LANGUAGE_STATE, SET_LANGUAGE_STATE] = useState([
    {
      languageName: '',
      languageAbility: 'MIDDLE',
    },
  ]);

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

  // ======== Get DATA from Database ========
  useEffect(() => {
    // ======== Eucation Responses ========
    if (detailProfileData.educationResponses) {
      const newEducataionLists = detailProfileData.educationResponses?.map((state) => {
        const { educationTitle, educationOrganization, educationStartDate, educationEndDate } = state;

        const newData = {
          educationTitle,
          educationOrganization,
          educationStartDate,
          educationEndDate,
        };

        return newData;
      });

      SET_EDUCATION_STATE(newEducataionLists);
    }

    // ======== License Responses ========
    if (detailProfileData.licenseResponses) {
      const newLicenseLists = detailProfileData.licenseResponses?.map((state) => {
        const { licenseTitle, licenseIssuer, acquisitionDate } = state;

        const newData = {
          licenseTitle,
          licenseIssuer,
          acquisitionDate,
        };

        return newData;
      });

      SET_LICENSE_STATE(newLicenseLists);
    }

    // ======== language Responses ========
    if (detailProfileData.languageResponses) {
      const newLanguageLists = detailProfileData.languageResponses?.map((state) => {
        const { languageName, languageAbility, languageAbilityDescription } = state;

        const newData = {
          languageName,
          languageAbility,
          languageAbilityDescription,
        };

        return newData;
      });

      SET_LANGUAGE_STATE(newLanguageLists);
    }
  }, [detailProfileData]);

  // ======== Remove the clicked state + component ========
  const onDeleteTemplate = (index, STATE) => {
    if (STATE === 'EDUCATION_STATE') {
      const newState = [...EDUCATION_STATE];
      if (newState.length > 1) {
        newState.splice(index, 1);
        SET_EDUCATION_STATE(newState);
      } else {
        alert('한개는 남겨둬야함!');
      }
    }

    if (STATE === 'LICENSE_STATE') {
      const newState = [...LICENSE_STATE];
      if (newState.length > 1) {
        newState.splice(index, 1);
        SET_LICENSE_STATE(newState);
      } else {
        alert('한개는 남겨둬야함!');
      }
    }

    if (STATE === 'LANGUAGE_STATE') {
      const newState = [...LANGUAGE_STATE];
      if (newState.length > 1) {
        newState.splice(index, 1);
        SET_LANGUAGE_STATE(newState);
      } else {
        alert('한개는 남겨둬야함!');
      }
    }
  };

  // ======== Handle state (onChange) ========
  const handleStateChange = (e, index, STATE) => {
    const { name, value } = e.target;

    if (STATE === 'EDUCATION_STATE') {
      const STATE_LIST = [...EDUCATION_STATE];
      STATE_LIST[index][name] = value;
      SET_EDUCATION_STATE(STATE_LIST);
    }

    if (STATE === 'LICENSE_STATE') {
      const STATE_LIST = [...LICENSE_STATE];
      STATE_LIST[index][name] = value;
      SET_LICENSE_STATE(STATE_LIST);
    }

    if (STATE === 'LANGUAGE_STATE') {
      const STATE_LIST = [...LANGUAGE_STATE];
      STATE_LIST[index][name] = value;
      SET_LANGUAGE_STATE(STATE_LIST);
    }
  };

  // ======== Add state + component (onChange) ========
  const onAddCareerTemplate = (STATE) => {
    if (STATE === 'EDUCATION_STATE') {
      SET_EDUCATION_STATE([
        ...EDUCATION_STATE,
        {
          educationTitle: '',
          educationOrganization: '',
          educationStartDate: '',
          educationEndDate: '',
        },
      ]);
    }

    if (STATE === 'LICENSE_STATE') {
      SET_LICENSE_STATE([
        ...LICENSE_STATE,
        {
          licenseTitle: '',
          licenseIssuer: '',
          acquisitionDate: '',
        },
      ]);
    }

    if (STATE === 'LANGUAGE_STATE') {
      SET_LANGUAGE_STATE([
        ...LANGUAGE_STATE,
        {
          languageName: '',
          languageAbility: 'MIDDLE',
        },
      ]);
    }
  };

  const submitCareer = (e) => {
    e.preventDefault();

    const newData = {
      educationCoverRequests: EDUCATION_STATE,
      licenseCoverRequests: LICENSE_STATE,
      languageCoverRequests: LANGUAGE_STATE,
    };

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/education-license-language',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        console.log(newData);
        alert('정보를 수정했습니다.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <form action="">
      {!detailProfileData ? (
        <Loader />
      ) : (
        <>
          {/* ========== EDUCATION_STATE ========== */}
          {EDUCATION_STATE &&
            EDUCATION_STATE.map((state, index) => {
              return (
                <EducationTemplate
                  key={`EDUCATION_STATE${index + 1}`}
                  state={state}
                  index={index}
                  handleStateChange={handleStateChange}
                  onDeleteTemplate={onDeleteTemplate}
                />
              );
            })}

          <S.HRline />

          {/* ========== LICENSE_STATE ========== */}
          {LICENSE_STATE &&
            LICENSE_STATE.map((state, index) => {
              return (
                <LicenseTemplate
                  key={`LICENSE_STATE${index + 1}`}
                  state={state}
                  index={index}
                  handleStateChange={handleStateChange}
                  onDeleteTemplate={onDeleteTemplate}
                />
              );
            })}
          <S.HRline />

          {/* ========== LANGUAGE_STATE ========== */}
          {LANGUAGE_STATE &&
            LANGUAGE_STATE.map((state, index) => {
              return (
                <LanguageTemplate
                  key={`LANGUAGE_STATE${index + 1}`}
                  state={state}
                  index={index}
                  handleStateChange={handleStateChange}
                  onDeleteTemplate={onDeleteTemplate}
                />
              );
            })}

          <S.FlexCenter>
            <S.ButtonAddExtra type="button" onClick={() => onAddCareerTemplate('EDUCATION_STATE')}>
              교육 추가+
            </S.ButtonAddExtra>
            <S.ButtonAddExtra type="button" onClick={() => onAddCareerTemplate('LICENSE_STATE')}>
              자격증 추가+
            </S.ButtonAddExtra>
            <S.ButtonAddExtra type="button" onClick={() => onAddCareerTemplate('LANGUAGE_STATE')}>
              어학 추가+
            </S.ButtonAddExtra>
          </S.FlexCenter>
          <S.FlexCenter>
            <S.ProfileButton onClick={submitCareer}>교육 및 자격사항 저장</S.ProfileButton>
          </S.FlexCenter>
        </>
      )}
    </form>
  );
};

export default Certificate;
