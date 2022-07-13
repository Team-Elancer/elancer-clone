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
  const location = useLocation();
  const [URL, setURL] = useState('');

  console.log(Datas);

  const checkSelectType = (e) => {
    setSelectType(e.target.innerHTML);
  };

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`${location.pathname}${location.search}`);
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location, selectType]);

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
