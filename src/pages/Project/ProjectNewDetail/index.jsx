import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

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
  const [detailAddress, setDetailAddress] = useState('');

  console.log(Datas);

  const workmanShipSwitch = (item) => {
    switch (item) {
      case 'MIDDLE':
        return '중급';
      case 'SENIOR':
        return '고급';
      default:
        return '초급';
    }
  };
  const positionKindSwitch = (item) => {
    switch (item) {
      case 'PLANNER':
        return '기획자';
      case 'DESIGNER':
        return '디자이너';
      case 'PUBLISHER':
        return '퍼블리셔';
      case 'ETC':
        return '기타';
      default:
        return '개발자';
    }
  };

  const positionSwitch = (item) => {
    switch (item) {
      case 'ANALYSIS':
        return '분석/설계';
      case 'PLAN':
        return '기획';
      case 'DESIGN':
        return '디자인';
      case 'PUBLISHING':
        return '퍼블리싱';
      case 'OPERATION':
        return '운영중';
      default:
        return '개발';
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
        projectNum: id,
      },
    })
      .then((res) => {
        console.log(res);
        alert('지원이 완료되었습니다.');
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
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

  console.log(Datas);

  return (
    <S.Container>
      <S.ImgDiv>
        <S.IntroImg>
          <S.Img src={Datas?.enterpriseLogo || CompanyLogo} alt="companylog" />
        </S.IntroImg>
      </S.ImgDiv>
      <S.DetailDiv>
        <S.SizeDiv>
          <S.FlexDiv content="space-between">
            <S.TitleDiv>
              <S.H1>{Datas.projectName}</S.H1>
            </S.TitleDiv>
            <div>
              <S.DdaySpan>마감{Datas.endDays}일전</S.DdaySpan>
            </div>
          </S.FlexDiv>
          <S.PayH1>{Datas.pay}</S.PayH1>
          <S.FlexDiv content="start">
            <S.Colorspan color="white">
              {workmanShipSwitch(Datas.freelancerWorkmanShip)} {positionKindSwitch(Datas.positionKind)}
            </S.Colorspan>
            <S.Colorspan color="white">{Datas.projectPeriod === 0 ? 1 : Datas.projectPeriod}개월</S.Colorspan>
            <S.Colorspan
              color="white"
              display={Datas.address !== undefined && Datas.address.detailAddress === '' ? 'none' : 'block'}
            >
              {detailAddress[0]}|{detailAddress[1]}
            </S.Colorspan>
            <S.Colorspan color="white">{positionSwitch(Datas.projectStep)}</S.Colorspan>
          </S.FlexDiv>
          <S.FlexDiv content="start">
            {Datas !== '' &&
              Datas.skills.map((data) => {
                return (
                  data !== '' && (
                    <S.Colorspan color="#ff6b6b" key={uuidv4()}>
                      {data}
                    </S.Colorspan>
                  )
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
          <S.FreelancerUl>
            {Datas.simpleFreelancerList && Datas.simpleFreelancerList.length > 0 ? (
              Datas.simpleFreelancerList.map((data) => {
                return (
                  <S.FreelancerLi key={uuidv4()}>
                    {data?.thumbnailUrl !== null ? (
                      <S.ProfileImg src={data?.thumbnailUrl} alt="profileimg" />
                    ) : (
                      <S.ProfileDiv>{data.username}</S.ProfileDiv>
                    )}
                  </S.FreelancerLi>
                );
              })
            ) : (
              <h1>가장먼저 참여자가 되보세요.</h1>
            )}
          </S.FreelancerUl>
          <ReProject color="white" title="스마트 프로젝트 추천" />
          <S.FlexDiv content="center" padding="3rem" tabletPadding="9rem">
            <ProjectButton right="0.5rem" text="🤍프로젝트 찜" />
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
