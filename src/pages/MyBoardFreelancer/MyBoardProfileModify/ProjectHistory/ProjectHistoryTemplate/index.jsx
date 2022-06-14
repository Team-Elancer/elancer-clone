import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from '../../style';

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

const ProjectHistoryTemplate = ({ PROJECT_HISTORY }) => {
  const {
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
  } = PROJECT_HISTORY;

  const handleChangeValue = (e) => {
    console.log('textarea bugs -> no need enclosing tag');
  };

  return (
    <>
      <S.EducationContainer>
        <S.TextLabel>프로젝트명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName type="text" placeholder="프로젝트명을 입력하세요" />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* 기간 */}

      <S.EducationContainer>
        <S.TextLabel>기간</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <S.IntroInputName type="text" placeholder="2000.03" />
          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <S.IntroInputName type="text" placeholder="2003.02" />
        </S.ContainerSelectOption>
      </S.EducationContainer>
      <S.EducationContainer>
        <S.TextLabel>고객사</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <S.IntroInputName type="text" placeholder="고객사" />
          <S.IntroInputName type="text" placeholder="근무사를 입력하세요" />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* 개발분야 */}

      <S.EducationContainer>
        <S.TextLabel>개발분야</S.TextLabel>
        <S.ContainerSelectOption width="500">
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv>
                <S.FlexDiv>
                  <S.RadioDiv>
                    <S.RadioInput type="radio" name="job" value="POSSIBLE" />
                    <S.RadioText>산업</S.RadioText>
                  </S.RadioDiv>
                  <S.RadioDiv>
                    <S.RadioInput type="radio" name="job" value="IMPOSSIBLE" />
                    <S.RadioText>응용</S.RadioText>
                  </S.RadioDiv>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>
          <S.IntroInputName type="text" placeholder="역할을 입력하세요" />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* 개발환경 */}

      <S.EducationContainer noFlex>
        <S.TextLabel marginTop="0.5">개발환경</S.TextLabel>
        <div>
          <S.ContainerSelectOption width="500">
            <S.InputText type="text" placeholder="기종" />
            <S.InputText type="text" placeholder="OS" />
            <S.InputText type="text" placeholder="언어" />
            <S.InputText type="text" placeholder="DBMS" />
          </S.ContainerSelectOption>
          <S.ContainerSelectOption width="500">
            <S.InputText type="text" placeholder="TOOL" />
            <S.InputText type="text" placeholder="통신" />
            <S.InputText type="text" placeholder="기타" />
          </S.ContainerSelectOption>
        </div>
      </S.EducationContainer>

      {/* 담당업무 */}

      <S.EducationContainer>
        <S.TextLabel marginTop="0.5">담당업무</S.TextLabel>

        <S.ContainerSelectOption width="600">
          <S.InputTextArea
            placeholder="담당업무를 상세하게 적어주시면 프로젝트 추천 시 도움이 됩니다."
            name="responsibilityTask"
            value={responsibilityTask}
            onChange={(e) => handleChangeValue(e)}
          />
        </S.ContainerSelectOption>
      </S.EducationContainer>
    </>
  );
};

export default ProjectHistoryTemplate;
