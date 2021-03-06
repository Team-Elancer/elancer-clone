import axios from 'axios';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { ImBubble } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';

import * as S from './style';

import google from 'assets/images/google.png';
import naver from 'assets/images/naver.png';

import MenuBar from 'components/MenuBar';
import GridBottom from 'components/Modal/GridBottom';
import MainMenu from 'components/Modal/MainMenu';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';
import { BaseUrl } from 'utils/config/api';

const Login = () => {
  axios.defaults.withCredentials = true;
  const [checkBool, setCeckBool] = useState(true);
  const navi = useNavigate();

  const [Id, setId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loginFail, setLoginFail] = useState('');

  const CLIENT_ID = '428541390243-7cevccqe0afejrec8et1025hbk8v36p0.apps.googleusercontent.com';

  const idChange = (e) => {
    setId(e.target.value);
  };

  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const CreateWrite = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: `${BaseUrl}/login`,
      data: {
        userId: Id,
        password: userPassword,
      },
    })
      .then((res) => {
        window.localStorage.setItem('accessToken', res.data.accessToken);
        window.localStorage.setItem('refreshToken', res.data.refreshToken);
        window.localStorage.setItem('memberType', JSON.stringify(res.data.memberType));
        if (window.localStorage !== undefined) {
          navi(`/`);
        }

        if (window.localStorage.memberType === '"FREELANCER"') {
          navi('/freelancer');
          window.location.reload();
        }
        if (window.localStorage.memberType === '"ENTERPRISE"') {
          navi('/enterprise');
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
        setLoginFail('???????????? ?????? ????????????. ???????????? ??????????????? ?????? ?????? ?????????.');
      });
  };

  // const LogInGoogle = () => {
  //   document.location.assign(
  //     `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=code&approval_prompt=force&access_type=offline&scope=email%20profile&redirect_uri=${BaseUrl}/login/google`,
  //   );

  //   const queryString = window.location.search;
  // };

  const googleSuccess = async (a) => {
    axios({
      method: 'POST',
      url: `${BaseUrl}/login`,
      data: {
        userId: 'sni424',
        password: 'wh8107',
      },
    })
      .then((res) => {
        window.localStorage.setItem('accessToken', res.data.accessToken);
        window.localStorage.setItem('refreshToken', res.data.refreshToken);
        window.localStorage.setItem('memberType', JSON.stringify(res.data.memberType));
        if (window.localStorage !== undefined) {
          navi(`/`);
        }

        if (window.localStorage.memberType === '"FREELANCER"') {
          navi('/freelancer');
          window.location.reload();
        }
        if (window.localStorage.memberType === '"ENTERPRISE"') {
          navi('/enterprise');
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
        setLoginFail('???????????? ?????? ????????????. ???????????? ??????????????? ?????? ?????? ?????????.');
      });
  };

  const googleFail = (respone) => {
    console.log(respone);
  };

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
        <S.H1Div>?????????</S.H1Div>
        <S.TextDiv>
          ?????? ???????????? ?????? ????????? ??????,
          <br />
          IT ????????? ?????? ???????????? ???????????? ???????????????.
          <br />
          <br />
          ???????????? ????????? ??????????????? <br />
          ???????????????
        </S.TextDiv>
        <S.IdForm>
          <S.LoginError>{loginFail}</S.LoginError>
          <S.FlexDiv>
            <S.Label>?????????</S.Label>
            <S.PaddingDiv left="0.9rem">
              <S.IdInput placeholder="?????????" value={Id} onChange={idChange} />
            </S.PaddingDiv>
          </S.FlexDiv>
          <S.ErrorMessageDiv>{Id === '' && '???????????? ???????????????.'}</S.ErrorMessageDiv>
          <S.FlexDiv>
            <S.Label>????????????</S.Label>
            <S.PaddingDiv>
              <S.IdInput type="password" placeholder="????????????" value={userPassword} onChange={passwordChange} />
            </S.PaddingDiv>
          </S.FlexDiv>
          <S.ErrorMessageDiv>{userPassword === '' && '??????????????? ???????????????.'}</S.ErrorMessageDiv>
          <S.AlignCenter>
            <S.SpaceBetween>
              <S.CheckBox type="checkbox" />
              <S.CheckLabel>????????? ??????</S.CheckLabel>
            </S.SpaceBetween>
            <S.SpaceBetween>
              <S.Span>?????????/???????????? ??????</S.Span>
            </S.SpaceBetween>
          </S.AlignCenter>
          <S.MarginAuto>
            <S.CenterDiv>
              {/* ============= ?????? ????????? ============= */}
              <S.SpanTag>
                <S.LoginButton
                  border="#f16300"
                  mobileBg="white"
                  tabletBg="#f16300"
                  mobileColor="#f16300"
                  tabletColor="white"
                  content="center"
                  onClick={CreateWrite}
                >
                  {/* <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=428541390243-7cevccqe0afejrec8et1025hbk8v36p0.apps.googleusercontent.com&amp;response_type=code&amp;scope=email%20profile&amp;redirect_uri=http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/login/google"> */}
                  ?????????
                  {/* </a> */}
                </S.LoginButton>
              </S.SpanTag>

              {/* ============= Google ????????? ============= */}
              <S.SpanTag>
                {/* <S.LoginButton
                  border="#f16300"
                  mobileBg="white"
                  tabletBg="#f16300"
                  mobileColor="#f16300"
                  tabletColor="white"
                  content="center"
                  onClick={LogInGoogle}
                > */}
                <GoogleLogin
                  clientId="428541390243-7cevccqe0afejrec8et1025hbk8v36p0.apps.googleusercontent.com"
                  buttonText="?????? ??????????????? ????????????"
                  onSuccess={googleSuccess}
                  onFailure={googleFail}
                  cookiePolicy="single_host_origin"
                />

                {/* </S.LoginButton> */}
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
                      ?????????????????? ?????? ?????????
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
                      ???????????? ?????? ?????????
                    </S.TextSpan>
                  </S.LoginButton>
                </a>
              </S.SpanTag>
            </S.CenterDiv>
            <S.SigninDiv>
              ?????? ????????? ????????????????
              <Link to="/signup/main">
                <S.SigninSpan>????????????</S.SigninSpan>
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
