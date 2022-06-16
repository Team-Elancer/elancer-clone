import { useState } from 'react';

import * as S from '../../style';

import {
  PUBLISHING_DETAIL_SKILL_FRONT,
  PUBLISHING_DETAIL_SKILL_DB,
} from 'utils/constants/freelancerPosition/publisher';

const Publisher = ({
  PublishingDetailSkillSTATE,
  publishingEtcSkill,
  setPublishingEtcSkill,
  handleThreeJobField,
  submitPublisher,
}) => {
  // Filter the database index for CSS(active)
  const PublishingDetailFilteredIndex = PublishingDetailSkillSTATE.map((frontIndex) =>
    PUBLISHING_DETAIL_SKILL_DB.indexOf(frontIndex),
  );

  return (
    <>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              스킬 & 경험 (각 언어별로 3개씩 까지만 선택가능)
            </S.IntroStarLetters>
            <S.EtalkTriangleDIV>
              <S.EtalkTriangleShape>
                회원님의 전문분야를 바탕으로 프로젝트 정보를 제공 받으실 수 있습니다.
              </S.EtalkTriangleShape>
              <S.EtalkTriangleOthers>.</S.EtalkTriangleOthers>
            </S.EtalkTriangleDIV>
          </S.FlexColumn>
        </S.ContainerIntro>
      </S.FrameJobSkill>

      {/* ======= PublishingDetailSkill LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.ContainerOptions>
            {PUBLISHING_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={PUBLISHING_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={PublishingDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleThreeJobField(e, 'publisher');
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
        value={publishingEtcSkill || ''}
        onChange={(e) => setPublishingEtcSkill(e.target.value)}
      />

      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitPublisher}>
          스킬 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default Publisher;
