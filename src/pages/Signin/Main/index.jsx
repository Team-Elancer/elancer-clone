import { Link } from 'react-router-dom';
import * as S from './style';
import Logo from 'assets/images/elancer_logo.png';
import Freelancer from 'assets/images/freelancer.png';
import LogoWhite from 'assets/images/logo_white.png';
import InlineBlock from 'components/Inline-Block';

const SigninMain = () => {
  return (
    <>
      <InlineBlock h1="회원가입" text="회원선택" pages="1 / 3" />
      <S.BlockDiv>
        <Link to="/signin/company">
          <S.BoxSizeDiv bgcolor="#f6f6f6" right="1rem">
            <S.CenterDiv>
              <S.ImgFlex>
                <S.Img src={Logo} alt="logo" magin="10rem" />
                <S.BigText>엔터프라이즈</S.BigText>
              </S.ImgFlex>
              <S.TopP color="black">기업 전용 가입하기</S.TopP>
              <S.BottomP color="#707070">적합한 인재 찾기를 희망한 기업</S.BottomP>
            </S.CenterDiv>
          </S.BoxSizeDiv>
        </Link>
        <Link to="/signin/freelancer">
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
        </Link>
      </S.BlockDiv>
    </>
  );
};

export default SigninMain;
