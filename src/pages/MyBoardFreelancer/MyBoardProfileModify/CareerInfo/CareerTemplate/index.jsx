import styled from 'styled-components';

import * as S from '../../style';

const CareerTemplate = ({ onDeleteTemplate, handleStateChange, state, index }) => {
  const { companyName, departmentName, companyPosition, careerStartDate, careerEndDate } = state;

  return (
    <FrameCareerContainer>
      <S.EducationContainer>
        <S.TextLabel>회사명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="회사명"
            name="companyName"
            onChange={(e) => handleStateChange(e, index)}
            value={companyName || ''}
            required
          />
          <S.IntroInputName
            type="text"
            placeholder="부서명을 입력하세요"
            name="departmentName"
            value={departmentName || ''}
            onChange={(e) => handleStateChange(e, index)}
            required
          />

          <S.SelectInputName
            name="companyPosition"
            value={companyPosition || 'ASSISTANT_MANAGER'}
            onChange={(e) => handleStateChange(e, index)}
            required
          >
            <option value="CHAIRMAN">회장</option>
            <option value="A_VICE_CHAIRMAN">부회장</option>
            <option value="PRESIDENT">사장</option>
            <option value="A_VICE_PRESIDENT">부사장</option>
            <option value="EXECUTIVE_DIRECTOR">전무</option>
            <option value="DIRECTOR">상무</option>
            <option value="A_VICE_DIRECTOR">이사</option>
            <option value="GENERAL_MANAGER"> 부장</option>
            <option value="DEPUTY_GENERAL_MANAGER"> 차장 </option>
            <option value="SUPERVISOR"> 과장 </option>
            <option value="HEAD_OF_DEPARTMENT">실장 </option>
            <option value="TEAM_LEADER"> 팀장 </option>
            <option value="ASSISTANT_MANAGER">대리 </option>
            <option value="SECTION_CHIEF"> 계장 </option>
            <option value="TEAM_MANAGER"> 주임 </option>
            <option value="STAFF"> 사원 </option>
            <option value="LABORATORY_CHIEF"> 연구소장</option>
            <option value="TOP_RESEARCHER"> 수석 연구원 </option>
            <option value="SENIOR_RESEARCHER"> 책임 연구원 </option>
            <option value="A_VICE_SENIOR_RESEARCHER"> 선임 연구원 </option>
            <option value="CHIEF_RESEARCHER"> 주임 연구원 </option>
            <option value="RESEARCHER"> 연구원 </option>
            <option value="TEMPORARY_POSITION"> 임시직 </option>
            <option value="ETC"> 기타 </option>
            <option value="MANAGER"> 매니저 </option>
          </S.SelectInputName>
          <S.RemoveButton onClick={() => onDeleteTemplate(index)}>X</S.RemoveButton>
        </S.ContainerSelectOption>
      </S.EducationContainer>
      <S.EducationContainer>
        <S.TextLabel>근무년월</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <label htmlFor="careerStartDate">
            <S.IntroInputNameDate
              name="careerStartDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={careerStartDate || ''}
              onChange={(e) => handleStateChange(e, index)}
              required
            />
          </label>
          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <label htmlFor="careerEndDate">
            <S.IntroInputNameDate
              name="careerEndDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={careerEndDate || ''}
              onChange={(e) => handleStateChange(e, index)}
              required
            />
          </label>
        </S.ContainerSelectOption>
      </S.EducationContainer>
    </FrameCareerContainer>
  );
};

export default CareerTemplate;

const FrameCareerContainer = styled.div`
  width: 100%;
`;
