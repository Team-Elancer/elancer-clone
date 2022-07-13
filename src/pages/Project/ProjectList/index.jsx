import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as ST from './style';

import Logo from 'assets/images/logo_white.png';

import ListPortfolio from 'components/ListPortfolio';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';
import { FILTERED_DATA, BaseUrl } from 'utils/config/api';

const ListProject = () => {
  const [Datas, setDatas] = useState('');
  const [selectType, setSelectType] = useState('⚙️ 개발');
  const [selectType1, setSelectType1] = useState('');
  const [selectBool, setSelectBool] = useState(false);
  const location = useLocation();
  const [URL, setURL] = useState(`${location.pathname}${location.search}`);

  const checkURL = () => {
    switch (URL) {
      case '/project-list?position=PUBLISHER':
        setSelectType('🛠 퍼블리싱');
        break;
      case '/project-list?position=DESIGNER':
        setSelectType('🎨 디자인');
        break;
      case '/project-list?position=PLANNER':
        setSelectType('📝 기획');
        break;
      case '🔗 기타':
        setSelectType('🔗 기타');
        setURL('/project-list?position=ETC');
        break;
      default:
        setURL('/project-list?position=DEVELOPER');
        break;
    }
  };

  const ChangeURL = () => {
    switch (selectType) {
      case '🛠 퍼블리싱':
        setSelectType1('🛠 퍼블리싱');
        setURL('/project-list?position=PUBLISHER');
        break;
      case '🎨 디자인':
        setSelectType1('🎨 디자인');
        setURL('/project-list?position=DESIGNER');
        break;
      case '📝 기획':
        setSelectType1('📝 기획');
        setURL('/project-list?position=PLANNER');
        break;
      case '🔗 기타':
        setSelectType1('🔗 기타');
        setURL('/project-list?position=ETC');
        break;
      case '⚙️ 개발':
        setSelectType1('⚙️ 개발');
        setURL('/project-list?position=DEVELOPER');
        break;
      default:
        setURL('/project-list?position=DEVELOPER');
        break;
    }
  };

  console.log(Datas, selectBool);
  const checkSelectType = (e) => {
    setSelectType(e.target.innerHTML);
    setSelectBool(true);
  };

  const fetchData = async () => {
    if (selectBool === true && selectType === selectType1) {
      try {
        const res = await FILTERED_DATA(URL);
        const data = await res.data;
        setDatas(data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const res = await FILTERED_DATA(URL);
        const data = await res.data;
        setDatas(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    if (selectBool === true) {
      ChangeURL();
    }
    if (selectBool === false) {
      checkURL();
    }
    fetchData();
  }, [location, selectType, URL]);

  return (
    <>
      <ST.Container>
        <Header margin="0" bgColor="#252525" color="white" width="840px" logo={Logo} projectList />
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
            <ST.Li color={selectType === '🕹 필터 추가하기' ? 'white' : 'none'} onClick={checkSelectType}>
              🕹 필터 추가하기
            </ST.Li>
          </ST.Ul>
          {/* =======  ListPortfolio(E-Card) Component ======= */}
          <ListPortfolio Datas={Datas.projectBoxResponses} />
        </S.FrameList>
      </ST.Container>
      <Footer />
    </>
  );
};

export default ListProject;
