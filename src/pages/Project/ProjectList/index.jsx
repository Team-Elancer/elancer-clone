import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import * as ST from './style';

import Logo from 'assets/images/logo_white.png';

import ListPortfolio from 'components/ListPortfolio';
import ProjectListMainMenu from 'components/Modal/MainMenu/ProjectList';
import ProjectListModal from 'components/Modal/ProjectListModal';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';
import { FILTERED_DATA, BaseUrl, CLIENT_FREELANCER } from 'utils/config/api';

const ListProject = () => {
  const [Datas, setDatas] = useState([]);
  const [selectType, setSelectType] = useState('⚙️ 개발');
  const [selectType1, setSelectType1] = useState('');
  const [selectBool, setSelectBool] = useState(false);
  const [modalCheck, setModalCheck] = useState(false);
  const [checkpage, setCheckpage] = useState('');
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const location = useLocation();
  const [URL, setURL] = useState(`${location.pathname}${location.search}`);

  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;

  const checkURL = () => {
    switch (URL) {
      case `/project-list?position=PUBLISHER`:
        setSelectType('🛠 퍼블리싱');
        break;
      case `/project-list?position=DESIGNER`:
        setSelectType('🎨 디자인');
        break;
      case `/project-list?position=PLANNER`:
        setSelectType('📝 기획');
        break;
      case `/project-list?position=ETC`:
        setSelectType('🔗 기타');
        break;
      default:
        setURL(`/project-list?position=DEVELOPER`);
        break;
    }
  };

  const ChangeURL = () => {
    switch (selectType) {
      case '🛠 퍼블리싱':
        setSelectType1('🛠 퍼블리싱');
        setURL(`/project-list?position=PUBLISHER`);
        break;
      case '🎨 디자인':
        setSelectType1('🎨 디자인');
        setURL(`/project-list?position=DESIGNER`);
        break;
      case '📝 기획':
        setSelectType1('📝 기획');
        setURL(`/project-list?position=PLANNER`);
        break;
      case '🔗 기타':
        setSelectType1('🔗 기타');
        setURL(`/project-list?position=ETC`);
        break;
      case '⚙️ 개발':
        setSelectType1('⚙️ 개발');
        setURL(`/project-list?position=DEVELOPER`);
        break;
      default:
        setURL(`/project-list?position=DEVELOPER`);
        break;
    }
  };

  const checkSelectType = (e) => {
    setSelectType(e.target.innerHTML);
    setPage(0);
    setSelectBool(true);
  };

  const fetchData = async () => {
    if (selectBool === true && selectType === selectType1) {
      try {
        if (token && member === '"FREELANCER"') {
          const { data } = await CLIENT_FREELANCER(URL);

          setDatas(data.projectBoxResponses);
          setCheckpage(data.hasNext);
          setLoading(false);
          setLoading('');
        }

        if (!token || member === '"ENTERPRISE"') {
          const { data } = await FILTERED_DATA(URL);

          setDatas(data.projectBoxResponses);
          setCheckpage(data.hasNext);
          setLoading(false);
          setLoading('');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    if (selectBool === false) {
      try {
        if (token && member === '"FREELANCER"') {
          const { data } = await CLIENT_FREELANCER(URL);

          setDatas(data.projectBoxResponses);
          setCheckpage(data.hasNext);
          setLoading(false);
          setLoading('');
        }

        if (!token || member === '"ENTERPRISE"') {
          const { data } = await FILTERED_DATA(URL);
          setDatas(data.projectBoxResponses);
          setCheckpage(data.hasNext);
          setLoading(false);
          setLoading('');
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const changePage = useCallback(async () => {
    try {
      const res = await FILTERED_DATA(`${URL}&page=${page}`);
      const data = await res.data;
      setDatas((prevData) => [...prevData, ...data.projectBoxResponses]);
      setCheckpage(data.hasNext);
    } catch (error) {
      console.log(error.message);
    }
  }, [page]);

  useEffect(() => {
    if (page > 0) {
      changePage();
    }
  }, [changePage]);

  useEffect(() => {
    if (inView && checkpage) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView]);

  useEffect(() => {
    if (selectBool === true && !loading) {
      ChangeURL();
    }
    if (selectBool === false && !loading) {
      checkURL();
    }
    if (URL !== '') {
      fetchData();
    }

    const locationURL = `${location.pathname}${location.search}`;
    if (locationURL.includes('positionKind')) {
      setURL(locationURL);
      fetchData(locationURL);
    }
  }, [selectType, URL]);

  return (
    <>
      <ST.Container>
        <Header margin="0" bgColor="#252525" color="white" width="840px" logo={Logo} projectList />
        {modalCheck && (
          <>
            <ProjectListModal
              setModalCheck={setModalCheck}
              setURL={setURL}
              setSelectType={setSelectType}
              setLoading={setLoading}
              setSelectType1={setSelectType1}
            />
            <ProjectListMainMenu setModalCheck={setModalCheck} />
          </>
        )}
        <S.FrameList>
          <S.ContainerTopLetter>
            <S.TopLetterExtra>이랜서가 보증하는 IT 파트너스 38만명</S.TopLetterExtra>
            <br />
            <S.TopLetterSubject>
              프로젝트 등록하면 <br /> 더 정확한 추천을 받을 수 있어요
            </S.TopLetterSubject>
          </S.ContainerTopLetter>
          <ST.Ul>
            <ST.Li color={selectType === '⚙️ 개발' ? 'white' : 'none'} onClick={checkSelectType}>
              ⚙️ 개발
            </ST.Li>
            <ST.Li color={selectType === '🛠 퍼블리싱' ? 'white' : 'none'} onClick={checkSelectType}>
              🛠 퍼블리싱
            </ST.Li>
            <ST.Li color={selectType === '🎨 디자인' ? 'white' : 'none'} onClick={checkSelectType}>
              🎨 디자인
            </ST.Li>
            <ST.Li color={selectType === '📝 기획' ? 'white' : 'none'} onClick={checkSelectType}>
              📝 기획
            </ST.Li>
            <ST.Li color={selectType === '🔗 기타' ? 'white' : 'none'} onClick={checkSelectType}>
              🔗 기타
            </ST.Li>
            <ST.Li
              color={selectType === '🕹 필터 추가하기' ? 'white' : 'none'}
              onClick={() => {
                setModalCheck(true);
              }}
            >
              🕹 필터 추가하기
            </ST.Li>
          </ST.Ul>
          {/* =======  ListPortfolio(E-Card) Component ======= */}
          <ListPortfolio Datas={Datas} />
        </S.FrameList>
      </ST.Container>
      <div ref={ref} />
      <Footer />
    </>
  );
};

export default ListProject;
