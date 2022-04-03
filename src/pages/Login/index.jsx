import { ImBubble } from 'react-icons/im';
import * as S from './style';
import naver from 'assets/images/naver.png';
import GridBottom from 'components/Modal/GridBottom';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const Login = () => {
  return (
    <S.Container>
      <Header />
      {/* <S.BorderDiv /> */}
      <S.SizeDiv>
        <S.H1Div>
          <h1>로그인</h1>
        </S.H1Div>
        <S.TextDiv>
          함께 나눌수록 더욱 커지는 가치,
          <br />
          IT 전문가 세상 이랜서에 오신것을 환영합니다.
          <br />
          <br />
          이랜서는 기업과 프리랜서를 <br />
          연결합니다
        </S.TextDiv>
        <S.IdForm>
          <S.LoginError>로그인에 실패 했습니다. 아이디와 패스워드를 다시 확인 하세요.</S.LoginError>
          <S.FlexDiv>
            <S.Label>아이디</S.Label>
            <S.PaddingDiv>
              <S.IdInput placeholder="아이디" />
            </S.PaddingDiv>
          </S.FlexDiv>
          <S.ErrorMessageDiv>아이디를 입력하세요.</S.ErrorMessageDiv>
          <S.FlexDiv>
            <S.Label>비밀번호</S.Label>
            <S.PaddingDiv>
              <S.IdInput type="password" placeholder="비밀번호" />
            </S.PaddingDiv>
          </S.FlexDiv>
          <S.ErrorMessageDiv>비밀번호를 입력하세요.</S.ErrorMessageDiv>
          <S.AlignCenter>
            <S.SpaceBetween>
              <S.CheckBox type="checkbox" />
              <S.CheckLabel>아이디 저장</S.CheckLabel>
            </S.SpaceBetween>
            <S.SpaceBetween>
              <S.Span>아이디/비밀번호 찾기</S.Span>
            </S.SpaceBetween>
          </S.AlignCenter>
          <S.MarginAuto>
            <S.CenterDiv>
              <S.PTag>
                <S.LoginButton
                  border="#f16300"
                  mobileBg="white"
                  tabletBg="#f16300"
                  mobileColor="#f16300"
                  tabletColor="white"
                  content="center"
                >
                  로그인
                </S.LoginButton>
              </S.PTag>
              <S.PTag>
                <S.LoginButton
                  border="#F9E000"
                  mobileBg="#F9E000"
                  tabletBg="#F9E000"
                  mobileColor="black"
                  tabletColor="black"
                  content="start"
                >
                  <S.Icon>
                    <ImBubble size="20" />
                  </S.Icon>
                  <S.TextSpan mobilePadding="6.5rem" tabletPadding="3rem" laptoppadding="3rem">
                    카카오톡으로 간편 로그인
                  </S.TextSpan>
                </S.LoginButton>
              </S.PTag>
              <S.PTag>
                <S.LoginButton
                  border="#03c75a"
                  mobileBg="#03c75a"
                  tabletBg="#03c75a"
                  mobileColor="white"
                  tabletColor="white"
                  content="start"
                >
                  <S.Icon>
                    <S.NaverImg src={naver} alt="naver" />
                  </S.Icon>
                  <S.TextSpan mobilePadding="7.5rem" tabletPadding="3.5rem" laptoppadding="3.5rem">
                    네이버로 간편 로그인
                  </S.TextSpan>
                </S.LoginButton>
              </S.PTag>
            </S.CenterDiv>
            <S.SigninDiv>
              아직 멤버가 아니십니까?
              <S.SigninSpan>회원가입</S.SigninSpan>
            </S.SigninDiv>
          </S.MarginAuto>
        </S.IdForm>
      </S.SizeDiv>
      <Footer />
      <GridBottom />
    </S.Container>
  );
};

export default Login;
