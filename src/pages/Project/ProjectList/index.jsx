import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as ST from './style';

import Logo from 'assets/images/logo_white.png';

import FilterButtonDark from 'components/Button/FilterButton/FilterButtonDark';
import ListPortfolio from 'components/ListPortfolio';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import * as S from 'styles/Page';
import { FILTERED_DATA, BaseUrl } from 'utils/config/api';

const ListProject = () => {
  const [Datas, setDatas] = useState('');
  const location = useLocation();

  console.log(`${location.pathname}${location.search}`, Datas);

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
  }, [location]);

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
          {/* =======  FilterButton Component ======= */}
          <FilterButtonDark />
          {/* =======  ListPortfolio(E-Card) Component ======= */}
          <ListPortfolio Datas={Datas.projectBoxResponses} />
        </S.FrameList>
      </ST.Container>
      <Footer />
    </>
  );
};

export default ListProject;
