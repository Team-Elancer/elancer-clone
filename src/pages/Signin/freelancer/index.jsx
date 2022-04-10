import { useState } from 'react';
import * as S from './style';
import Profile from 'assets/images/signin-profile.png';
import InlineBlock from 'components/Inline-Block';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const SigninFreeLancer = () => {
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
        <InlineBlock h1="프리랜서 회원가입" text="회원정보" pages="2 / 3" />
        <S.ButtonDiv>개인</S.ButtonDiv>
        <S.MobilePhoto>
          <S.ProfileImg src={Profile} alt="profile" />
        </S.MobilePhoto>
        <S.H1>기본정보</S.H1>
        <S.ProfileDiv>hello</S.ProfileDiv>
        <S.SubmitDiv>hello</S.SubmitDiv>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default SigninFreeLancer;
