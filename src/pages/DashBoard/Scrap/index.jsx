import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import arrowLeft from 'assets/images/arrow_left.png';
import arrowRight from 'assets/images/arrow_right.png';
import Logo from 'assets/images/logo_white.png';

import HeartButton from 'components/Button/HeartButton';
import ScrapSkeleton from 'components/Skeleton/Scrap';

import * as S from 'pages/Main/Enterprise/style';

import { CLIENT_FREELANCER } from 'utils/config/api';

const DashBoardScrap = () => {
  const [Datas, setDatas] = useState('');
  const [nextPage, setNextPage] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidEach, setSlideEach] = useState('');
  const [heartBool, setHeartBool] = useState(true);
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView();

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  const FetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/wish-freelancer');
      const data = await res.data;
      setDatas(data);
      setNextPage(data.hasNext);
    } catch (err) {
      console.log(err.response.data.errorMessage);
    }
  };

  const infinityPage = useCallback(async () => {
    try {
      const res = await CLIENT_FREELANCER(`/wish-freelancer&page=${page}`);
      const data = await res.data;
      setDatas((prevData) => [...prevData, ...data.projectBoxResponses]);
      setNextPage(data.hasNext);
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);

  useEffect(() => {
    if (page > 0) {
      infinityPage();
    }
  }, [infinityPage]);

  useEffect(() => {
    FetchData();
    setHeartBool(true);
  }, [heartBool]);

  useEffect(() => {
    if (inView && nextPage) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <div>
      {Datas === '' ? (
        <div>
          <ScrapSkeleton />
          <ScrapSkeleton />
          <ScrapSkeleton />
        </div>
      ) : (
        Datas.freelancerSimpleResponseList.map((data, i) => {
          return (
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
                    return a !== null && <S.SpanSkill key={uuidv4()}>{a}</S.SpanSkill>;
                  })}
                </S.InfoFlex>
                <S.InfoPTag>{data.projectNames}</S.InfoPTag>
              </S.InfoDiv>
            </S.FreelancerFlexDiv>
          );
        })
      )}
      <div ref={ref} />
    </div>
  );
};

export default DashBoardScrap;
