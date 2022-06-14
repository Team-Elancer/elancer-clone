import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from '../style';

import ProjectHistoryTemplate from './ProjectHistoryTemplate';
// #info
// # DevelopField 구성{
// #    ("산업"),
// #    APPLICATION("응용")
// #}

// #req
// {
//   "projectTitle": "프로젝트명",
//   "projectStartDate": "2020-01-01",
//   "projectEndDate": "2020-03-01",
//   "clientCompany": "고객사",
//   "workCompany": "상주사",
//   "developField": "INDUSTRY",
//   "developRole": "백엔드 개발자",
//   "developEnvironmentModel": "개발환경 기종",
//   "developEnvironmentOS": "개발환경 os",
//   "developEnvironmentLanguage": "개발언어",
//   "developEnvironmentDBName": "개발 디비",
//   "developEnvironmentTool": "개발 툴",
//   "developEnvironmentCommunication": "개발 통신",
//   "developEnvironmentEtc": "기타",
//   "responsibilityTask": "담당업무 입니다."
// }

const ProjectHistory = () => {
  const [PROJECT_HISTORY, SET_PROJECT_HISTORY] = useState({
    projectTitle: '',
    projectStartDate: '',
    projectEndDate: '',
    clientCompany: '',
    workCompany: '',
    developField: 'APPLICATION',
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
  });

  const handleProjectHistoryState = (e) => {
    const { value, name } = e.target;

    const LIST = [PROJECT_HISTORY];
    LIST[name] = value;

    SET_PROJECT_HISTORY(LIST);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="">
      <ProjectHistoryTemplate handleProjectHistoryState={handleProjectHistoryState} PROJECT_HISTORY={PROJECT_HISTORY} />

      <S.FlexCenter>
        <S.ButtonAddExtra type="button">프로젝트 수정</S.ButtonAddExtra>
        <S.ButtonAddExtra type="button">프로젝트 삭제</S.ButtonAddExtra>
      </S.FlexCenter>
      <S.FlexCenter>
        <S.ProfileButton type="button"> 프로젝트 이력 추가 + </S.ProfileButton>
      </S.FlexCenter>
    </form>
  );
};

export default ProjectHistory;
