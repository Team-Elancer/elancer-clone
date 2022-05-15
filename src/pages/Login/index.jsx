import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImBubble } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import naver from 'assets/images/naver.png';
import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

const Login = () => {
  const [checkBool, setCeckBool] = useState(true);
  const navi = useNavigate();

  const [newDatas, setNewDatas] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios('http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/freelancer');
      const Data = await res.data;
      setNewDatas(Data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const CreateWrite = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/login',
      data: {
        userId: 'CROWD_WORKER',
        password: 'wh8107',
      },
    })
      .then((res) => {
        console.log(res);
        alert('생성이 완료되었습니다.');
        navi(`/`);
      })
      .catch((err) => {
        return alert(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <S.SpanTag>
                <S.LoginButton
                  onClick={CreateWrite}
                  border="#f16300"
                  mobileBg="white"
                  tabletBg="#f16300"
                  mobileColor="#f16300"
                  tabletColor="white"
                  content="center"
                >
                  로그인
                </S.LoginButton>
              </S.SpanTag>
              <S.SpanTag>
                <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fdevelopers.kakao.com%2Flogin%3Fcontinue%3D%252Fconsole%252Fapp&lang=ko">
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
                </a>
              </S.SpanTag>
              <S.SpanTag>
                <a href="https://nid.naver.com/nidlogin.login">
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
                </a>
              </S.SpanTag>
            </S.CenterDiv>
            <S.SigninDiv>
              아직 멤버가 아니십니까?
              <Link to="/signin/main">
                <S.SigninSpan>회원가입</S.SigninSpan>
              </Link>
            </S.SigninDiv>
          </S.MarginAuto>
        </S.IdForm>
      </S.SizeDiv>
      <Footer toBottom="static" />
      <GridBottom />
    </S.Container>
  );
};

export default Login;
