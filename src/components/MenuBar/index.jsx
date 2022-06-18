import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import EnterpriseMenuBar from './Enterprise';
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

        {window.localStorage.memberType === '"ENTERPRISE"' && (
          <EnterpriseMenuBar changeBool={changeBool} setCeckBool={setCeckBool} />
        )}
      </S.Ultag>
    </S.Container>
  );
};

export default MenuBar;
