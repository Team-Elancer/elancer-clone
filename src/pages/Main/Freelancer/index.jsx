import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

import Logo from 'assets/images/logo_white.png';
import zoom from 'assets/images/search_big.png';
import zoomWhite from 'assets/images/search_white.png';

import Eblock from 'components/Arround-Project';

import MoreButton from 'components/Button/MoreButton';
import ListPortfolio from 'components/ListPortfolio';

import GridBottom from 'components/Modal/GridBottom';
import EnterpriseMainMenu from 'components/Modal/MainMenu/Enterprise';

import EnterpriseSearchBar from 'components/Search/Enterprise';
import Footer from 'layouts/Footer';

import FreelancerHeader from 'layouts/Header/Freelancer';

const MainFreelancer = () => {
  const [changeBack, setChangeBack] = useState(true);
  const [serchBarBool, setSerchBarBool] = useState();
  const [jobField, setJobField] = useState('개발');
  const [locationState, setLocationState] = useState('선택');
  const [careerState, setCareerState] = useState('선택');
  const [skillState, setSkillState] = useState('선택');

  const [fullStack, setFullStack] = useState('⚙️ 상주');
  const fullStackArray = ['⚙️ 개발 프로젝트', '🛠 퍼블리싱', '🎨 디자인', '📝 기획', '🕹 기타 프로젝트'];

  const changeSearch = () => {
    setChangeBack(false);
  };

  const skillFunction = (e) => {
    if (skillState.includes('선택')) {
      setSkillState([e.target.htmlFor, ',']);
    } else if (skillState.includes(e.target.htmlFor)) {
      const setIndex = skillState.indexOf(e.target.htmlFor) + 1;

      setSkillState(skillState.splice(setIndex, 1));
      setSkillState(skillState.filter((element) => element !== e.target.htmlFor));
    } else {
      setSkillState([e.target.htmlFor, ',', ...skillState]);
    }
  };

  useEffect(() => {
    setSkillState(['선택']);
  }, [jobField, fullStack]);

  return (
    <div>
      <S.Container top="-10px">
        <S.BgDiv>
          <FreelancerHeader bgColor="#0000" color="white" logo={Logo} width="840px" />
          <EnterpriseSearchBar />
          <S.Container relative="relative" top="4rem">
            <S.FlexDiv color={changeBack === false ? '#f6f6f6' : '#f16300'} onClick={changeSearch}>
              <S.jobButton
                width="26%"
                onClick={() => {
                  setSerchBarBool('job');
                }}
              >
                <S.Span color={changeBack === false ? 'black' : 'white'}>프리랜서 업무 분야</S.Span>
                <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{jobField}</S.ButtonP>
              </S.jobButton>
              <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
              <S.jobButton
                width="17%"
                onClick={() => {
                  setSerchBarBool('select');
                }}
              >
                <S.Span color={changeBack === false ? 'black' : 'white'} style={{ overflow: 'hidden;' }}>
                  스킬
                </S.Span>
                <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{skillState}</S.ButtonP>
              </S.jobButton>
              <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
              <S.jobButton
                width="17%"
                onClick={() => {
                  setSerchBarBool('location');
                }}
              >
                <S.Span color={changeBack === false ? 'black' : 'white'}>근무 위치</S.Span>
                <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{locationState}</S.ButtonP>
              </S.jobButton>
              <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
              <S.jobButton
                width="17%"
                onClick={() => {
                  setSerchBarBool('career');
                }}
              >
                <S.Span color={changeBack === false ? 'black' : 'white'}>숙련도</S.Span>
                <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{careerState}</S.ButtonP>
              </S.jobButton>
              <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
              <S.jobButton
                width="17%"
                onClick={() => {
                  setSerchBarBool('searchBar');
                }}
              >
                <S.Span color={changeBack === false ? 'black' : 'white'}>검색어</S.Span>
                <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>입력</S.ButtonP>
              </S.jobButton>
              <S.Img src={changeBack === false ? zoom : zoomWhite} alt="searchImg" />
            </S.FlexDiv>
            <S.CenterDiv display="none">
              {changeBack === false && serchBarBool === 'job' ? (
                <S.ModalDiv width="550px" height="105px">
                  <S.UlTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={jobField === '개발' ? '#e7e7e7' : 'white'}
                        brColor={jobField === '개발' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="job"
                        id="DEVELOPER"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="DEVELOPER"
                        onClick={() => {
                          setJobField('개발');
                        }}
                      >
                        ⚙️ 개발
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={jobField === '퍼블리싱' ? '#e7e7e7' : 'white'}
                        brColor={jobField === '퍼블리싱' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="job"
                        id="PUBLISHER"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="PUBLISHER"
                        onClick={() => {
                          setJobField('퍼블리싱');
                        }}
                      >
                        🛠 퍼블리싱
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={jobField === '디자인' ? '#e7e7e7' : 'white'}
                        brColor={jobField === '디자인' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="job"
                        id="DESIGNER"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="DESIGNER"
                        onClick={() => {
                          setJobField('디자인');
                        }}
                      >
                        🎨 디자인
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={jobField === '기획' ? '#e7e7e7' : 'white'}
                        brColor={jobField === '기획' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="job"
                        id="PLANNER"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="PLANNER"
                        onClick={() => {
                          setJobField('기획');
                        }}
                      >
                        📝 기획
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={jobField === '기타' ? '#e7e7e7' : 'white'}
                        brColor={jobField === '기타' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="job"
                        id="ETC"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="ETC"
                        onClick={() => {
                          setJobField('기타');
                        }}
                      >
                        🔗 기타
                      </S.RadioLabel>
                    </S.LiTag>
                  </S.UlTag>
                </S.ModalDiv>
              ) : (
                <div> </div>
              )}
              {changeBack === false && serchBarBool === 'select' ? (
                <S.ModalDiv width="840px" height="155px" left="0rem" laptopLeft="0rem">
                  <S.UlTag>
                    {jobField === '개발' && <DevelopSkils skillState={skillState} skillFunction={skillFunction} />}
                    {jobField === '퍼블리싱' && (
                      <PublisingSkils skillState={skillState} skillFunction={skillFunction} />
                    )}
                    {jobField === '디자인' && <DesignSkils skillState={skillState} skillFunction={skillFunction} />}
                    {jobField === '기획' && <PlanSkils skillState={skillState} skillFunction={skillFunction} />}
                    {jobField === '기타' && <EtcSkils skillState={skillState} skillFunction={skillFunction} />}
                  </S.UlTag>
                </S.ModalDiv>
              ) : (
                <div> </div>
              )}
              {changeBack === false && serchBarBool === 'location' ? (
                <S.ModalDiv width="250px" height="105px" left="15rem" laptopLeft="19rem">
                  <S.UlTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={locationState === '상주' ? '#e7e7e7' : 'white'}
                        brColor={locationState === '상주' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="location"
                        id="company"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="company"
                        onClick={() => {
                          setLocationState('상주');
                        }}
                      >
                        🏢 상주
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={locationState === '재택' ? '#e7e7e7' : 'white'}
                        brColor={locationState === '재택' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="location"
                        id="home"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="home"
                        onClick={() => {
                          setLocationState('재택');
                        }}
                      >
                        🏠 재택
                      </S.RadioLabel>
                    </S.LiTag>
                  </S.UlTag>
                </S.ModalDiv>
              ) : (
                <div> </div>
              )}
              {changeBack === false && serchBarBool === 'career' ? (
                <S.ModalDiv width="250px" height="105px" left="23rem" laptopLeft="28rem">
                  <S.UlTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={careerState === '초급' ? '#e7e7e7' : 'white'}
                        brColor={careerState === '초급' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="career"
                        id="beginner"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="beginner"
                        onClick={() => {
                          setCareerState('초급');
                        }}
                      >
                        초급
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={careerState === '중급' ? '#e7e7e7' : 'white'}
                        brColor={careerState === '중급' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="career"
                        id="middle"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="middle"
                        onClick={() => {
                          setCareerState('중급');
                        }}
                      >
                        중급
                      </S.RadioLabel>
                    </S.LiTag>
                    <S.LiTag>
                      <S.Input
                        bgColor={careerState === '상급' ? '#e7e7e7' : 'white'}
                        brColor={careerState === '상급' ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="career"
                        id="advanced"
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.RadioLabel
                        htmlFor="advanced"
                        onClick={() => {
                          setCareerState('상급');
                        }}
                      >
                        상급
                      </S.RadioLabel>
                    </S.LiTag>
                  </S.UlTag>
                </S.ModalDiv>
              ) : (
                <div> </div>
              )}
              {changeBack === false && serchBarBool === 'searchBar' ? (
                <S.ModalDiv width="350px" height="105px" left="30rem" laptopLeft="35 rem">
                  <EnterpriseSearchBar display="block" width="300px" />
                </S.ModalDiv>
              ) : (
                <div> </div>
              )}
            </S.CenterDiv>
          </S.Container>
          {changeBack === false && <EnterpriseMainMenu setChangeBack={setChangeBack} />}
        </S.BgDiv>
        <S.MainDiv style={{ marginBottom: '5rem', marginTop: '5rem' }}>
          <Eblock />
        </S.MainDiv>
        <S.MainDiv>
          <S.SubTitle>5만건 이상의 프로젝트</S.SubTitle>
          <S.Title> 추천 프로젝트 </S.Title>
          <S.JobUl>
            {fullStackArray.map((data, index) => {
              return (
                <S.LiTag right="1rem" key={`fullStackArray${index + 1}`}>
                  <S.TypeInput
                    bgColor={fullStack === data ? '#e7e7e7' : 'white'}
                    brColor={fullStack === data ? 'black' : '#d7d7d7'}
                    type="radio"
                    name="select"
                    value={data}
                    id={data}
                    onClick={(e) => {
                      setFullStack(e.target.value);
                    }}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.TypeLabel htmlFor={data}>{data}</S.TypeLabel>
                </S.LiTag>
              );
            })}
          </S.JobUl>

          <ListPortfolio />

          <Link to="/project-list">
            <MoreButton />
          </Link>
        </S.MainDiv>
        <Footer toBottom="static" />
        <GridBottom />
      </S.Container>
    </div>
  );
};

const DevelopSkils = ({ skillState, skillFunction }) => {
  const DEVELOP_ARRAY = ['JAVA', 'iOS', 'Android', 'PHP', 'ASP', '.NET', 'JavaScript', 'C', 'C++', 'DB'];

  return (
    <>
      {DEVELOP_ARRAY.map((data, index) => {
        return (
          <S.LiTag key={`DEVELOP_ARRAY${index + 1}`}>
            <S.Input
              bgColor={skillState.includes(data) ? '#e7e7e7' : 'white'}
              brColor={skillState.includes(data) ? 'black' : '#d7d7d7'}
              type="checkbox"
              name="select"
              id={data}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.RadioLabel htmlFor={data} onClick={skillFunction}>
              {data}
            </S.RadioLabel>
          </S.LiTag>
        );
      })}
    </>
  );
};

const PublisingSkils = ({ skillState, skillFunction }) => {
  const PUBLISHER_ARRAY = [
    'HTML5',
    'CSS',
    'ActionScript',
    'jQuery',
    'React.js',
    'Vue.js',
    'JavaScript',
    'WordPress',
    'BootStrap',
    'Photoshop',
    'Flash',
    '웹접근성',
    '웹표준',
    'Git',
  ];
  return (
    <>
      {PUBLISHER_ARRAY.map((data, index) => {
        return (
          <S.LiTag key={`PUBLISHER_ARRAY${index + 1}`}>
            <S.Input
              bgColor={skillState.includes(data) ? '#e7e7e7' : 'white'}
              brColor={skillState.includes(data) ? 'black' : '#d7d7d7'}
              type="checkbox"
              name="select"
              id={data}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.RadioLabel htmlFor={data} onClick={skillFunction}>
              {data}
            </S.RadioLabel>
          </S.LiTag>
        );
      })}
    </>
  );
};

const DesignSkils = ({ skillState, skillFunction }) => {
  const DESIGN_ARRAY = [
    '웹디자인',
    '앱디자인',
    '출판/편집 디자인',
    '게임 디자인',
    '판촉물 디자인',
    '3D 디자인',
    '그래픽 디자인',
    '패키지 디자인',
    '아트 디렉션',
    '애니메이션',
    '로고 브랜딩',
  ];

  return (
    <>
      {DESIGN_ARRAY.map((a, index) => {
        return (
          <S.LiTag key={`DESIGN_ARRAY${index + 1}`}>
            <S.Input
              bgColor={skillState.includes(a) ? '#e7e7e7' : 'white'}
              brColor={skillState.includes(a) ? 'black' : '#d7d7d7'}
              type="checkbox"
              name="select"
              id={a}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.RadioLabel htmlFor={a} onClick={skillFunction}>
              {a}
            </S.RadioLabel>
          </S.LiTag>
        );
      })}
    </>
  );
};

const PlanSkils = ({ skillState, skillFunction }) => {
  const PLANNER_ARRAY = [
    'PM',
    'PL',
    'PMO(사업관리)',
    '시스템분석/설계',
    '웹기획',
    '앱기획',
    '컨설팅',
    '제안',
    '쇼핑몰',
    '여행사',
    '금융',
    '증권',
    '카드',
    '보험',
    '대학',
    '병원',
    '공공기관',
    '물류',
    '회계',
    '제조',
    '건설',
    '암호화폐',
  ];

  return (
    <>
      {PLANNER_ARRAY.map((a, index) => {
        return (
          <S.LiTag key={`PLANNER_ARRAY${index + 1}`}>
            <S.Input
              bgColor={skillState.includes(a) ? '#e7e7e7' : 'white'}
              brColor={skillState.includes(a) ? 'black' : '#d7d7d7'}
              type="checkbox"
              name="select"
              id={a}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.RadioLabel htmlFor={a} onClick={skillFunction}>
              {a}
            </S.RadioLabel>
          </S.LiTag>
        );
      })}
    </>
  );
};

const EtcSkils = ({ skillState, skillFunction }) => {
  const ETC_ARRAY = ['PM', 'PL', '시스템분석/설계', 'DA', 'DBA', 'TA', 'AA', 'NA', 'PMO', 'SE', 'QA', 'QC'];

  return (
    <>
      {ETC_ARRAY.map((a, index) => {
        return (
          <S.LiTag key={`ETC_ARRAY${index + 1}`}>
            <S.Input
              bgColor={skillState.includes(a) ? '#e7e7e7' : 'white'}
              brColor={skillState.includes(a) ? 'black' : '#d7d7d7'}
              type="checkbox"
              name="select"
              id={a}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.RadioLabel htmlFor={a} onClick={skillFunction}>
              {a}
            </S.RadioLabel>
          </S.LiTag>
        );
      })}
    </>
  );
};

export default MainFreelancer;
