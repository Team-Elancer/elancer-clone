import { useState } from 'react';
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
    </S.FrameProfile>
  );
};

export default MyBoardProfileModify;
