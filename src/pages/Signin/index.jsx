import { useState } from 'react';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import Freelancer from 'assets/images/freelancer.png';
import LogoWhite from 'assets/images/logo_white.png';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const index = () => {
  const [checkBool, setCeckBool] = useState(true);

  return (
    <S.Container>
      {checkBool === false && (
        <>
          <MainMenu setCeckBool={setCeckBool} />
          <MenuBar checkBool={checkBool} setCeckBool={setCeckBool} />
        </>
      )}
      <Header checkBool={checkBool} setCeckBool={setCeckBool} />
      <S.SizeDiv>
        <S.FlexDiv>
          <S.H1>회원가입</S.H1>
          <S.TextSpan>
            <S.Padding>회원선택</S.Padding>
            <S.BorderSpan>1 / 3</S.BorderSpan>
          </S.TextSpan>
        </S.FlexDiv>
        <S.BlockDiv>
          <S.BoxSizeDiv bgcolor="#f6f6f6">
            <S.CenterDiv>
              <S.ImgFlex>
                <S.Img src={Logo} alt="logo" magin="7rem" />
                <S.BigText>엔터프라이즈</S.BigText>
              </S.ImgFlex>
              <S.TopP color="black">기업 전용 가입하기</S.TopP>
              <S.BottomP color="#707070">적합한 인재 찾기를 희망한 기업</S.BottomP>
            </S.CenterDiv>
          </S.BoxSizeDiv>
          <S.BoxSizeDiv bgcolor="#3c3c3c">
            <S.CenterDiv>
              <S.ImgFlex>
                <S.Img src={LogoWhite} alt="logo-white" />
                <S.SmallImg src={Freelancer} alt="Freelancer" />
              </S.ImgFlex>
              <S.TopP color="white">프리랜서 가입하기</S.TopP>
              <S.BottomP color="#a5a5a5">프로젝트를 찾는 프리랜서/크라우드 워커</S.BottomP>
            </S.CenterDiv>
          </S.BoxSizeDiv>
        </S.BlockDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default index;
