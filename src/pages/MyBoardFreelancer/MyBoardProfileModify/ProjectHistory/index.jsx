import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from '../style';

import ProjectHistoryTemplate from './ProjectHistoryTemplate';

const ProjectHistory = () => {
  const [PROJECT_HISTORY_STATE, SET_PROJECT_HISTORY_STATE] = useState([]);

  const handleProjectHistoryState = (e, index) => {
    const { value, name } = e.target;

    const STATE_LIST = [...PROJECT_HISTORY_STATE];
    STATE_LIST[index][name] = value;

    SET_PROJECT_HISTORY_STATE(STATE_LIST);
  };

  // ======== Add state + component (onChange) ========
  const onAddProjectHistoryTemplate = () => {
    SET_PROJECT_HISTORY_STATE([
      ...PROJECT_HISTORY_STATE,
      {
        projectTitle: '',
        projectStartDate: '',
        projectEndDate: '',
        clientCompany: '',
        workCompany: '',
        developField: 'INDUSTRY',
        developRole: '',
        developEnvironmentModel: '',
        developEnvironmentOS: '',
        developEnvironmentLanguage: '',
        developEnvironmentDBName: '',
        developEnvironmentTool: '',
        developEnvironmentCommunication: '',
        developEnvironmentEtc: '',
        responsibilityTask:
          'ex00은행 채용시스템 고도화 개발-관리자 경력에 따른 채용 기능 추가-경력에 따른 DB정보 검색 기능개발-개인정보 관련하여 수정사항 개발',
      },
    ]);
  };

  // ======== Remove the clicked state + component ========
  const onDeleteTemplate = (index) => {
    const newState = [...PROJECT_HISTORY_STATE];

    newState.splice(index, 1);
    SET_PROJECT_HISTORY_STATE(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      projectHistoryRequestList: [...PROJECT_HISTORY_STATE],
    };

    axios({
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer-profile/project-history ',
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
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('필드값 다시 사용확인');
      });
  };

  return (
    <div>
      {PROJECT_HISTORY_STATE &&
        PROJECT_HISTORY_STATE.map((state, index) => {
          return (
            <ProjectHistoryTemplate
              key={`PROJECT_HISTORY_STATE${index + 1}`}
              state={state}
              index={index}
              handleProjectHistoryState={handleProjectHistoryState}
              onDeleteTemplate={onDeleteTemplate}
            />
          );
        })}

      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={onAddProjectHistoryTemplate}>
          프로젝트 이력 추가 +
        </S.ProfileButton>
      </S.FlexCenter>

      {PROJECT_HISTORY_STATE.length > 0 && (
        <S.FlexCenter>
          <S.ProjectButtonSave type="button" onClick={handleSubmit}>
            프로젝트 저장
          </S.ProjectButtonSave>
        </S.FlexCenter>
      )}
    </div>
  );
};

export default ProjectHistory;
