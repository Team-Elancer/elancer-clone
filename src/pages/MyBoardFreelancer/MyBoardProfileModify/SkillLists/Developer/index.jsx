import { useState } from 'react';

import * as S from '../../style';

import {
  JAVA_DETAIL_SKILL_FRONT,
  JAVA_DETAIL_SKILL_DB,
  MOBILE_APP_DETAIL_SKILL_FRONT,
  MOBILE_APP_DETAIL_SKILL_DB,
  PHP_OR_ASP_DETAIL_SKILL_FRONT,
  PHP_OR_ASP_DETAIL_SKILL_DB,
  DOT_NET_DETAIL_SKILL_FRONT,
  DOT_NET_DETAIL_SKILL_DB,
  JAVA_SCRIPT_DETAIL_FRONT,
  JAVA_SCRIPT_DETAIL_DB,
  C_DETAIL_FRONT,
  C_DETAIL_DB,
  DB_DETAIL_FRONT,
  DB_DETAIL_DB,
} from 'utils/constants/freelancerPosition/developer';

const Developer = ({
  handleTwoJobField,
  JavaDetailSkillSTATE,
  MobileAppDetailSkillSTATE,
  PhpOrAspDetailSkillSTATE,
  DotNetDetailSkillSTATE,
  JavaScriptDetailSkillSTATE,
  CDetailSkillSTATE,
  DBDetailSkillSTATE,
  focusSkills,
  setFocusSkills,
  roles,
  setRoles,
  etcSkill,
  setEtcSkill,
  submitDeveloper,
}) => {
  // Filter the database index for CSS(active)
  const JavaDetailFilteredIndex = JavaDetailSkillSTATE.map((frontIndex) => JAVA_DETAIL_SKILL_DB.indexOf(frontIndex));

  const MobileAppDetailFilteredIndex = MobileAppDetailSkillSTATE.map((frontIndex) =>
    MOBILE_APP_DETAIL_SKILL_DB.indexOf(frontIndex),
  );

  const PHPorASPDetailFilteredIndex = PhpOrAspDetailSkillSTATE.map((frontIndex) =>
    PHP_OR_ASP_DETAIL_SKILL_DB.indexOf(frontIndex),
  );

  const DotNetDetailFilteredIndex = DotNetDetailSkillSTATE.map((frontIndex) =>
    DOT_NET_DETAIL_SKILL_DB.indexOf(frontIndex),
  );

  const JavaScriptDetailFilteredIndex = JavaScriptDetailSkillSTATE.map((frontIndex) =>
    JAVA_SCRIPT_DETAIL_DB.indexOf(frontIndex),
  );

  const CDetailFilteredIndex = CDetailSkillSTATE.map((frontIndex) => C_DETAIL_DB.indexOf(frontIndex));

  const DBDetailFilteredIndex = DBDetailSkillSTATE.map((frontIndex) => DB_DETAIL_DB.indexOf(frontIndex));

  const [focusSkillsText, setFocusSkillsText] = useState('');
  const [rolesText, setRolesText] = useState('');

  const handleText = (e, str) => {
    if (str === 'skills') {
      setFocusSkillsText('');
      if (focusSkills.length < 3 && e.target.value) {
        setFocusSkills((prev) => e.target.value !== prev && [...prev, e.target.value]);
      }
    }

    if (str === 'roles') {
      setRolesText('');
      if (roles.length < 3 && e.target.value) {
        setRoles((prev) => e.target.value !== prev && [...prev, e.target.value]);
      }
    }
  };

  const onDeleteText = (idx, str) => {
    if (str === 'skills') {
      const newList = [...focusSkills];
      newList.splice(idx, 1);

      setFocusSkills(newList);
    }

    if (str === 'roles') {
      const newList = [...roles];
      newList.splice(idx, 1);

      setRoles(newList);
    }
  };

  return (
    <>
      <S.EtalkTriangleContainer>
        <S.EtalkTriangleSpan>회원님의 전문분야를 바탕으로 프로젝트 정보를 제공 받으실 수 있습니다.</S.EtalkTriangleSpan>
        <S.EtalkTriangle>.</S.EtalkTriangle>
      </S.EtalkTriangleContainer>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.IntroStarLetters>주언어</S.IntroStarLetters>
          <S.ContainerMainSpan>
            <S.ContainerMainLanguage>
              <S.LangaugeDIV>
                {focusSkills?.map((word, index) => (
                  <S.ContainerMainContent key={`MainContentSpan${index + 1}`} id={index}>
                    <S.MainContentSpan> {word} </S.MainContentSpan>
                    <S.MainContentDeleteSpan onClick={() => onDeleteText(index, 'skills')}> x </S.MainContentDeleteSpan>
                  </S.ContainerMainContent>
                ))}
                <S.InputHero
                  type="text"
                  autoComplete="off"
                  name="main_language"
                  value={focusSkillsText || ''}
                  onChange={(e) => setFocusSkillsText(e.target.value)}
                  onBlur={(e) => {
                    handleText(e, 'skills');
                  }}
                />
              </S.LangaugeDIV>
            </S.ContainerMainLanguage>
          </S.ContainerMainSpan>
        </S.ContainerIntro>
        <S.TextInfo>예) JAVA, MobileApp, PHP, ASP, .NET, JavaScript, C, C++, DB</S.TextInfo>
      </S.FrameJobSkill>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.IntroStarLetters>역할</S.IntroStarLetters>
          <S.ContainerMainSpan>
            <S.ContainerMainLanguage>
              <S.LangaugeDIV>
                {roles?.map((word, index) => (
                  <S.ContainerMainContent key={`MainRoleSpan${index + 1}`} id={index}>
                    <S.MainContentSpan> {word} </S.MainContentSpan>
                    <S.MainContentDeleteSpan onClick={() => onDeleteText(index, 'roles')}> x </S.MainContentDeleteSpan>
                  </S.ContainerMainContent>
                ))}
                <S.InputHero
                  type="text"
                  autoComplete="off"
                  name="main_language"
                  value={rolesText || ''}
                  onChange={(e) => setRolesText(e.target.value)}
                  onBlur={(e) => {
                    handleText(e, 'roles');
                  }}
                />
              </S.LangaugeDIV>
            </S.ContainerMainLanguage>
          </S.ContainerMainSpan>
        </S.ContainerIntro>
        <S.TextInfo>예) PM, PL, DBA, TA, PMO, SE</S.TextInfo>
      </S.FrameJobSkill>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              스킬 & 경험 (각 언어별로 2개씩 까지만 선택가능)
            </S.IntroStarLetters>
          </S.FlexColumn>
        </S.ContainerIntro>
      </S.FrameJobSkill>

      {/* ======= JavaDetailSkill LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>JAVA</S.SubjectTitle>
          <S.ContainerOptions>
            {JAVA_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={JAVA_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={JavaDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'java');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= MobileAppDetailSkill LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>Mobile App</S.SubjectTitle>
          <S.ContainerOptions>
            {MOBILE_APP_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={MOBILE_APP_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={MobileAppDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'mobile_App');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= PhpOrAspDetailSkillSTATE LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>PHP/ASP</S.SubjectTitle>
          <S.ContainerOptions>
            {PHP_OR_ASP_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={PHP_OR_ASP_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={PHPorASPDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'php_asp');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= DotNetDetailSkill LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>.NET</S.SubjectTitle>
          <S.ContainerOptions>
            {DOT_NET_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={DOT_NET_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={DotNetDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, '.net');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= JavaScriptDetailSkill LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>JavaScript</S.SubjectTitle>
          <S.ContainerOptions>
            {JAVA_SCRIPT_DETAIL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={JAVA_SCRIPT_DETAIL_DB[index]}
                  // Compare front[index] with back[index]
                  active={JavaScriptDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'javascript');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= CD LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle>C/C++</S.SubjectTitle>
          <S.ContainerOptions>
            {C_DETAIL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={C_DETAIL_DB[index]}
                  // Compare front[index] with back[index]
                  active={CDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'C_detail');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= DB LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.SubjectTitle> DB </S.SubjectTitle>
          <S.ContainerOptions>
            {DB_DETAIL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={DB_DETAIL_DB[index]}
                  // Compare front[index] with back[index]
                  active={DBDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleTwoJobField(e, 'DB');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= 직접 입력 ======= */}
      <S.JobFieldInput
        type="text"
        placeholder="직접입력"
        value={etcSkill || ''}
        onChange={(e) => setEtcSkill(e.target.value)}
      />

      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitDeveloper}>
          스킬 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default Developer;
