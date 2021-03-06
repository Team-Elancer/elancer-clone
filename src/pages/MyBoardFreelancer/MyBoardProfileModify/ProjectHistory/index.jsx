import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from '../style';

import ProjectHistoryTemplate from './ProjectHistoryTemplate';

import Loader from 'components/Loader';

import { BaseUrl } from 'utils/config/api';

const ProjectHistory = () => {
  const [userData, setUserData, detailProfileData, profileSimpleData] = useOutletContext();

  const [PROJECT_HISTORY_STATE, SET_PROJECT_HISTORY_STATE] = useState([]);

  // ======== Get DATA from Database ========
  useEffect(() => {
    if (detailProfileData?.projectHistoryResponses?.length > 0) {
      const newLists = detailProfileData.projectHistoryResponses.map((state) => {
        const {
          projectTitle,
          projectStartDate,
          projectEndDate,
          clientCompany,
          workCompany,
          developField,
          developRole,
          developEnvironment: {
            developEnvironmentModel,
            developEnvironmentOS,
            developEnvironmentLanguage,
            developEnvironmentDBName,
            developEnvironmentTool,
            developEnvironmentCommunication,
            developEnvironmentEtc,
          },
          responsibilityTask,
        } = state;

        const newData = {
          projectTitle,
          projectStartDate,
          projectEndDate,
          clientCompany,
          workCompany,
          developField,
          developRole,
          developEnvironmentModel,
          developEnvironmentOS,
          developEnvironmentLanguage,
          developEnvironmentDBName,
          developEnvironmentTool,
          developEnvironmentCommunication,
          developEnvironmentEtc,
          responsibilityTask,
        };

        return newData;
      });

      SET_PROJECT_HISTORY_STATE(newLists);
    }
  }, [detailProfileData]);

  // ======== handle state ========
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
          'ex00?????? ??????????????? ????????? ??????-????????? ????????? ?????? ?????? ?????? ??????-????????? ?????? DB?????? ?????? ????????????-???????????? ???????????? ???????????? ??????',
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
      url: `${BaseUrl}/freelancer-profile/project-history`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: newData,
    })
      .then(() => {
        alert('????????? ??????????????????.');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
        if (newData) alert('????????? ?????? ????????????');
      });
  };

  return (
    <div>
      {!detailProfileData ? (
        <Loader />
      ) : (
        PROJECT_HISTORY_STATE &&
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
        })
      )}
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={onAddProjectHistoryTemplate}>
          ???????????? ?????? ?????? +
        </S.ProfileButton>
      </S.FlexCenter>

      <S.FlexCenter>
        <S.ProjectButtonSave type="button" onClick={handleSubmit}>
          ???????????? ???????????? ??????
        </S.ProjectButtonSave>
      </S.FlexCenter>
    </div>
  );
};

export default ProjectHistory;
