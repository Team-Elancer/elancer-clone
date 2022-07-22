import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import arrowLeft from 'assets/images/arrow_left.png';
import arrowRight from 'assets/images/arrow_right.png';
import Logo from 'assets/images/logo_white.png';

import HeartButton from 'components/Button/HeartButton';

import * as S from 'pages/Main/Enterprise/style';

import { CLIENT_FREELANCER } from 'utils/config/api';

const EnterpriseFreelancer = ({ fullStack }) => {
  const [Datas, setDatas] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidEach, setSlideEach] = useState('');
  const [heartBool, setHeartBool] = useState(true);
  const [URL, setURL] = useState('/developers?positionType=DEVELOPER&hopeWorkState=AT_COMPANY');

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  const changeFullStack = () => {
    if (fullStack === '⚙️ 상주') {
      setURL('/developers?positionType=DEVELOPER&hopeWorkState=AT_COMPANY');
    }
    if (fullStack === '🎨 재택') {
      setURL('/developers?positionType=DEVELOPER&hopeWorkState=AT_HOME');
    }
    if (fullStack === '🛠 초급') {
      setURL('/developers?positionType=DEVELOPER&positionWorkManShip=JUNIOR');
    }
    if (fullStack === '🎨 중급') {
      setURL('/developers?positionType=DEVELOPER&positionWorkManShip=MIDDLE');
    }
    if (fullStack === '🕹  고급') {
      setURL('/developers?positionType=DEVELOPER&positionWorkManShip=SENIOR');
    }
  };

  const FetchData = async () => {
    try {
      setDatas([]);
      const res = await CLIENT_FREELANCER(URL);
      const data = await res.data;
      while (Datas.length < 4) {
        const choiceDatas = data.freelancerSimpleResponseList.splice(
          Math.floor(Math.random() * data.freelancerSimpleResponseList.length),
          1,
        )[0];
        setDatas([...Datas, Datas.push(choiceDatas)]);
      }
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  };

  useEffect(() => {
    FetchData();
    changeFullStack();
    setHeartBool(true);
  }, [fullStack, URL, heartBool]);

  return (
    <div>
      {Datas && Datas.length > 2 ? (
        Datas.map((data, i) => {
          return data && data.freelancerNum !== undefined ? (
            <S.FreelancerFlexDiv key={uuidv4()}>
              <S.OverFlowDiv>
                <S.LeftButton
                  src={arrowLeft}
                  direction="left"
                  onClick={() => {
                    setSlideEach(i);
                    handleClick('left');
                  }}
                />
                <S.RigtButton
                  src={arrowRight}
                  direction="right"
                  onClick={() => {
                    setSlideEach(i);
                    handleClick('right');
                  }}
                />
                <Link to={`/partner-detail/${data.freelancerNum}`}>
                  <S.Wrapper slideIndex={i === slidEach && slideIndex} color="red">
                    <S.Slide introBackGround={data?.introBackGround}>
                      {data.positionName}
                      <br />
                      {data.freelancerName}
                    </S.Slide>
                    <S.Slide bg="blue">
                      {data?.thumbnailPath ? (
                        <S.ImgDiv>
                          <S.ProfileImg src={data?.thumbnailPath} alt="profile" />
                        </S.ImgDiv>
                      ) : (
                        <S.LogoImg src={Logo} alt="logo" />
                      )}
                    </S.Slide>
                  </S.Wrapper>
                </Link>
              </S.OverFlowDiv>
              <S.InfoDiv>
                <S.InfoFlex content="space-between">
                  <S.SubTitle>
                    {data.freelancerName} | {data.careerYear}년경력 {data.positionName}
                  </S.SubTitle>
                  <HeartButton position="static" Data={data} setHeartBool={setHeartBool} />
                </S.InfoFlex>
                <Link to={`/partner-detail/${data.freelancerNum}`}>
                  <S.EcardTitle>{data.greeting}</S.EcardTitle>
                </Link>
                <S.InfoFlex top="0.5rem">
                  {data.skills.map((a) => {
                    return a !== null && <S.SpanSkill key={uuidv4()}>{a}</S.SpanSkill>;
                  })}
                </S.InfoFlex>
                <S.InfoPTag>{data.projectNames}</S.InfoPTag>
              </S.InfoDiv>
            </S.FreelancerFlexDiv>
          ) : (
            <div key={uuidv4()} />
          );
        })
      ) : (
        <div key={uuidv4()} />
      )}
    </div>
  );
};

export default EnterpriseFreelancer;
