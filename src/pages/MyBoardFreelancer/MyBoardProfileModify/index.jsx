import { useState } from 'react';
import CareerInfo from './CareerInfo';
import EducationInfo from './EducationInfo';
import JobSkill from './JobSkill';
import DeveloperSkillList from './SkillLists/DeveloperSkillList';

import * as S from './style';

const MyBoardProfileModify = () => {
  const [bgColor, setBgColor] = useState('');
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
      <S.ContainerImageProfile>
        <S.ImageProfile src="https://www.elancer.co.kr/public/images/img-user-none.png" alt="" />
        <S.ImageUpload src="https://www.elancer.co.kr/public/images/img-camera-wh.png" alt="" />
      </S.ContainerImageProfile>
      <S.ContainerSubject>
        <S.FontLargeSubject>프로필 제목</S.FontLargeSubject>
        <S.SubjectInput type="text" name="intro_title" id="intro_title" placeholder="프로필 제목을 입력해주세요" />
      </S.ContainerSubject>

      {/* ============== Introduction 소개정보 ============== */}
      <S.FontLarge>소개정보</S.FontLarge>
      <S.BoxFrame>
        <form action="">
          <S.FrameIntro>
            <S.ContainerIntro>
              <S.IntroLetters>소개 이름</S.IntroLetters>
              <S.IntroInputName type="text" name="intro_name" placeholder="이름" />
            </S.ContainerIntro>
          </S.FrameIntro>
          <S.ContainerIntro>
            <S.IntroLetters>소개 배경</S.IntroLetters>
            <S.ColorUl>
              <S.Boxli liColor={bgColor === '#181818' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#181818"
                  name="color"
                  type="radio"
                  value="#181818"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === 'white' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="white"
                  name="color"
                  type="radio"
                  value="white"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#7485c9' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#7485c9"
                  name="color"
                  type="radio"
                  value="#7485c9"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#8a7fa4' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#8a7fa4"
                  name="color"
                  type="radio"
                  value="#8a7fa4"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#9d7985' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#9d7985"
                  name="color"
                  type="radio"
                  value="#9d7985"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#b57360' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#b57360"
                  name="color"
                  type="radio"
                  value="#b57360"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#d56b2d' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#d56b2d"
                  name="color"
                  type="radio"
                  value="#d56b2d"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#f16300' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#f16300"
                  name="color"
                  id="black"
                  type="radio"
                  value="#f16300"
                  onClick={(e) => setBgColor(e.target.value)}
                />
              </S.Boxli>
            </S.ColorUl>
          </S.ContainerIntro>
          <S.FrameIntro>
            <S.ContainerIntro>
              <S.IntroLetters>소개영상 URL</S.IntroLetters>
              <S.IntroInputLarge
                type="text"
                name="intro_name"
                placeholder="
소개영상 URL
"
              />
            </S.ContainerIntro>
          </S.FrameIntro>
          <S.FrameIntro>
            <S.ContainerIntro>
              <S.IntroLetters>소개 글</S.IntroLetters>
              <S.IntroInputLarge
                type="text"
                name="intro_name"
                placeholder="프로필에 보여질 소개글을 작성해주세요."
                ㄴ
              />
            </S.ContainerIntro>
          </S.FrameIntro>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 소개정보 저장 </S.ProfileButton>
          </S.FlexCenter>
        </form>
      </S.BoxFrame>

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
        <form action="">
          <S.EducationContainer>
            <S.TextLabel>교육명</S.TextLabel>
            <S.ContainerSelectOption width="300">
              <S.IntroInputName type="text" placeholder="교육명" />
              <S.IntroInputName type="text" placeholder="교육기관 입력하세요" />

              <S.RemoveButton>X</S.RemoveButton>
            </S.ContainerSelectOption>
          </S.EducationContainer>
          {/* 교육기간 */}
          <S.EducationContainer>
            <S.TextLabel>교육기간</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <S.IntroInputName type="text" placeholder="2000.03" />
              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <S.IntroInputName type="text" placeholder="2003.02" />
            </S.ContainerSelectOption>
          </S.EducationContainer>
          <S.FlexCenter>
            <S.ButtonAddExtra type="button">교육 추가+ </S.ButtonAddExtra>
            <S.ButtonAddExtra type="button">자격증 추가+ </S.ButtonAddExtra>
            <S.ButtonAddExtra type="button">어학 추가+ </S.ButtonAddExtra>
          </S.FlexCenter>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 교육 및 자격사항 저장 </S.ProfileButton>
          </S.FlexCenter>
        </form>
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
