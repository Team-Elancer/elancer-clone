import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import FreelancerMenuBar from './Freelancer';

import * as S from './style';
import BackButton from 'assets/images/ic-back.png';
import RightButton from 'assets/images/ic-right.png';

const MenuBar = ({ checkBool, setCeckBool }) => {
  const [timeOut, setTimeOut] = useState(0);

  const changeBool = () => {
    setTimeOut(1);
    if (timeOut > -26) {
      setCeckBool(true);
    }
    console.log(timeOut);
  };

  const timeSet = () => {
    return setTimeOut(-26);
  };

  if (timeOut > 0) {
    setCeckBool(true);
  }

  const checkEffect = () => {
    setCeckBool(true);
  };

  useEffect(() => {
    setTimeOut(timeSet, 2000);
  }, []);

  return (
    <S.Container
      height={window.localStorage.accessToken === undefined ? '254px' : '304px'}
      slide={timeOut}
      onClick={checkEffect}
    >
      <S.Ultag>
        {window.localStorage.accessToken === undefined && (
          <>
            <S.ImgLi onClick={changeBool}>
              <S.ButtonImg src={BackButton} alt="button" />
            </S.ImgLi>
            <Link to="/login">
              <S.UpLiTag>
                <span>로그인</span>
                <S.ButtonImg src={RightButton} alt="button" />
              </S.UpLiTag>
            </Link>
            <Link to="/signup/main">
              <S.UpLiTag>
                <span>회원가입</span>
                <S.ButtonImg src={RightButton} alt="button" />
              </S.UpLiTag>
            </Link>
            <S.LineTag />
            <S.DownLiTag>
              <a href="/#">커뮤니티</a>
              <S.ButtonImg src={RightButton} alt="button" />
            </S.DownLiTag>
            <S.DownLiTag>
              <a href="/#">이용안내</a>
              <S.ButtonImg src={RightButton} alt="button" />
            </S.DownLiTag>
            <S.DownLiTag>
              <a href="/#">코워킹 스페이스</a>
              <S.ButtonImg src={RightButton} alt="button" />
            </S.DownLiTag>
            <S.DownLiTag>
              <a href="/#">굿즈</a>
              <S.ButtonImg src={RightButton} alt="button" />
            </S.DownLiTag>
          </>
        )}

        {window.localStorage.memberType === '"FREELANCER"' && (
          <FreelancerMenuBar changeBool={changeBool} setCeckBool={setCeckBool} />
        )}

        {window.localStorage.accessToken === '"ENTERPRISE"' && (
          <EnterpriseMenuBar changeBool={changeBool} setCeckBool={setCeckBool} />
        )}
      </S.Ultag>
    </S.Container>
  );
};

const EnterpriseMenuBar = ({ changeBool, setCeckBool }) => {
  const navi = useNavigate();

  const removeLocal = () => {
    window.localStorage.clear();
    alert('로그아웃 완료');
    setCeckBool(true);
    navi('/');
    window.location.reload();
  };

  return (
    <>
      <S.ImgLi onClick={changeBool}>
        <S.ButtonImg src={BackButton} alt="button" />
      </S.ImgLi>
      <S.UpLiTag onClick={removeLocal}>
        <span>LogOut</span>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.UpLiTag>
      <S.UpLiTag>
        <Link to="/dashboard/projectadd">
          <span>프로젝트 등록하기</span>
        </Link>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.UpLiTag>
      <S.UpLiTag>
        <Link to="/dashboard">
          <span>대시보드</span>
        </Link>

        <S.ButtonImg src={RightButton} alt="button" />
      </S.UpLiTag>
      <S.LineTag />
      <S.DownLiTag>
        <a href="/#">커뮤니티</a>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.DownLiTag>
      <S.DownLiTag>
        <a href="/#">ERG 이알지</a>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.DownLiTag>
      <S.DownLiTag>
        <a href="/#">이용안내</a>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.DownLiTag>
      <S.DownLiTag>
        <a href="/#">코워킹 스페이스</a>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.DownLiTag>
      <S.DownLiTag>
        <a href="/#">굿즈</a>
        <S.ButtonImg src={RightButton} alt="button" />
      </S.DownLiTag>
    </>
  );
};

export default MenuBar;
