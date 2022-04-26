import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    setTimeOut(timeSet, 2000);
  }, []);

  return (
    <S.Container slide={timeOut}>
      <S.Ultag>
        <S.ImgLi onClick={changeBool}>
          <S.ButtonImg src={BackButton} alt="button" />
        </S.ImgLi>
        <S.UpLiTag>
          <Link to="/login">
            <span>로그인</span>
          </Link>
          <S.ButtonImg src={RightButton} alt="button" />
        </S.UpLiTag>
        <S.UpLiTag>
          <Link to="/signin/main">
            <span>회원가입</span>
          </Link>
          <S.ButtonImg src={RightButton} alt="button" />
        </S.UpLiTag>
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
      </S.Ultag>
    </S.Container>
  );
};

export default MenuBar;
