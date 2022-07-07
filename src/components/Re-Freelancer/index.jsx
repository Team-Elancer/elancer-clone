import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import left from 'assets/images/bt-left.png';
import right from 'assets/images/bt-right.png';
import cjLogo from 'assets/images/cj-logo.png';
import companyLogo from 'assets/images/company-logo_1.png';
import kbLogo from 'assets/images/kbkookmin.png';
import samsung from 'assets/images/samsung.png';
import MoreButton from 'components/Button/MoreButton';
import { BaseUrl, FILTERED_DATA } from 'utils/config/api';

const ReFreelancer = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [Datas, setDatas] = useState('');
  console.log(Datas.freelancerSimpleResponseList);

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/freelancers/freelancer-profiles`);
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

  const mapData = [
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '함께일하고 싶은 최고를 꿈꾸는 개발자 입니다.',
      subTitle: '0년 경력 종*혁',
      rank: '5.0',
    },
    {
      color: '#b57360',
      border: '#b57360',
      name: '디자이너',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'React',
      language2: 'Javascript',
      title: '에너지가 꽉찬 디자이너 이*기 입니다.',
      subTitle: '1년 경력 이*기',
      rank: '4.5',
    },
    {
      color: '#8a7fb4',
      border: '#8a7fb4',
      name: '기획자',
      icon: '🤍',
      url: `${samsung}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '준비된 기획자 입니다.',
      subTitle: '12년 경력 장*건',
      rank: '3.2',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '퍼블리셔',
      icon: '🤍',
      url: `${cjLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '최상의 결과를 만들어 내는 퍼블리셔 입니다.',
      subTitle: '3년 경력 오*혁',
      rank: '2.8',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${kbLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '믿을 수 있는 결과를 만드는 전공 개발자 입니다.',
      subTitle: '0년 경력 김*빈',
      rank: '4.2',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '미래를 꿈꾸는 최상 실력의 개발자 입니다.',
      subTitle: '6년 경력 조*성',
      rank: '3.8',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '항상 만족한 결과를 만들어낸 개발자 입니다.',
      subTitle: '2년 경력 송*기',
      rank: '4.0',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '믿을 수 있는 개발자 주*모 입니다.',
      subTitle: '10년 경력 주*모',
      rank: '3',
    },
    {
      color: 'white',
      border: '#d7d7d7',
      name: '개발자',
      icon: '🤍',
      url: `${companyLogo}`,
      language: 'JAVA',
      language2: 'Spring',
      title: '최상의 결과를 만들어내는 개발자 입니다.',
      subTitle: '6년 경력 조*성',
      rank: '4.5',
    },
  ];

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
        {Datas !== '' &&
          Datas.freelancerSimpleResponseList.map((item) => {
            return (
              <S.ProjectDiv slideIndex={slideIndex} key={item.freelancerNum}>
                <S.UpDiv
                  color="LIGHT_ORANGE"
                  border="LIGHT_ORANGE"
                  // color={item.introBackGround === null ? 'white' : item.introBackGround}
                  // border={item.introBackGround === null ? 'white' : item.introBackGround}
                >
                  <S.DivTag>
                    <S.SpanTag>{item.positionName}</S.SpanTag>
                    <S.HeartBackDiv>
                      <S.HearDiv>🤍</S.HearDiv>
                    </S.HeartBackDiv>
                  </S.DivTag>
                </S.UpDiv>
                <S.DownDiv>
                  <S.DownSmallDiv>
                    <S.BigSpan>
                      {item.skills &&
                        item.skills.map((data) => {
                          return <S.MiniSpan>{data}</S.MiniSpan>;
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
          })}
        ;
      </S.SecondDiv>
      <Link to="/partner-list">
        <MoreButton />
      </Link>
    </S.Container>
  );
};

export default ReFreelancer;
