import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';
import cjLogo from 'assets/images/cj-logo.png';
import companyLogo from 'assets/images/company-logo_1.png';
import kbLogo from 'assets/images/kbkookmin.png';
import samsung from 'assets/images/samsung.png';
import Loading from 'components/Loading';

const ReProject = ({ color = 'black', title = '추천 프로젝트', axiosUrl, fetchData, setaxiosUrl, Datas }) => {
  const [slideIndex, setSlideIndex] = useState(0);

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

  const mapData = [
    {
      id: 1,
      name: '개발자 상주 프로젝트',
      icon: '🤍',
      url: `${companyLogo}`,
      endDay: '마감8일전',
      language: 'JAVA',
      language2: 'Spring',
      title: '[중급/JAVA/3개월/신도림역] 프롭테스 플랫폼 스마트워킹',
      subTitle: '중급 / 1개월 / 서울/신도림 / 300 만원',
    },
    {
      id: 2,
      name: '개발자 상주 프로젝트',
      icon: '🤍',
      url: `${companyLogo}`,
      endDay: '마감8일전',
      language: 'React',
      language2: 'Javascript',
      title: '[중급~고급/JAVA/4개월/압구정역] LF 패션몰 구착, [중급~고급/JAVA/4개월/압구정역] LF 패션몰 구착',
      subTitle: '중급 / 4개월 / 서울/상남구 / 가격제안',
    },
    {
      id: 3,
      name: '개발자 상주 프로젝트',
      icon: '🤍',
      url: `${samsung}`,
      endDay: '마감8일전',
      language: 'JAVA',
      language2: 'Spring',
      title: '[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹',
      subTitle: '중급 / 1개월 / 재택 / 300 만원',
    },
    {
      id: 4,
      name: '개발자 재텍 프로젝트',
      icon: '🤍',
      url: `${cjLogo}`,
      endDay: '마감8일전',
      language: 'JAVA',
      language2: 'Spring',
      title: '[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹',
      subTitle: '중급 / 1개월 / 재택 / 300 만원',
    },
    {
      id: 5,
      name: '퍼블리셔 상주 프로젝트',
      icon: '🤍',
      url: `${kbLogo}`,
      endDay: '마감8일전',
      language: 'JAVA',
      language2: 'Spring',
      title: '[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹',
      subTitle: '중급 / 1개월 / 재택 / 300 만원',
    },
    {
      id: 6,
      name: '디자이너 재택 프로젝트',
      icon: '🤍',
      url: `${companyLogo}`,
      endDay: '마감8일전',
      language: 'JAVA',
      language2: 'Spring',
      title: '[중급/JAVA/3개월/재택] 프롭테스 플랫폼 스마트워킹',
      subTitle: '중급 / 1개월 / 재택 / 300 만원',
    },
  ];

  useEffect(() => {
    if (Datas === '') {
      setaxiosUrl('/recommend-project');
      fetchData();
    }
  }, [axiosUrl]);

  return (
    <S.Container>
      <S.FirstDiv>
        <S.H1 color={color}>{title}</S.H1>
        <S.ButtonDiv>
          <S.Img src={left} alt="left" direction="left" onClick={() => handleClick('left')} />
          <S.Img src={right} alt="right" direction="right" onClick={() => handleClick('right')} />
        </S.ButtonDiv>
      </S.FirstDiv>
      <S.SecondDiv>
        {!Datas ? (
          <Loading />
        ) : (
          <>
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
                    <Link to="/project/newdetail">
                      <S.BackImg url={companyLogo} />
                    </Link>
                  </S.UpDiv>
                  <S.DownDiv>
                    <S.DownSmallDiv>
                      <S.BigSpan>
                        <S.MiniSpan>마감{data.endDays}일전</S.MiniSpan>\
                        {data.skills.map((data) => {
                          return <S.MiniSecond key={data}>{data}</S.MiniSecond>;
                        })}
                      </S.BigSpan>
                      <Link to="/project/newdetail">
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
          </>
        )}
      </S.SecondDiv>
    </S.Container>
  );
};

export default ReProject;
