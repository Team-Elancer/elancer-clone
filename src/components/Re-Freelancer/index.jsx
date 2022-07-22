import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';

import HeartButton from 'components/Button/HeartButton';
import MoreButton from 'components/Button/MoreButton';
import SkeletonReProject from 'components/Skeleton/ReProject';

import useConfrim from 'hooks/useConfirm';

import useFetchRefreshToken from 'hooks/useFetchRefreshToken';
import { BaseUrl, FILTERED_DATA, CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const ReFreelancer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [Datas, setDatas] = useState('');
  const [heartBool, setHeartBool] = useState(true);
  const navigate = useNavigate();

  const handleErrorCode = (code) => {
    const handleLogin = () => useFetchRefreshToken();
    const rejectLogin = () => {
      window.localStorage.clear();
      navigate('/login');
    };

    const confirmLogin = useConfrim(
      '로그인 시간 연장하시겠습니까? 새로고침 필요할수도 있음.',
      handleLogin,
      rejectLogin,
    );

    if (code === '401') {
      console.log('accessToken 만료');
      confirmLogin();
    }

    if (code === '402') console.log('변조된 토큰 에러.');

    if (code === '403') console.log('refresh token 만료.');
  };

  // =============== fetch account detail (이랜서 계정) && userData ===============
  const fetchFreelancerData = async () => {
    try {
      if (window.localStorage.accessToken) {
        const { data } = await CLIENT_FREELANCER('/freelancers');

        if (data.code === '401' || data.code === '402' || data.code === '403') {
          handleErrorCode(data.code);
        }
        setDatas(data);
        setHeartBool(true);
      } else {
        const { data } = await FILTERED_DATA('/freelancers');

        if (data.code === '401' || data.code === '402' || data.code === '403') {
          handleErrorCode(data.code);
        }

        setDatas(data);
        setHeartBool(true);
      }
    } catch (err) {
      console.log(err);

      alert('다시 로그인해주세요');
      window.localStorage.clear();
      navigate('/login');
    }
  };

  // const fetchData = async () => {
  //   try {
  //     if (window.localStorage.accessToken) {
  //       const res = await CLIENT_FREELANCER(`/freelancers`);
  //       if (res.data.code === '401') {
  //         window.localStorage.clear();
  //         alert('토큰이 만료되어 로그인페이지로 이동합니다.');
  //         navi('/login');
  //       }
  //       const data = await res.data;
  //       setDatas(data);
  //       setHeartBool(true);
  //     } else {
  //       const res = await FILTERED_DATA('/freelancers');
  //       const data = await res.data;
  //       setDatas(data);
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    fetchFreelancerData();
  }, [heartBool]);

  return (
    <S.Container>
      <S.FirstDiv>
        <S.H1>프리랜서</S.H1>
        <S.ButtonDiv>
          <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')} />
          <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('right')} />
        </S.ButtonDiv>
      </S.FirstDiv>
      <S.SecondDiv>
        {!Datas ? (
          <SkeletonReProject />
        ) : (
          Datas?.freelancerSimpleResponseList.map((item) => {
            return (
              <S.ProjectDiv slideIndex={slideIndex} key={item?.freelancerNum}>
                <S.UpDiv
                  introBackGround={item?.introBackGround}
                  // border={item.introBackGround === null ? 'white' : item.introBackGround}
                >
                  <S.DivTag>
                    <S.SpanTag>{item?.positionName}</S.SpanTag>
                    <HeartButton Data={item} setHeartBool={setHeartBool} />
                  </S.DivTag>
                  <Link to={`/partner-detail/${item?.freelancerNum}`}>
                    {item?.thumbnailPath ? (
                      <S.ImgDiv>
                        <S.ProfileImg src={item?.thumbnailPath} alt="thumnail" />
                      </S.ImgDiv>
                    ) : (
                      <S.TitleName>
                        {item?.positionName} {item?.freelancerName}
                      </S.TitleName>
                    )}
                  </Link>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      {item?.skills &&
                        item?.skills.map((data, i) => {
                          return data !== '' && data !== null && <S.MiniSpan key={uuidv4()}>{data}</S.MiniSpan>;
                        })}
                    </S.BigSpan>
                    <S.hiddenP>
                      <Link to={`/partner-detail/${item?.freelancerNum}`}>
                        <S.TextaTag>{item?.greeting}</S.TextaTag>
                      </Link>
                    </S.hiddenP>
                    <S.FlexDiv>
                      <S.Ptag>
                        {item?.careerYear}년 경력 {item?.freelancerName}
                      </S.Ptag>
                      <S.Ptag> ★ 4.5</S.Ptag>
                    </S.FlexDiv>
                  </S.DownSmallDiv>
                </S.DownDiv>
              </S.ProjectDiv>
            );
          })
        )}
        ;
      </S.SecondDiv>
      <Link to="/partner-list">
        <MoreButton />
      </Link>
    </S.Container>
  );
};

export default ReFreelancer;
