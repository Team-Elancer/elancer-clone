import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';

import HeartButton from 'components/Button/HeartButton';
import MoreButton from 'components/Button/MoreButton';
import SkeletonReProject from 'components/Skeleton/ReProject';

import { BaseUrl, FILTERED_DATA, CLIENT_FREELANCER, CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const ReFreelancer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [Datas, setDatas] = useState('');
  const [heartBool, setHeartBool] = useState(true);
  const location = useLocation();

  const fetchData = async () => {
    try {
      if (window.localStorage.accessToken) {
        const res = await CLIENT_FREELANCER(`/freelancers`);
        if (res.data.code === '401') {
          window.localStorage.clear();
          alert('토큰이 만료되어 로그인페이지로 이동합니다.');
          location('/login');
        }
        const data = await res.data;
        setDatas(data);
        setHeartBool(true);
      } else {
        const res = await FILTERED_DATA('/freelancers');
        const data = await res.data;
        setDatas(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    fetchData();
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
              <S.ProjectDiv slideIndex={slideIndex} key={item.freelancerNum}>
                <S.UpDiv
                  introBackGround={item?.introBackGround}
                  // border={item.introBackGround === null ? 'white' : item.introBackGround}
                >
                  <S.DivTag>
                    <S.SpanTag>{item.positionName}</S.SpanTag>
                    <HeartButton Data={item} setHeartBool={setHeartBool} />
                  </S.DivTag>
                  <Link to={`/partner-detail/${item.freelancerNum}`}>
                    <S.TitleName>
                      {item.positionName} {item.freelancerName}
                    </S.TitleName>
                  </Link>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      {item.skills &&
                        item.skills.map((data, i) => {
                          return data !== '' && data !== null && <S.MiniSpan key={data}>{data}</S.MiniSpan>;
                        })}
                    </S.BigSpan>
                    <S.hiddenP>
                      <Link to={`/partner-detail/${item.freelancerNum}`}>
                        <S.TextaTag>{item.greeting}</S.TextaTag>
                      </Link>
                    </S.hiddenP>
                    <S.FlexDiv>
                      <S.Ptag>
                        {item.careerYear}년 경력 {item.freelancerName}
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
