import { useState } from 'react';

import * as S from './style';

const InfoDetail = () => {
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
      {isCheckedProject === '#project' ? (
        <S.ContainerEcardProject>
          <S.EcardProject>
            <S.EcardProjectIndustry>개발</S.EcardProjectIndustry>
            <S.EcardProjectTitle> 삼성서울병원 사이트 운영 </S.EcardProjectTitle>
            <S.EcardProjectContent>
              2020.06 ~ 2022.01 | 기여 100% | 비용 000만원
              <br />
              삼성서울병원 홈페이지 운영 모바일 웹 및 앱 하이브리드웹 담당 개발 및 유지보수 결제, 본인인증, 카드본인인증
              등 외부 모듈 연동 개발.
            </S.EcardProjectContent>
            <S.ContainerStacks>
              <S.LanguageStackBtn>언어: JAVA</S.LanguageStackBtn>
            </S.ContainerStacks>
            <S.ProjectDuration>2020.06 ~ 2022.01</S.ProjectDuration>
          </S.EcardProject>
          <S.EcardProject>
            <S.EcardProjectIndustry>개발</S.EcardProjectIndustry>
            <S.EcardProjectTitle> 삼성서울병원 사이트 운영 </S.EcardProjectTitle>
            <S.EcardProjectContent>
              2020.06 ~ 2022.01 | 기여 100% | 비용 000만원
              <br />
              삼성서울병원 홈페이지 운영 모바일 웹 및 앱 하이브리드웹 담당 개발 및 유지보수 결제, 본인인증, 카드본인인증
              등 외부 모듈 연동 개발.
            </S.EcardProjectContent>
            <S.ContainerStacks>
              <S.LanguageStackBtn>언어: JAVA</S.LanguageStackBtn>
            </S.ContainerStacks>
            <S.ProjectDuration>2020.06 ~ 2022.01</S.ProjectDuration>
          </S.EcardProject>
        </S.ContainerEcardProject>
      ) : (
        <S.ContainerEcardResume>
          <S.EcardResume>
            <S.EcardResumeWork>학력</S.EcardResumeWork>
            <S.ContainerWorkDetail>
              <S.WorkTime>1800.03 ~ 3000.02</S.WorkTime>
              <S.WorkName>Hogwarts(magic)</S.WorkName>
            </S.ContainerWorkDetail>
            <S.ContainerWorkDetail>
              <S.WorkTime>-</S.WorkTime>
              <S.WorkName>0</S.WorkName>
            </S.ContainerWorkDetail>
            <S.ContainerWorkDetail>
              <S.WorkTime>-</S.WorkTime>
              <S.WorkName>0</S.WorkName>
            </S.ContainerWorkDetail>
          </S.EcardResume>
          <S.EcardResume>
            <S.EcardResumeWork>학력</S.EcardResumeWork>
            <S.ContainerWorkDetail>
              <S.WorkTime>1800.03 ~ 3000.02</S.WorkTime>
              <S.WorkName>Hogwarts(magic)</S.WorkName>
            </S.ContainerWorkDetail>
            <S.ContainerWorkDetail>
              <S.WorkTime>-</S.WorkTime>
              <S.WorkName>0</S.WorkName>
            </S.ContainerWorkDetail>
            <S.ContainerWorkDetail>
              <S.WorkTime>-</S.WorkTime>
              <S.WorkName>0</S.WorkName>
            </S.ContainerWorkDetail>
          </S.EcardResume>
        </S.ContainerEcardResume>
      )}
    </main>
  );
};

export default InfoDetail;
