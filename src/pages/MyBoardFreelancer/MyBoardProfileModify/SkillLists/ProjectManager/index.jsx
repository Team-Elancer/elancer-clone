import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from '../../style';

import { PLANNER_DETAIL_FIELD_FRONT, PLANNER_DETAIL_FIELD_DB } from 'utils/constants/freelancerPosition/planner';

const ProjectManager = ({
  PlannerDetailSkillSTATE,
  setPlannerDetailSkillSTATE,
  plannerEtcField,
  setPlannerEtcField,
  handleThreeJobField,
  submitPlanner,
}) => {
  const [
    userData,
    setUserData,
    detailProfileData,
    profileSimpleData,
    profilePublisherData,
    profileETCData,
    profilePlannerData,
  ] = useOutletContext();

  // ======== Get DATA from Database ========
  useEffect(() => {
    if (profilePlannerData?.plannerDetailFields || profilePlannerData?.etcField) {
      const { plannerDetailFields, etcField } = profilePlannerData;

      setPlannerDetailSkillSTATE(plannerDetailFields);
      setPlannerEtcField(etcField);
    }
  }, [profilePlannerData]);

  // Filter the database index for CSS(active)
  const PlannerDetailFilteredIndex = PlannerDetailSkillSTATE.map((frontIndex) =>
    PLANNER_DETAIL_FIELD_DB.indexOf(frontIndex),
  );

  return (
    <>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              업무분야 (3개까지만 선택 가능합니다.)
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
            {PLANNER_DETAIL_FIELD_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={PLANNER_DETAIL_FIELD_DB[index]}
                  // Compare front[index] with back[index]
                  active={PlannerDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleThreeJobField(e, 'planner');
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
        value={plannerEtcField || ''}
        onChange={(e) => setPlannerEtcField(e.target.value)}
      />
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitPlanner}>
          스킬 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default ProjectManager;
