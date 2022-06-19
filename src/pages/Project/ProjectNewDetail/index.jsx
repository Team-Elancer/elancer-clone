import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

import CompanyLogo from 'assets/images/company-logo_87.png';
import ProjectButton from 'components/Button/ProjectButton';
import ProjectDetailModal from 'components/Modal/ProjectDetail';
import ShareModal from 'components/Modal/Share';
import ReProject from 'components/Re-Project';

const ProjectNewDetail = () => {
  const navi = useNavigate();

  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;

  const [shareModal, setShareModal] = useState(true);

  const changeShareModal = () => {
    setShareModal(false);
  };

  const checkToken = () => {
    if (!token) {
      navi('/login');
    }
    if (member === '"ENTERPRISE"') {
      alert('기업회원은 해당 기능사용이 불가능합니다.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <S.ImgDiv>
        <S.IntroImg>
          <S.Img src={CompanyLogo} alt="companylog" />
        </S.IntroImg>
      </S.ImgDiv>
      <S.DetailDiv>
        <S.SizeDiv>
          <S.FlexDiv content="center">
            <S.H1>[중급~고급/Java/4개월/성수/2명] 그룹웨어 개발 및 마이그레이션</S.H1>
            <S.DdaySpan>마감7일전</S.DdaySpan>
          </S.FlexDiv>
          <S.PayH1>협의가능</S.PayH1>
          <S.FlexDiv content="start">
            <S.Colorspan color="white">고급 개발자</S.Colorspan>
            <S.Colorspan color="white">8개월</S.Colorspan>
            <S.Colorspan color="white">서울시|강남구</S.Colorspan>
            <S.Colorspan color="white">개발</S.Colorspan>
          </S.FlexDiv>
          <S.FlexDiv content="start">
            <S.Colorspan color="#ff6b6b">JAVA</S.Colorspan>
          </S.FlexDiv>
          <S.FlexDiv content="start">
            <S.Colorspan color="white">모집인원|1인</S.Colorspan>
            <S.Colorspan color="white">총 투입 인원|0인</S.Colorspan>
          </S.FlexDiv>
          <S.ProjectTitle>프로젝트 내용</S.ProjectTitle>
          <S.ProjectContents>
            [고급/JAVA/7.5개월/선릉] 메트라이프생명 차세대콜센터 구축 개발 PL <br />
            <br />
            1.현재개발진행사항 <br />
            1)총투입인력:
            <br />
            2)현재설계개발상태:
            <br />
            <br />
            2.담당업무
            <br /> 1) 메트라이프생명 차세대콜센터 구축 개발 PL
            <br />
            <br />
            3.업무범위:메트라이프생명 차세대콜센터 구축 개발 PL
            <br />
            <br />
            4.전달사항또는(개발)우대사항:
            <br />
            <br />
            5.필요인력: 1명
            <br />
            <br />
            6.개발자필요Spec
            <br />
            1) JAVA, Spring boot, NEXACRO <br />
            2) 보험사 및 콜센터 경험자 우대
            <br />
            <br />
            7.근무지: 선릉
            <br />
            <br />
            8. 일정 : 즉시 ~ 23.02.21 (약7.5개월) <br />
            <br />
            9.월단가: 제시바람
            <br />
            <br />
            10.장비지참여부: 지참
          </S.ProjectContents>
          <S.ProjectTitle>프로젝트 참여 신청 [ :0명 ]</S.ProjectTitle>
          <S.FreelancerUl>
            가장먼저 참여자가 되보세요.
            <S.FreelancerLi>홍*동</S.FreelancerLi>
          </S.FreelancerUl>
          <ReProject color="white" title="스마트 프로젝트 추천" />
          <S.FlexDiv content="center" padding="3rem" tabletPadding="9rem">
            <ProjectButton right="0.5rem" text="🤍프로젝트 찜" checkToken={checkToken} />
            <ProjectButton text="프로젝트 공유" checkToken={changeShareModal} />
            {shareModal === false && <ShareModal setShareModal={setShareModal} />}
          </S.FlexDiv>
        </S.SizeDiv>
      </S.DetailDiv>
      <ProjectDetailModal checkToken={checkToken} />
    </S.Container>
  );
};

export default ProjectNewDetail;
