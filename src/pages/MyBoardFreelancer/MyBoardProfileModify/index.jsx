import { useState } from 'react';
import CareerInfo from './CareerInfo';
import Certificate from './Certificate';
import EducationInfo from './EducationInfo';
import JobSkill from './JobSkill';
import ProfileIntro from './ProfileIntro';
import DeveloperSkillList from './SkillLists/DeveloperSkillList';

import * as S from './style';

const MyBoardProfileModify = () => {
  const [jobRadio, setJobRadio] = useState('');
  const [carrerTextArea, setCarrerTextArea] = useState(
    'ex00은행 채용시스템 고도화 개발-관리자 경력에 따른 채용 기능 추가-경력에 따른 DB정보 검색 기능개발-개인정보 관련하여 수정사항 개발',
  );

  const jobRadioFuntion = (e) => {
    setJobRadio(e.target.value);
  };

  const changeCarrerTextArea = (e) => {
    setCarrerTextArea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.FrameProfile>
      <S.ContainerTop>
        <S.FontLargeSpan>⬅</S.FontLargeSpan>
        <S.FontLarge>프로필 작성</S.FontLarge>
      </S.ContainerTop>

      {/* ============== Introduction 소개정보 ============== */}

      <ProfileIntro />

      {/* ============== JobSkill 스킬 ============== */}

      <S.FontLarge>스킬</S.FontLarge>
      <S.BoxFrame>
        <form action="">
          <JobSkill />
          <S.FrameJobSkill>
            <S.ContainerIntro>
              <S.IntroStarLetters>주언어</S.IntroStarLetters>
              <S.IntroInputLarge type="text" name="main_language" placeholder="주언어" />
            </S.ContainerIntro>
            <S.TextInfo>예) JAVA, MobileApp, PHP, ASP, .NET, JavaScript, C, C++, DB</S.TextInfo>
          </S.FrameJobSkill>
          <S.FrameJobSkill>
            <S.ContainerIntro>
              <S.IntroStarLetters>역할</S.IntroStarLetters>
              <S.IntroInputLarge type="text" name="main_language" placeholder="역할" />
            </S.ContainerIntro>
            <S.TextInfo>예) PM, PL, DBA, TA, PMO, SE</S.TextInfo>
          </S.FrameJobSkill>
          <S.FrameJobSkill>
            <S.ContainerIntro>
              <S.FlexColumn>
                <S.IntroStarLetters fullWidth="100" marginBottom="1">
                  스킬 & 경험 (각 언어별로 2개씩 까지만 선택가능)
                </S.IntroStarLetters>
                {/* ============== SkillLists > DeveloperSkillList ============== */}
                <DeveloperSkillList />
                <S.JobFieldInput type="text" placeholder="직접입력" />
              </S.FlexColumn>
            </S.ContainerIntro>
          </S.FrameJobSkill>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 스킬 저장 </S.ProfileButton>
          </S.FlexCenter>
        </form>
      </S.BoxFrame>

      {/* ============== EducationInfo 학력사항 ============== */}

      <S.FontLarge>학력사항</S.FontLarge>
      <S.BoxFrame>
        <EducationInfo />
      </S.BoxFrame>

      {/* ============== CareerInfo (add/remove) 근무경력 ============== */}

      <S.FontLarge>근무경력</S.FontLarge>
      <S.BoxFrame>
        <CareerInfo />
      </S.BoxFrame>

      {/* ============== Certificate (add/remove) 교육 및 자격사항 ============== */}

      <S.FontLarge>교육 및 자격사항</S.FontLarge>
      <S.BoxFrame>
        <Certificate />
      </S.BoxFrame>

      {/* ==============  프로젝트 수행이력 (add/remove) ============== */}

      <S.FontLarge>프로젝트 수행이력</S.FontLarge>
      <S.BoxFrame>
        <form action="">
          <S.EducationContainer>
            <S.TextLabel>프로젝트명</S.TextLabel>
            <S.ContainerSelectOption width="300">
              <S.IntroInputName type="text" placeholder="프로젝트명을 입력하세요" />
            </S.ContainerSelectOption>
          </S.EducationContainer>
          {/* 교육기간 */}
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

          <S.EducationContainer>
            <S.TextLabel>개발분야</S.TextLabel>
            <S.ContainerSelectOption width="500">
              <S.MarginAutoDiv>
                <S.EmailFlex>
                  <S.InputDiv>
                    <S.FlexDiv onChange={jobRadioFuntion}>
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

          <S.EducationContainer>
            <S.TextLabel marginTop="0.5">담당업무</S.TextLabel>

            <S.ContainerSelectOption width="600">
              <S.InputTextArea
                placeholder="담당업무를 상세하게 적어주시면 프로젝트 추천 시 도움이 됩니다."
                name="career textarea"
                value={carrerTextArea}
                onChange={changeCarrerTextArea}
              >
                {carrerTextArea}
              </S.InputTextArea>
            </S.ContainerSelectOption>
          </S.EducationContainer>

          <S.FlexCenter>
            <S.ButtonAddExtra type="button">프로젝트 수정</S.ButtonAddExtra>
            <S.ButtonAddExtra type="button">프로젝트 삭제</S.ButtonAddExtra>
          </S.FlexCenter>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 프로젝트 이력 추가 + </S.ProfileButton>
          </S.FlexCenter>
        </form>
      </S.BoxFrame>
    </S.FrameProfile>
  );
};

export default MyBoardProfileModify;
