import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from '../../style';

const ProjectHistoryTemplate = ({ state, index, onDeleteTemplate, handleProjectHistoryState }) => {
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
  } = state;

  return (
    <>
      {/* ====== 프로젝트명 ====== */}
      <S.EducationContainer>
        <S.TextLabel>프로젝트명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            placeholder="프로젝트명을 입력하세요"
            type="text"
            name="projectTitle"
            value={projectTitle || ''}
            onChange={(e) => handleProjectHistoryState(e, index)}
          />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* ====== 기간 ====== */}

      <S.EducationContainer>
        <S.TextLabel>기간</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <label htmlFor="projectStartDate">
            <S.IntroInputNameDate
              name="projectStartDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={projectStartDate || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
              required
            />
          </label>
          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <label htmlFor="projectEndDate">
            <S.IntroInputNameDate
              name="projectEndDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={projectEndDate || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
              required
            />
          </label>
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* ====== 고객사 ====== */}
      <S.EducationContainer>
        <S.TextLabel>고객사</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="고객사"
            name="clientCompany"
            onChange={(e) => handleProjectHistoryState(e, index)}
            value={clientCompany || ''}
            required
          />
          <S.IntroInputName
            type="text"
            placeholder="근무사 입력하세요"
            name="workCompany"
            value={workCompany || ''}
            onChange={(e) => handleProjectHistoryState(e, index)}
            required
          />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* ====== 개발분야 ====== */}
      <S.EducationContainer>
        <S.TextLabel>개발분야</S.TextLabel>
        <S.ContainerSelectOption width="500">
          <S.MarginAutoDiv>
            <S.EmailFlex>
              <S.InputDiv>
                <S.FlexDiv>
                  <form>
                    <S.RadioDiv>
                      <S.RadioInput
                        type="radio"
                        name="developField"
                        value="INDUSTRY"
                        checked={developField === 'INDUSTRY'}
                        onChange={(e) => handleProjectHistoryState(e, index)}
                      />
                      <S.RadioText>산업</S.RadioText>
                    </S.RadioDiv>
                  </form>
                  <form>
                    <S.RadioDiv>
                      <S.RadioInput
                        type="radio"
                        name="developField"
                        value="APPLICATION"
                        checked={developField === 'APPLICATION'}
                        onChange={(e) => handleProjectHistoryState(e, index)}
                      />
                      <S.RadioText>응용</S.RadioText>
                    </S.RadioDiv>
                  </form>
                </S.FlexDiv>
              </S.InputDiv>
            </S.EmailFlex>
          </S.MarginAutoDiv>
          <S.IntroInputName
            type="text"
            placeholder="역할을 입력하세요"
            name="developRole"
            value={developRole || ''}
            onChange={(e) => handleProjectHistoryState(e, index)}
          />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      {/* ====== 개발환경 ====== */}

      <S.EducationContainer noFlex>
        <S.TextLabel marginTop="0.5">개발환경</S.TextLabel>
        <div>
          <S.ContainerSelectOption width="500">
            <S.InputText
              type="text"
              placeholder="기종"
              name="developEnvironmentModel"
              value={developEnvironmentModel || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
            <S.InputText
              type="text"
              placeholder="OS"
              name="developEnvironmentOS"
              value={developEnvironmentOS || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
            <S.InputText
              type="text"
              placeholder="언어"
              name="developEnvironmentLanguage"
              value={developEnvironmentLanguage || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
            <S.InputText
              type="text"
              placeholder="DBMS"
              name="developEnvironmentDBName"
              value={developEnvironmentDBName || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
          </S.ContainerSelectOption>
          <S.ContainerSelectOption width="500">
            <S.InputText
              type="text"
              placeholder="TOOL"
              name="developEnvironmentTool"
              value={developEnvironmentTool || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
            <S.InputText
              type="text"
              placeholder="통신"
              name="developEnvironmentCommunication"
              value={developEnvironmentCommunication || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
            <S.InputText
              type="text"
              placeholder="기타"
              name="developEnvironmentEtc"
              value={developEnvironmentEtc || ''}
              onChange={(e) => handleProjectHistoryState(e, index)}
            />
          </S.ContainerSelectOption>
        </div>
      </S.EducationContainer>

      {/* ====== 담당업무 ====== */}

      <S.EducationContainer>
        <S.TextLabel marginTop="0.5">담당업무</S.TextLabel>

        <S.ContainerSelectOption width="600">
          <S.InputTextArea
            placeholder="담당업무를 상세하게 적어주시면 프로젝트 추천 시 도움이 됩니다."
            name="responsibilityTask"
            value={responsibilityTask || ''}
            onChange={(e) => handleProjectHistoryState(e, index)}
          />
        </S.ContainerSelectOption>
      </S.EducationContainer>

      <S.FlexCenter>
        <S.ButtonAddExtra type="button" onClick={() => onDeleteTemplate(index)}>
          프로젝트 삭제
        </S.ButtonAddExtra>
      </S.FlexCenter>
    </>
  );
};

export default ProjectHistoryTemplate;
