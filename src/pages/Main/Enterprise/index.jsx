import { useEffect, useState } from 'react';
import * as S from './style';

import Logo from 'assets/images/logo_white.png';
import zoom from 'assets/images/search_big.png';
import zoomWhite from 'assets/images/search_white.png';

import Eblock from 'components/Arround-Project';
import GridBottom from 'components/Modal/GridBottom';
import EnterpriseMainMenu from 'components/Modal/MainMenu/Enterprise';
import ReFreelancer from 'components/Re-Freelancer';
import EnterpriseSearchBar from 'components/Search/Enterprise';
import Footer from 'layouts/Footer';
import CompanyHeader from 'layouts/Header/Company';

const MainEnterprise = () => {
  const [changeBack, setChangeBack] = useState(true);
  const [checkButton, setCheckButton] = useState('');

  const changeSearch = () => {
    setChangeBack(false);
  };
  const changeButton = (e) => {
    setCheckButton(e.target.value);
  };

  return (
    <S.Container>
      <S.BgDiv>
        <CompanyHeader bgColor="#0000" color="white" logo={Logo} width="840px" />
        <EnterpriseSearchBar />
        <S.FlexDiv color={changeBack === false ? '#f6f6f6' : '#f16300'} onClick={changeSearch}>
          <S.jobButton width="26%">
            <S.Span color={changeBack === false ? 'black' : 'white'}>프리랜서 업무 분야</S.Span>
            <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>개발</S.ButtonP>
          </S.jobButton>
          <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
          <S.jobButton width="17%">
            <S.Span color={changeBack === false ? 'black' : 'white'}>스킬</S.Span>
            <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
          </S.jobButton>
          <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
          <S.jobButton width="17%">
            <S.Span color={changeBack === false ? 'black' : 'white'}>근무 위치</S.Span>
            <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
          </S.jobButton>
          <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
          <S.jobButton width="17%">
            <S.Span color={changeBack === false ? 'black' : 'white'}>숙련도</S.Span>
            <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>선택</S.ButtonP>
          </S.jobButton>
          <S.LineDiv color={changeBack === false ? '#969696' : 'white'} />
          <S.jobButton width="17%">
            <S.Span color={changeBack === false ? 'black' : 'white'}>검색어</S.Span>
            <S.ButtonP color={changeBack === false ? '#969696' : '#ffc298'}>입력</S.ButtonP>
          </S.jobButton>
          <S.Img src={changeBack === false ? zoom : zoomWhite} alt="searchImg" />
        </S.FlexDiv>
        {changeBack === false && <EnterpriseMainMenu setChangeBack={setChangeBack} />}
        <S.CenterDiv>
          <S.H1>
            일하고 싶은만큼 언제 어디서나!
            <br />
            데이터 크라우드 워커 되기
          </S.H1>
          <S.PTag>크라우드 워커 되기</S.PTag>
        </S.CenterDiv>
      </S.BgDiv>
      <S.MainDiv>
        <Eblock />
        <ReFreelancer />
      </S.MainDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default MainEnterprise;
