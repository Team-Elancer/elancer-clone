import { useState } from 'react';

import * as S from '../style';

/*
 var careerResponses =  [
      {
        "companyName": "회사명",
        "departmentName": "부서명",
        "companyPosition": "TOP_RESEARCHER",
        "careerStartDate": "2018-01-01",
       "careerEndDate": "2019-01-01"
      },
*/

const CareerInfo = () => {
  const [companyName, setCompanyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [companyPosition, setCompanyPosition] = useState('ASSISTANT_MANAGER');
  const [careerStartDate, setCareerStartDate] = useState('');
  const [careerEndDate, setCareerEndDate] = useState('');

  <S.EducationContainer>
    <S.TextLabel>회사명</S.TextLabel>
    <S.ContainerSelectOption width="300">
      <S.IntroInputName
        type="text"
        placeholder="회사명"
        value={companyName || ''}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <S.IntroInputName
        type="text"
        placeholder="부서명을 입력하세요"
        value={departmentName || ''}
        onChange={(e) => setDepartmentName(e.target.value)}
      />
      <S.SelectInputName value={companyPosition || ''} onChange={(e) => setCompanyPosition(e.target.value)}>
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

      <S.RemoveButton>X</S.RemoveButton>
    </S.ContainerSelectOption>
  </S.EducationContainer>;

  /* 근무년월 */

  <S.EducationContainer>
    <S.TextLabel>근무년월</S.TextLabel>
    <S.ContainerSelectOption width="130">
      <label htmlFor="careerStartDate">
        <S.IntroInputNameDate
          id="careerStartDate"
          type="date"
          style={{ width: '200px', fontSize: '1rem' }}
          value={careerStartDate || ''}
          onChange={(e) => setCareerStartDate(e.target.value)}
          required
        />
      </label>
      <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
      <label htmlFor="careerEndDate">
        <S.IntroInputNameDate
          id="careerEndDate"
          type="date"
          style={{ width: '200px', fontSize: '1rem' }}
          value={careerEndDate || ''}
          onChange={(e) => setCareerEndDate(e.target.value)}
          required
        />
      </label>
    </S.ContainerSelectOption>
  </S.EducationContainer>;

  return (
    <form action="">
      <div>
        <S.EducationContainer>
          <S.TextLabel>회사명</S.TextLabel>
          <S.ContainerSelectOption width="300">
            <S.IntroInputName
              type="text"
              placeholder="회사명"
              value={companyName || ''}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <S.IntroInputName
              type="text"
              placeholder="부서명을 입력하세요"
              value={departmentName || ''}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
            <S.SelectInputName value={companyPosition || ''} onChange={(e) => setCompanyPosition(e.target.value)}>
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

            <S.RemoveButton>X</S.RemoveButton>
          </S.ContainerSelectOption>
        </S.EducationContainer>
        {/* 근무년월 */}
        <S.EducationContainer>
          <S.TextLabel>근무년월</S.TextLabel>
          <S.ContainerSelectOption width="130">
            <label htmlFor="careerStartDate">
              <S.IntroInputNameDate
                id="careerStartDate"
                type="date"
                style={{ width: '200px', fontSize: '1rem' }}
                value={careerStartDate || ''}
                onChange={(e) => setCareerStartDate(e.target.value)}
                required
              />
            </label>
            <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
            <label htmlFor="careerEndDate">
              <S.IntroInputNameDate
                id="careerEndDate"
                type="date"
                style={{ width: '200px', fontSize: '1rem' }}
                value={careerEndDate || ''}
                onChange={(e) => setCareerEndDate(e.target.value)}
                required
              />
            </label>
          </S.ContainerSelectOption>
        </S.EducationContainer>
      </div>

      <S.EducationContainer>
        <S.TextLabel>회사명</S.TextLabel>
        <S.ContainerSelectOption width="300">
          <S.IntroInputName
            type="text"
            placeholder="회사명"
            value={companyName || ''}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <S.IntroInputName
            type="text"
            placeholder="부서명을 입력하세요"
            value={departmentName || ''}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <S.SelectInputName value={companyPosition || ''} onChange={(e) => setCompanyPosition(e.target.value)}>
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

          <S.RemoveButton>X</S.RemoveButton>
        </S.ContainerSelectOption>
      </S.EducationContainer>
      {/* 근무년월 */}
      <S.EducationContainer>
        <S.TextLabel>근무년월</S.TextLabel>
        <S.ContainerSelectOption width="130">
          <label htmlFor="careerStartDate">
            <S.IntroInputNameDate
              id="careerStartDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={careerStartDate || ''}
              onChange={(e) => setCareerStartDate(e.target.value)}
              required
            />
          </label>
          <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
          <label htmlFor="careerEndDate">
            <S.IntroInputNameDate
              id="careerEndDate"
              type="date"
              style={{ width: '200px', fontSize: '1rem' }}
              value={careerEndDate || ''}
              onChange={(e) => setCareerEndDate(e.target.value)}
              required
            />
          </label>
        </S.ContainerSelectOption>
      </S.EducationContainer>

      <S.FlexCenter>
        <S.ButtonAddExtra type="button">경력 추가+ </S.ButtonAddExtra>
      </S.FlexCenter>
      <S.FlexCenter>
        <S.ProfileButton type="button"> 근무경력 저장 </S.ProfileButton>
      </S.FlexCenter>
    </form>
  );
};

export default CareerInfo;
