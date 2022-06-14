import { useState } from 'react';
import CareerInfo from './CareerInfo';
import Certificate from './Certificate';
import EducationInfo from './EducationInfo';

import ProfileIntro from './ProfileIntro';
import ProjectHistory from './ProjectHistory';
import SkillLists from './SkillLists';

import * as S from './style';

const MyBoardProfileModify = () => {
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
          <SkillLists />
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
        <ProjectHistory />
      </S.BoxFrame>
    </S.FrameProfile>
  );
};

export default MyBoardProfileModify;
