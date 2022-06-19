import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';
import cjLogo from 'assets/images/cj-logo.png';
import companyLogo from 'assets/images/company-logo_1.png';
import kbLogo from 'assets/images/kbkookmin.png';
import samsung from 'assets/images/samsung.png';

const ReProject = ({ color = 'black', title = '추천 프로젝트' }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (alt) => {
    if (alt === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
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
        {mapData.map((item) => {
          return (
            <S.ProjectDiv key={item.id} slideIndex={slideIndex}>
              <S.UpDiv>
                <S.DivTag>
                  <S.SpanTag>{item.name}</S.SpanTag>
                  <S.HeartBackDiv>
                    <S.HearDiv>{item.icon}</S.HearDiv>
                  </S.HeartBackDiv>
                </S.DivTag>
                <Link to="/project/newdetail">
                  <S.BackImg url={item.url} />
                </Link>
              </S.UpDiv>
              <S.DownDiv>
                <S.DownSmallDiv>
                  <S.BigSpan>
                    <S.MiniSpan>{item.endDay}</S.MiniSpan>
                    <S.MiniSecond>{item.language}</S.MiniSecond>
                    <S.MiniSecond>{item.language2}</S.MiniSecond>
                  </S.BigSpan>
                  <Link to="/project/newdetail">
                    <S.hiddenP>
                      <S.TextaTag>{item.title}</S.TextaTag>
                    </S.hiddenP>
                  </Link>
                  <S.Ptag>{item.subTitle}</S.Ptag>
                </S.DownSmallDiv>
              </S.DownDiv>
            </S.ProjectDiv>
          );
        })}
      </S.SecondDiv>
    </S.Container>
  );
};

export default ReProject;
