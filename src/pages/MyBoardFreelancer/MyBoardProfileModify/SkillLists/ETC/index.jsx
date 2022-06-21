import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from '../../style';

import { ETC_DETAIL_ROLE_FRONT, ETC_DETAIL_ROLE_DB } from 'utils/constants/freelancerPosition/etc';

const ETC = ({
  ETCDetailRoleSTATE,
  positionEtcRole,
  setPositionEtcRole,
  handleThreeJobField,
  submitETC,
  setETCDetailRoleSTATE,
}) => {
  const [userData, setUserData, detailProfileData, profileSimpleData, profilePublisherData, profileETCData] =
    useOutletContext();

  // ======== Get DATA from Database ========
  useEffect(() => {
    if (profileETCData?.etcDetailRoles || profileETCData?.positionEtcRole) {
      const { etcDetailRoles, positionEtcRole } = profileETCData;

      setETCDetailRoleSTATE(etcDetailRoles);
      setPositionEtcRole(positionEtcRole);
    }
  }, [profileETCData]);

  // Filter the database index for CSS(active)
  const ETCDetailFilteredIndex = ETCDetailRoleSTATE.map((frontIndex) => ETC_DETAIL_ROLE_DB.indexOf(frontIndex));

  return (
    <>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              역할 (3개까지만 선택 가능합니다.)
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
            {ETC_DETAIL_ROLE_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={ETC_DETAIL_ROLE_DB[index]}
                  // Compare front[index] with back[index]
                  active={ETCDetailFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleThreeJobField(e, 'etc');
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
        value={positionEtcRole || ''}
        onChange={(e) => setPositionEtcRole(e.target.value)}
      />
      <S.FlexCenter>
        <S.ProfileButton type="button" onClick={submitETC}>
          스킬 저장
        </S.ProfileButton>
      </S.FlexCenter>
    </>
  );
};

export default ETC;
