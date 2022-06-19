import { useState, useEffect } from 'react';
import CareerInfo from './CareerInfo';
import Certificate from './Certificate';
import EducationInfo from './EducationInfo';

import ProfileIntro from './ProfileIntro';
import ProjectHistory from './ProjectHistory';
import SkillLists from './SkillLists';

import * as S from './style';

import { CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const MyBoardProfileModify = () => {
  const [detailProfileData, setDertailProfileData] = useState({
    profileNum: 1,
    name: 'name',
    thumbnailPath: null,
    expertise: 0,
    scheduleAdherence: 0,
    initiative: 0,
    communication: 0,
    reemploymentIntention: 0,
    totalActiveScore: 0.0,
    introduceName: '소개글',
    introBackGround: 'COBALT_BLUE',
    greeting: 'greeting',
    careerYear: 0,
    positionType: 'DEVELOPER',
    positionTypeDescription: '개발자',
    introduceVideoUrl: '소개 영상 주소',
    introduceContent: '소개 내용',
    projectHistoryResponses: [
      {
        projectTitle: '프로젝트명',
        projectStartDate: '2020-02-01',
        projectEndDate: '2021-02-01',
        clientCompany: '고객사명',
        workCompany: '상주사명',
        developField: 'APPLICATION',
        developRole: 'backend',
        developEnvironment: {
          developEnvironmentModel: 'model',
          developEnvironmentOS: 'Ms',
          developEnvironmentLanguage: 'language',
          developEnvironmentDBName: 'DB',
          developEnvironmentTool: 'Tool',
          developEnvironmentCommunication: '통신',
          developEnvironmentEtc: '기타',
        },
        responsibilityTask: '담당업무는 백엔드 개발',
      },
    ],
    academicAbilityResponses: [
      {
        schoolName: '고등학교',
        schoolLevel: 'HIGH_SCHOOL',
        schoolLevelDescription: '고등학교',
        enterSchoolDate: '2012-02-01',
        graduationDate: '2015-02-01',
        academicState: 'GRADUATION',
        majorName: '문과',
      },
    ],
    careerResponses: [
      {
        companyName: '삼성',
        departmentName: '개발팀',
        companyPosition: 'ASSISTANT_MANAGER',
        companyPositionDescription: '대리',
        careerStartDate: '2020-02-01',
        careerEndDate: '2021-02-01',
      },
    ],
    educationResponses: [
      {
        educationTitle: '특수교육',
        educationOrganization: '특수기관',
        educationStartDate: '2020-02-01',
        educationEndDate: '2021-02-01',
      },
    ],
    licenseResponses: [
      {
        licenseTitle: '특수 자격증',
        licenseIssuer: '특수 기관',
        acquisitionDate: '2019-02-22',
      },
    ],
    languageResponses: [
      {
        languageName: '영어',
        languageAbility: 'MIDDLE',
        languageAbilityDescription: '비즈니스 회화가능',
      },
    ],
  });

  const getDetailProfileData = async () => {
    const { data } = await CLIENT_FREELANCER('/freelancer/freelancer-profile');

    console.log(data);
  };

  useEffect(() => {
    let isMounted = true;

    getDetailProfileData();

    return () => {
      isMounted = false;
    };
  }, []);

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
