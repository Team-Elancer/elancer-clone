import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';

import CompanyLogo from 'assets/images/company-logo_87.png';
import ProjectButton from 'components/Button/ProjectButton';
import ProjectDetailModal from 'components/Modal/ProjectDetail';
import ShareModal from 'components/Modal/Share';
import ReProject from 'components/Re-Project';
import { FILTERED_DATA, CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN, BaseUrl } from 'utils/config/api';

const ProjectNewDetail = () => {
  const navi = useNavigate();
  const { id } = useParams();

  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;
  const [Datas, setDatas] = useState('');
  const [shareModal, setShareModal] = useState(true);
  const [workmanShip, setWorkmanShip] = useState('');
  const [nowProjectStep, setNowProjectStep] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  console.log(Datas);

  const workmanShipSwitch = () => {
    switch (Datas.freelancerWorkmanShip) {
      case 'MIDDLE':
        setWorkmanShip('중급');
        break;
      case 'SENIOR':
        setWorkmanShip('고급');
        break;
      default:
        setWorkmanShip('초급');
        break;
    }
  };
  const positionSwitch = () => {
    switch (Datas.projectStep) {
      case 'ANALYSIS':
        setNowProjectStep('분석/설계');
        break;
      case 'PLAN':
        setNowProjectStep('기획');
        break;
      case 'DESIGN':
        setNowProjectStep('디자인');
        break;
      case 'PUBLISHING':
        setNowProjectStep('퍼블리싱');
        break;
      case 'OPERATION':
        setNowProjectStep('운영중');
        break;
      default:
        setNowProjectStep('개발');
        break;
    }
  };

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/project/${id}`);
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error.message);
    }
  };
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
    axios({
      method: 'POST',
      url: `${BaseUrl}/apply-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: { id },
      },
    })
      .then((res) => {
        alert('지원이 완료되었습니다.');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    if (Datas === '') {
      window.scrollTo(0, 0);
      fetchData();
      workmanShipSwitch();
      positionSwitch();
    }
    if (detailAddress === '' && Datas.address !== undefined) {
      const newString = Datas.address.mainAddress.split(' ');
      setDetailAddress(newString);
    }
  }, [Datas]);

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
            <S.H1>{Datas.projectName}</S.H1>
            <S.DdaySpan>마감{Datas.endDays}일전</S.DdaySpan>
          </S.FlexDiv>
          <S.PayH1>{Datas.pay}</S.PayH1>
          <S.FlexDiv content="start">
            <S.Colorspan color="white">{workmanShip !== '' && workmanShip} 개발자</S.Colorspan>
            <S.Colorspan color="white">{Datas.projectPeriod === 0 ? 1 : Datas.projectPeriod}개월</S.Colorspan>
            <S.Colorspan
              color="white"
              display={Datas.address !== undefined && Datas.address.detailAddress === '' ? 'none' : 'block'}
            >
              {detailAddress[0]}|{detailAddress[1]}
            </S.Colorspan>
            <S.Colorspan color="white">{nowProjectStep !== '' && nowProjectStep}</S.Colorspan>
          </S.FlexDiv>
          <S.FlexDiv content="start">
            {Datas !== '' &&
              Datas.skills.map((data) => {
                return (
                  <S.Colorspan color="#ff6b6b" key={data}>
                    {data}
                  </S.Colorspan>
                );
              })}
          </S.FlexDiv>
          <S.FlexDiv content="start">
            <S.Colorspan color="white">모집인원|{Datas.headCount}인</S.Colorspan>
            <S.Colorspan color="white">총 투입 인원|{Datas.inputHeadCount}인</S.Colorspan>
          </S.FlexDiv>
          <S.ProjectTitle>프로젝트 내용</S.ProjectTitle>
          <S.ProjectContents>{Datas.content}</S.ProjectContents>
          <S.ProjectTitle>프로젝트 참여 신청 [ :{Datas !== '' && Datas.simpleFreelancerList.length}명 ]</S.ProjectTitle>
          <div>가장먼저 참여자가 되보세요.</div>
          <S.FreelancerUl>
            {Datas.simpleFreelancerList.length > 0 ? (
              Datas.simpleFreelancerList.map((data) => {
                return <S.FreelancerLi key={data.username}>{data.username}</S.FreelancerLi>;
              })
            ) : (
              <S.FreelancerLi>가장먼저 참여자가 되보세요.</S.FreelancerLi>
            )}
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
