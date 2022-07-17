import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import arrowLeft from 'assets/images/arrow_left.png';
import arrowRight from 'assets/images/arrow_right.png';
import Logo from 'assets/images/logo_white.png';

import HeartButton from 'components/Button/HeartButton';

import * as S from 'pages/Main/Enterprise/style';

import { CLIENT_FREELANCER } from 'utils/config/api';

const DashBoardScrap = ({ fullStack }) => {
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

  const FetchData = async () => {
    try {
      setDatas([]);
      const res = await CLIENT_FREELANCER(URL);
      const data = await res.data;
      console.log(URL, data, Datas);
      while (Datas.length < 4) {
        const choiceDatas = data.freelancerSimpleResponseList.splice(
          Math.floor(Math.random() * data.freelancerSimpleResponseList.length),
          1,
        )[0];
        console.log(Datas);
        setDatas([...Datas, Datas.push(choiceDatas)]);
      }
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  };

  useEffect(() => {
    FetchData();
    setHeartBool(true);
  }, [fullStack, URL, heartBool]);

  return (
    <div>
      {Datas && Datas.length > 2 ? (
        Datas.map((data, i) => {
          return data && data.freelancerNum !== undefined ? (
            <S.FreelancerFlexDiv key={data.freelancerNum}>
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
                      <S.LogoImg src={Logo} alt="logo" />
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
                    return a !== null && <S.SpanSkill key={a}>{a}</S.SpanSkill>;
                  })}
                </S.InfoFlex>
                <S.InfoPTag>{data.projectNames}</S.InfoPTag>
              </S.InfoDiv>
            </S.FreelancerFlexDiv>
          ) : (
            <div />
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
};

export default DashBoardScrap;
