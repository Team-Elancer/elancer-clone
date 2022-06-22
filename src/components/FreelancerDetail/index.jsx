import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import * as S from './style';

const InfoDetail = () => {
  const [userData, setUserData, detailProfileData, profileSimpleData] = useOutletContext();

  const [isCheckedProject, setIsCheckedProject] = useState('#project');

  return (
    <main>
      <S.ContainerEcardInfoOption>
        <S.EcardInfo onClick={() => setIsCheckedProject('#project')} active={isCheckedProject === '#project'}>
          프로젝트
        </S.EcardInfo>
        <S.EcardInfo onClick={() => setIsCheckedProject('#resume')} active={isCheckedProject === '#resume'}>
          이력서
        </S.EcardInfo>
      </S.ContainerEcardInfoOption>
      {isCheckedProject === '#project' && profileSimpleData?.projectHistoryResponses ? (
        profileSimpleData?.projectHistoryResponses?.map(
          (
            {
              developRole,
              projectTitle,
              projectStartDate,
              projectEndDate,
              responsibilityTask,
              developEnvironment: { developEnvironmentLanguage, developEnvironmentDBName },
            },
            index,
          ) => (
            <S.ContainerEcardProject key={`profile_project${index + 1}`}>
              <S.EcardProject>
                <S.EcardProjectIndustry>{developRole}</S.EcardProjectIndustry>
                <S.EcardProjectTitle> {projectTitle} </S.EcardProjectTitle>
                <S.ProjectDuration>
                  {projectStartDate} ~ {projectEndDate} | 기여 100%
                </S.ProjectDuration>
                <S.EcardProjectContent>{responsibilityTask}</S.EcardProjectContent>
                <S.ContainerStacks>
                  <S.LanguageStackBtn backgroundColor="rgba(255, 107, 107, 1)">
                    언어: {developEnvironmentLanguage}
                  </S.LanguageStackBtn>
                  <S.LanguageStackBtn backgroundColor="rgba(107, 155, 255, 1)">
                    DB: {developEnvironmentDBName}
                  </S.LanguageStackBtn>
                  <S.LanguageStackBtn backgroundColor="rgba(60, 60, 60, 1)">
                    TOOL: {developEnvironmentDBName}
                  </S.LanguageStackBtn>
                  <S.LanguageStackBtn backgroundColor="rgba(60, 60, 60, 1)">
                    통신: {developEnvironmentDBName}
                  </S.LanguageStackBtn>
                </S.ContainerStacks>
              </S.EcardProject>
            </S.ContainerEcardProject>
          ),
        )
      ) : (
        <>
          {/* ========== 학력 ========== */}
          <S.ContainerEcardResume>
            <S.EcardResume>
              <S.EcardResumeWork>{profileSimpleData.academicAbilityResponses.length > 0 && '학력'} </S.EcardResumeWork>
              {profileSimpleData.academicAbilityResponses?.map(
                ({ enterSchoolDate, graduationDate, schoolName, schoolLevelDescription }, index) => (
                  <S.ContainerWorkDetail key={`Profile_Education${index + 1}`}>
                    <S.WorkTime>
                      {enterSchoolDate} {enterSchoolDate && '~'} {graduationDate}
                    </S.WorkTime>
                    <S.WorkName>
                      {schoolName && '학교명: '}
                      {schoolName} {schoolName && schoolLevelDescription}
                    </S.WorkName>
                  </S.ContainerWorkDetail>
                ),
              )}
            </S.EcardResume>
          </S.ContainerEcardResume>

          {/* ========== 경력 ========== */}
          <S.ContainerEcardResume>
            <S.EcardResume>
              <S.EcardResumeWork>경력</S.EcardResumeWork>
              {profileSimpleData.careerResponses?.map(({ careerStartDate, careerEndDate, companyName }, index) => (
                <S.ContainerWorkDetail key={`Profile_Career${index + 1}`}>
                  <S.WorkTime>
                    {careerStartDate} {careerStartDate && '~'} {careerEndDate}
                  </S.WorkTime>
                  <S.WorkName>{companyName}</S.WorkName>
                </S.ContainerWorkDetail>
              ))}
            </S.EcardResume>
          </S.ContainerEcardResume>

          {/* ========== 자격증 ========== */}
          <S.ContainerEcardResume>
            <S.EcardResume>
              <S.EcardResumeWork>{profileSimpleData.licenseResponses.length > 0 && '자격증'}</S.EcardResumeWork>
              {profileSimpleData.licenseResponses?.map(({ acquisitionDate, licenseIssuer, licenseTitle }, index) => (
                <S.ContainerWorkDetail key={`Profile_License${index + 1}`}>
                  <S.WorkTime>{acquisitionDate}</S.WorkTime>
                  <S.WorkName>
                    {licenseIssuer && '*자격증명: '} {licenseIssuer}, {licenseTitle && '*발행처: '} {licenseTitle}
                  </S.WorkName>
                </S.ContainerWorkDetail>
              ))}
            </S.EcardResume>
          </S.ContainerEcardResume>

          {/* ========== 교육 ========== */}
          <S.ContainerEcardResume>
            <S.EcardResume>
              <S.EcardResumeWork>{profileSimpleData.educationResponses.length > 0 && '교육'}</S.EcardResumeWork>
              {profileSimpleData.educationResponses?.map(
                ({ educationEndDate, educationOrganization, educationStartDate, educationTitle }, index) => (
                  <S.ContainerWorkDetail key={`Profile_License${index + 1}`}>
                    <S.WorkTime>
                      {educationStartDate} {educationStartDate && '~'} {educationEndDate}
                    </S.WorkTime>
                    <S.WorkName>
                      {educationTitle && '*교육명: '} {educationTitle}, {educationOrganization && '*교육기관: '}
                      {educationOrganization}
                    </S.WorkName>
                  </S.ContainerWorkDetail>
                ),
              )}
            </S.EcardResume>
          </S.ContainerEcardResume>

          {/* ========== 외국어 능력 ========== */}
          <S.ContainerEcardResume>
            <S.EcardResume>
              <S.EcardResumeWork>{profileSimpleData.languageResponses.length > 0 && '외국어 능력'}</S.EcardResumeWork>
              {profileSimpleData.languageResponses?.map(
                ({ languageName, languageAbilityDescription, languageAbility }, index) => (
                  <S.ContainerWorkDetail key={`Profile_License${index + 1}`}>
                    <S.WorkTime>{languageName}</S.WorkTime>
                    <S.WorkName>
                      {languageAbilityDescription && '*'}
                      {languageAbilityDescription} {languageAbility && `(${languageAbility})`}
                    </S.WorkName>
                  </S.ContainerWorkDetail>
                ),
              )}
            </S.EcardResume>
          </S.ContainerEcardResume>
        </>
      )}

      {!profileSimpleData.careerResponses &&
        !profileSimpleData.academicAbilityResponses &&
        !profileSimpleData.licenseResponses &&
        !profileSimpleData.educationResponses &&
        !profileSimpleData.languageResponses && <S.EcardResumeWork>등록된 이력이 없습니다.</S.EcardResumeWork>}
    </main>
  );
};

export default InfoDetail;
