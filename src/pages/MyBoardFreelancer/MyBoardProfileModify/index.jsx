import { useState } from 'react';
import EducationInfo from './EducationInfo';
import JobSkill from './JobSkill';
import DeveloperSkillList from './SkillLists/DeveloperSkillList';

import * as S from './style';

const MyBoardProfileModify = () => {
  const [bgColor, setBgColor] = useState('');
  const [jobRadio, setJobRadio] = useState('');

  const changeBgColor = (e) => {
    setBgColor(e.target.value);
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
      {/* ============== Introduction ============== */}
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
                  id="black"
                  type="radio"
                  value="#181818"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === 'white' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="white"
                  name="color"
                  id="black"
                  type="radio"
                  value="white"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#7485c9' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#7485c9"
                  name="color"
                  id="black"
                  type="radio"
                  value="#7485c9"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#8a7fa4' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#8a7fa4"
                  name="color"
                  id="black"
                  type="radio"
                  value="#8a7fa4"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#9d7985' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#9d7985"
                  name="color"
                  id="black"
                  type="radio"
                  value="#9d7985"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#b57360' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#b57360"
                  name="color"
                  id="black"
                  type="radio"
                  value="#b57360"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#d56b2d' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#d56b2d"
                  name="color"
                  id="black"
                  type="radio"
                  value="#d56b2d"
                  onClick={changeBgColor}
                />
              </S.Boxli>
              <S.Boxli liColor={bgColor === '#f16300' ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor="#f16300"
                  name="color"
                  id="black"
                  type="radio"
                  value="#f16300"
                  onClick={changeBgColor}
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
      {/* ============== JobSkill ============== */}
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
      {/* ============== EducationInfo ============== */}
      <S.FontLarge>학력사항</S.FontLarge>
      <S.BoxFrame>
        <form action="">
          <EducationInfo />
          {/* 학교명 */}
          <S.EducationContainer>
            <S.TextLabel>학교명</S.TextLabel>
            <S.ContainerSelectOption>
              <S.IntroInputName type="text" placeholder="학교명" />
              <S.SelectInputName name="school">
                <option value="school">고등학교</option>
                <option value="school">대학(2,3년)</option>
                <option value="school">대학교(4년)</option>
                <option value="school">대학원(석사)</option>
                <option value="school">대학원(박사)</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>
          {/* 재학기간 */}
          <S.EducationContainer>
            <S.TextLabel>재학기간</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <S.IntroInputName type="text" placeholder="2000.03" />
              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <S.IntroInputName type="text" placeholder="2003.02" />
              <S.SelectInputName name="duration">
                <option value="duration">재학</option>
                <option value="duration">휴학</option>
                <option value="duration">중퇴</option>
                <option value="duration">졸업</option>
                <option value="duration">수료/이수</option>
              </S.SelectInputName>
            </S.ContainerSelectOption>
          </S.EducationContainer>
          {/* 전공명 */}
          <S.EducationContainer>
            <S.TextLabel>전공명</S.TextLabel>
            <S.IntroInputLarge
              type="text"
              name="intro_name"
              placeholder="
전공명
"
            />
          </S.EducationContainer>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 학력사항 저장 </S.ProfileButton>
          </S.FlexCenter>
        </form>
      </S.BoxFrame>

      {/* ============== CareerInfo (add/remove) ============== */}
      <S.FontLarge>근무경력</S.FontLarge>
      <S.BoxFrame>
        <form action="">
          <S.EducationContainer>
            <S.TextLabel>회사명</S.TextLabel>
            <S.ContainerSelectOption width="300">
              <S.IntroInputName type="text" placeholder="회사명" />
              <S.IntroInputName type="text" placeholder="부서명을 입력하세요" />
              <S.SelectInputName name="position">
                <option value="position">회장</option>
                <option value="position">부회장</option>
                <option value="position">사장</option>
                <option value="position">사원</option>
                <option value="position">기타</option>
              </S.SelectInputName>
              <S.RemoveButton>X</S.RemoveButton>
            </S.ContainerSelectOption>
          </S.EducationContainer>
          {/* 근무년월 */}
          <S.EducationContainer>
            <S.TextLabel>근무년월</S.TextLabel>
            <S.ContainerSelectOption width="130">
              <S.IntroInputName type="text" placeholder="2000.03" />
              <S.BetweenInputSpan> ~ </S.BetweenInputSpan>
              <S.IntroInputName type="text" placeholder="2003.02" />
            </S.ContainerSelectOption>
          </S.EducationContainer>
          <S.FlexCenter>
            <S.ButtonAddExtra type="button">경력 추가+ </S.ButtonAddExtra>
          </S.FlexCenter>
          <S.FlexCenter>
            <S.ProfileButton type="button"> 근무경력 저장 </S.ProfileButton>
          </S.FlexCenter>
        </form>
      </S.BoxFrame>

      {/* ============== Certificate (add/remove) ============== */}
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
    </S.FrameProfile>
  );
};

export default MyBoardProfileModify;
