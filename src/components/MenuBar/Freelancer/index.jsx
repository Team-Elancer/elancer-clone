import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import BackButton from 'assets/images/ic-back.png';
import RightButton from 'assets/images/ic-right.png';

const FreelancerMenuBar = ({ changeBool, setCeckBool }) => {
  const navi = useNavigate();

  const removeLocal = () => {
    window.localStorage.clear();
    alert('로그아웃 완료');
    setCeckBool(true);
    navi('/login');
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
      <Link to="/myboard-freelancer/profile-modify">
        <S.UpLiTag>
          <span>프로젝트 등록하기</span>
          <S.ButtonImg src={RightButton} alt="button" />
        </S.UpLiTag>
      </Link>
      <Link to="/myboard-freelancer/ongoing">
        <S.UpLiTag>
          <span>마이보드</span>
          <S.ButtonImg src={RightButton} alt="button" />
        </S.UpLiTag>
      </Link>
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

export default FreelancerMenuBar;
