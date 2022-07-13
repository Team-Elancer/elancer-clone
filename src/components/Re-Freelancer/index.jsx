import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';

import MoreButton from 'components/Button/MoreButton';
import SkeletonReProject from 'components/Skeleton/ReProject';

import { BaseUrl, FILTERED_DATA } from 'utils/config/api';

const ReFreelancer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [Datas, setDatas] = useState('');

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/freelancers`);
      const data = await res.data;
      setDatas(data);
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
  }, []);

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
          Datas.freelancerSimpleResponseList.map((item) => {
            return (
              <S.ProjectDiv slideIndex={slideIndex} key={item.freelancerNum}>
                <S.UpDiv
                  introBackGround={item?.introBackGround}
                  // border={item.introBackGround === null ? 'white' : item.introBackGround}
                >
                  <S.DivTag>
                    <S.SpanTag>{item.positionName}</S.SpanTag>
                    <S.HeartBackDiv>
                      <S.HearDiv>🤍</S.HearDiv>
                    </S.HeartBackDiv>
                  </S.DivTag>
                  <S.TitleName>
                    {item.positionName} {item.freelancerName}
                  </S.TitleName>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      {item.skills &&
                        item.skills.map((data, i) => {
                          return data !== '' && data !== null ? <S.MiniSpan>{data}</S.MiniSpan> : <div />;
                        })}
                    </S.BigSpan>
                    <S.hiddenP>
                      <S.TextaTag href="#">{item.greeting}</S.TextaTag>
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
