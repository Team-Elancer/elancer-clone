import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';
import companyLogo from 'assets/images/company-logo_1.png';
import SkeletonReProject from 'components/Skeleton/ReProject';
import { BaseUrl, FILTERED_DATA } from 'utils/config/api';

const ReProject = ({ color = 'black', title = '추천 프로젝트' }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [Datas, setDatas] = useState('');

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/recommend-project`);
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  const checkColor = (data) => {
    if (data === 'BLACK') {
      return '#181818';
    }
    if (data === 'BLUE') {
      return '#7485c9';
    }
    if (data === 'INDIGO') {
      return '#8a7fa4';
    }
    if (data === 'ROSSYBROWN') {
      return '#9d7985';
    }
    if (data === 'BROWN') {
      return '#b57360';
    }
    if (data === 'CHOCOLATE') {
      return '#d56b2d';
    }
    if (data === 'ORANGE') {
      return '#f16300';
    }
    return '#FFFFFF';
  };

  const checkCareer = (data) => {
    if (data === 'JUNIOR') {
      return '초급';
    }
    if (data === 'MIDDLE') {
      return '중급';
    }
    return '고급';
  };

  const checkAddress = (data) => {
    const addressArray = [];
    addressArray.push(data.split(' '));
    if (addressArray[0][0] === '우편번호') {
      return '재택';
    }
    const selectArray = addressArray[0].filter((a, i) => i < 2);
    return selectArray.join('|');
  };

  const checkPay = (data) => {
    if (data.length > 5) {
      const fontNumber = data.substr(0, 4);
      const numArray = fontNumber.split('');
      return fontNumber.padStart(4, ',');
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.FirstDiv>
        <S.H1 color={color}>{title}</S.H1>
        <S.ButtonDiv>
          <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')} />
          <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('right')} />
        </S.ButtonDiv>
      </S.FirstDiv>
      {!Datas ? (
        <SkeletonReProject />
      ) : (
        <S.SecondDiv>
          {Datas.map((data) => {
            return (
              <S.ProjectDiv key={data.projectName} slideIndex={slideIndex}>
                <S.UpDiv bgColor={checkColor(data.projectBackGround)}>
                  <S.DivTag>
                    <S.SpanTag>
                      {data.positionKind === 'DEVELOPER' && '개발자'}
                      {data.positionKind === 'PUBLISHER' && '퍼블리셔'}
                      {data.positionKind === 'DESIGNER' && '디자이너'}
                      {data.positionKind === 'PLANNER' && '기획자'}
                      {data.positionKind === 'ETC' && '기타'} {data.projectType === 'WORKING' ? '상주' : '재택'}{' '}
                      프로그램
                    </S.SpanTag>
                    <S.HeartBackDiv>
                      <S.HearDiv>🤍</S.HearDiv>
                    </S.HeartBackDiv>
                  </S.DivTag>
                  <Link to={`/project/${data.projectNum}`}>
                    <S.BackImg url={companyLogo} />
                  </Link>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      <S.MiniSpan>마감{data.endDays}일전</S.MiniSpan>
                      {data.skills.map((data) => {
                        return data && <S.MiniSecond key={data}>{data}</S.MiniSecond>;
                      })}
                    </S.BigSpan>
                    <Link to={`/project/${data.projectNum}`}>
                      <S.hiddenP>
                        <S.TextaTag>{data.projectName}</S.TextaTag>
                      </S.hiddenP>
                    </Link>
                    <S.Ptag>
                      {checkCareer(data.freelancerWorkmanShip)} / {data.projectPeriod}개월 /{' '}
                      {checkAddress(data.address.mainAddress)} / {checkPay(data.pay)}
                      {data.pay !== '비공개' && data.pay !== '협의가능' ? '만원' : ''}
                    </S.Ptag>
                  </S.DownSmallDiv>
                </S.DownDiv>
              </S.ProjectDiv>
            );
          })}
        </S.SecondDiv>
      )}
    </S.Container>
  );
};

export default ReProject;
