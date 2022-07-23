import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';

import Designer from './Designer';
import Developer from './Developer';
import ETC from './ETC';
import Planner from './Planner';
import Publisher from './Publisher';

import * as S from './style';

import Logo from 'assets/images/logo_white.png';
import zoom from 'assets/images/search_big.png';
import zoomWhite from 'assets/images/search_white.png';

import Eblock from 'components/Arround-Project';

import MoreButton from 'components/Button/MoreButton';
import ListPortfolio from 'components/ListPortfolio';
import Loader from 'components/Loader';

import GridBottom from 'components/Modal/GridBottom';
import EnterpriseMainMenu from 'components/Modal/MainMenu/Enterprise';

import EnterpriseSearchBar from 'components/Search/Enterprise';
import Footer from 'layouts/Footer';

import FreelancerHeader from 'layouts/Header/Freelancer';

import { CLIENT_FREELANCER } from 'utils/config/api';
import { POSITION, WORKMANSHIP, PROJECTTYPE } from 'utils/constants/freelancerFilter';
import { handlePosition, handleWorkManShip, handleProjectType } from 'utils/helpers';

const MainFreelancer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [changeBack, setChangeBack] = useState(true);
  const [serchBarBool, setSerchBarBool] = useState();

  const [jobType, setjobType] = useState('개발');
  const [locationState, setLocationState] = useState('');
  const [careerState, setCareerState] = useState('');
  const [skillSTATE, setSkillSTATE] = useState('');

  const [projectType, setProjectType] = useState('⚙️ 개발');

  const [searchValue, setSearchValue] = useState('');

  const [projectIndexList, setProjectIndexList] = useState([]);
  const [apiIndex, setApiIndex] = useState('developerProjectList');

  const navigate = useNavigate();

  useEffect(() => {
    fetchProjectIndexList();
    getPositionProject();
  }, []);

  // ============== Empty the array(skillSTATE) when new type clicked ==============
  useEffect(() => {
    setSkillSTATE([]);
  }, [jobType]);

  // ============== For spreading data  <ListPortfolio Datas={projectIndexList[apiIndex]} />}==============
  const getPositionProject = (type) => {
    switch (type) {
      case '🛠 퍼블리싱':
        setApiIndex('publisherProjectList');
        break;
      case '🎨 디자인':
        setApiIndex('designerProjectList');
        break;
      case '📝 기획':
        setApiIndex('plannerProjectList');
        break;
      case '🕹 기타 프로젝트':
        setApiIndex('etcProjectList');
        break;
      default:
        setApiIndex('developerProjectList');
        break;
    }
  };

  // =================== Get recommended project -> '/project-index-list' ===================

  const fetchProjectIndexList = async () => {
    setIsLoading(true);
    try {
      const { data } = await CLIENT_FREELANCER(`/project-index-list`);
      setProjectIndexList(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const changeSearch = () => {
    setChangeBack(false);
  };

  // ============== Search option ==============
  const handlePositionSkills = (e) => {
    if (!skillSTATE.includes('선택')) {
      setSkillSTATE((prev) => [e.target.innerHTML, ...prev]);
    } else {
      setSkillSTATE([e.target.innerHTML]);
    }

    if (skillSTATE && skillSTATE?.includes(e.target.innerHTML)) {
      setSkillSTATE((prev) => prev.filter((item) => item !== e.target.innerHTML));
    }
  };

  const filterProject = async (e) => {
    e.preventDefault();

    const skillArray = skillSTATE.map((item) => `&skills=${item}`).join('');

    try {
      if (searchValue.length === 0) {
        navigate(
          `/project-list?positionKind=${handlePosition(projectType)[1]}&freelancerWorkmanShip=${handleWorkManShip(
            careerState,
          )}&projectType=${handleProjectType(locationState)}${skillArray}`,
        );
      }

      if (searchValue.length > 0) {
        navigate(
          `/project-list?positionKind=${handlePosition(projectType)[1]}&freelancerWorkmanShip=${handleWorkManShip(
            careerState,
          )}&projectType=${handleProjectType(locationState)}${skillArray}&searchKey=${searchValue}`,
        );
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Container top="-10px">
      <S.BgDiv>
        <FreelancerHeader bgColor="#0000" color="white" logo={Logo} width="840px" />
        <EnterpriseSearchBar />
        <S.Container relative="relative" top="4rem">
          <S.FlexDiv color={changeBack === false ? '#f6f6f6' : '#f16300'} onClick={changeSearch}>
            <S.jobButton
              type="button"
              width="24%"
              onClick={() => {
                setSerchBarBool('job');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>프리랜서 업무 분야</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{jobType}</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              type="button"
              width="20%"
              onClick={() => {
                setSerchBarBool('select');
              }}
              style={{ overflow: 'hidden' }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>스킬</S.Span>

              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>
                {skillSTATE.length > 0 ? skillSTATE : '선택'}
              </S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              type="button"
              width="23%"
              onClick={() => {
                setSerchBarBool('location');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>근무 위치</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{locationState || '선택'}</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
            <S.jobButton
              type="button"
              width="14%"
              onClick={() => {
                setSerchBarBool('career');
              }}
            >
              <S.Span color={changeBack === false ? 'black' : 'white'}>숙련도</S.Span>
              <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>{careerState || '선택'}</S.ButtonP>
            </S.jobButton>
            <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />

            <S.jobButton
              type="button"
              width="14%"
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
            {/* ========== 업무 분야 ========== */}
            {changeBack === false && serchBarBool === 'job' && (
              <S.ModalDiv width="550px" height="105px">
                <S.UlTag>
                  <S.LiTag>
                    <S.Input
                      bgColor={jobType === '개발' ? '#e7e7e7' : 'white'}
                      brColor={jobType === '개발' ? 'black' : '#d7d7d7'}
                      type="radio"
                    />

                    <S.RadioLabel
                      htmlFor="DEVELOPER"
                      onClick={() => {
                        setjobType('개발');
                      }}
                    >
                      ⚙️ 개발
                    </S.RadioLabel>
                  </S.LiTag>
                  <S.LiTag>
                    <S.Input
                      bgColor={jobType === '퍼블리싱' ? '#e7e7e7' : 'white'}
                      brColor={jobType === '퍼블리싱' ? 'black' : '#d7d7d7'}
                      type="radio"
                    />

                    <S.RadioLabel
                      htmlFor="PUBLISHER"
                      onClick={() => {
                        setjobType('퍼블리싱');
                      }}
                    >
                      🛠 퍼블리싱
                    </S.RadioLabel>
                  </S.LiTag>
                  <S.LiTag>
                    <S.Input
                      bgColor={jobType === '디자인' ? '#e7e7e7' : 'white'}
                      brColor={jobType === '디자인' ? 'black' : '#d7d7d7'}
                      type="radio"
                    />

                    <S.RadioLabel
                      onClick={() => {
                        setjobType('디자인');
                      }}
                    >
                      🎨 디자인
                    </S.RadioLabel>
                  </S.LiTag>
                  <S.LiTag>
                    <S.Input
                      bgColor={jobType === '기획' ? '#e7e7e7' : 'white'}
                      brColor={jobType === '기획' ? 'black' : '#d7d7d7'}
                      type="radio"
                    />

                    <S.RadioLabel
                      htmlFor="PLANNER"
                      onClick={() => {
                        setjobType('기획');
                      }}
                    >
                      📝 기획
                    </S.RadioLabel>
                  </S.LiTag>
                  <S.LiTag>
                    <S.Input
                      bgColor={jobType === '기타' ? '#e7e7e7' : 'white'}
                      brColor={jobType === '기타' ? 'black' : '#d7d7d7'}
                      type="radio"
                    />

                    <S.RadioLabel
                      htmlFor="ETC"
                      onClick={() => {
                        setjobType('기타');
                      }}
                    >
                      🔗 기타
                    </S.RadioLabel>
                  </S.LiTag>
                </S.UlTag>
              </S.ModalDiv>
            )}

            {/* ========== 업무 option (개발, 퍼블리싱, 디자인, 기획, 기타) ========== */}
            {changeBack === false && serchBarBool === 'select' && (
              <S.ModalDiv width="840px" height="155px" left="0rem" laptopLeft="0rem">
                <S.UlTag>
                  {jobType === '개발' && (
                    <Developer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
                  )}
                  {jobType === '퍼블리싱' && (
                    <Publisher skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
                  )}
                  {jobType === '디자인' && (
                    <Designer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
                  )}
                  {jobType === '기획' && (
                    <Planner skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
                  )}
                  {jobType === '기타' && <ETC skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />}
                </S.UlTag>
              </S.ModalDiv>
            )}

            {/* ========== 근무 위치 ========== */}
            {changeBack === false && serchBarBool === 'location' && (
              <S.ModalDiv width="450px" height="105px" left="15rem" laptopLeft="19rem">
                {PROJECTTYPE.map((item, index) => (
                  <S.UlTag key={`item_${index + 1}`}>
                    <S.LiTag>
                      <S.Input
                        bgColor={locationState === item ? '#e7e7e7' : 'white'}
                        brColor={locationState === item ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="location"
                        id="company"
                      />

                      <S.RadioLabel
                        htmlFor="company"
                        onClick={() => {
                          setLocationState(item);
                        }}
                      >
                        {item}
                      </S.RadioLabel>
                    </S.LiTag>
                  </S.UlTag>
                ))}
              </S.ModalDiv>
            )}

            {/* ========== 숙련도 ========== */}
            {changeBack === false && serchBarBool === 'career' && (
              <S.ModalDiv width="350px" height="105px" left="23rem" laptopLeft="28rem">
                {WORKMANSHIP.map((item, index) => (
                  <S.UlTag key={`item_${index + 1}`}>
                    <S.LiTag>
                      <S.Input
                        bgColor={careerState === item ? '#e7e7e7' : 'white'}
                        brColor={careerState === item ? 'black' : '#d7d7d7'}
                        type="radio"
                        name="career"
                        id="beginner"
                      />

                      <S.RadioLabel
                        htmlFor="beginner"
                        onClick={(e) => {
                          setCareerState(e.target.innerHTML);
                        }}
                      >
                        {item}
                      </S.RadioLabel>
                    </S.LiTag>
                  </S.UlTag>
                ))}
              </S.ModalDiv>
            )}

            {/* ========== Search bar  ========== */}
            {changeBack === false && serchBarBool === 'searchBar' && (
              <S.ModalDiv width="350px" height="105px" left="30rem" laptopLeft="35 rem">
                <S.SearchContainer display="block">
                  <S.SearchInputForm width="300px" onSubmit={filterProject}>
                    <S.SearchInput
                      placeholder="검색어를 입력하세요"
                      value={searchValue || ''}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <S.SearchImg src={zoom} alt="zoom" />
                  </S.SearchInputForm>
                </S.SearchContainer>
              </S.ModalDiv>
            )}
          </S.CenterDiv>
        </S.Container>

        {changeBack === false && <EnterpriseMainMenu setChangeBack={setChangeBack} />}
      </S.BgDiv>

      {/* ================== 프로젝트 둘러보기 ================== */}

      <S.MainDiv style={{ marginBottom: '5rem', marginTop: '5rem' }}>
        <Eblock />
      </S.MainDiv>

      {/* ================== 추천 프로젝트 ================== */}
      <S.MainDiv>
        <S.SubTitle>5만건 이상의 프로젝트</S.SubTitle>
        <S.Title> 추천 프로젝트 </S.Title>
        <S.JobUl>
          {POSITION.map((data, index) => {
            return (
              <S.LiTag right="1rem" key={`POSITION${index + 1}`}>
                <S.TypeInput
                  bgColor={projectType === data ? '#e7e7e7' : 'white'}
                  brColor={projectType === data ? 'black' : '#d7d7d7'}
                  type="radio"
                  name={data}
                  value={data}
                  id={data}
                  onClick={(e) => {
                    setProjectType(e.target.value);
                    getPositionProject(e.target.name);
                  }}
                />

                <S.TypeLabel htmlFor={data}>{data}</S.TypeLabel>
              </S.LiTag>
            );
          })}
        </S.JobUl>

        {/* =========== Project list =========== */}
        {isLoading ? <Loader /> : <ListPortfolio Datas={projectIndexList[apiIndex]} />}
        <Link to="/project-list">
          <MoreButton />
        </Link>
      </S.MainDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default MainFreelancer;
