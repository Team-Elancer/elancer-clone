import React from 'react';

import * as S from './style';

import SamsungPicture from 'assets/images/samsung.png';

import ReFreelancer from 'components/Re-Freelancer';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const ProjectDetail = () => {
  return (
    <>
      <Header />
      <S.ContainerFrame dark>
        <S.Main>
          <S.ContainerTitle>
            <S.ContainerTitleImg src={SamsungPicture} alt="" />
          </S.ContainerTitle>
          <S.FrameList>
            <S.ContainerDetail>
              <S.DetailDeadline>마감 1일전</S.DetailDeadline>
              <S.DetailSubject>[고급/DB/9개월/대방역] 현대자동차 통합컨텍센터 구축 마이그레이션 개발</S.DetailSubject>
              <S.ContainerDetailPay>
                <S.DetailPay>6,370 ~ 8,820만원 (협의가능)</S.DetailPay>
                <S.DetailDailyPay>월단가 : 650 ~ 900만원</S.DetailDailyPay>
              </S.ContainerDetailPay>
            </S.ContainerDetail>
            <S.ContainerStackBtn>
              <S.StackBtn>고급개발자</S.StackBtn>
              <S.StackBtn>최상급개발자</S.StackBtn>
            </S.ContainerStackBtn>
            <S.ContainerStackBtn>
              <S.StackBtn>DA</S.StackBtn>
              <S.StackBtn>모집인원 | 1인</S.StackBtn>
            </S.ContainerStackBtn>
            <S.ContainerProject>
              <S.ProjectSubject>프로젝트 내용</S.ProjectSubject>
            </S.ContainerProject>
            <S.ProjectContent>
              1.프로젝트명: [고급/DB/9개월/대방역] 현대자동차 통합컨텍센터 구축 마이그레이션 개발
            </S.ProjectContent>
            <S.ProjectContent>
              1.프로젝트명: [고급/DB/9개월/대방역] 현대자동차 통합컨텍센터 구축 마이그레이션 개발
            </S.ProjectContent>
            <S.ProjectContent>
              1.프로젝트명: [고급/DB/9개월/대방역] 현대자동차 통합컨텍센터 구축 마이그레이션 개발
            </S.ProjectContent>
          </S.FrameList>
          <ReFreelancer />
          <S.ContainerShareSM>
            <S.ShareSMButton>❤️ 프로젝트 찜</S.ShareSMButton>
            <S.ShareSMButton>프리랜서 공유</S.ShareSMButton>
          </S.ContainerShareSM>
        </S.Main>
      </S.ContainerFrame>
      <Footer />
    </>
  );
};

export default ProjectDetail;
