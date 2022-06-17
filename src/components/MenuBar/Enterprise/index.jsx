import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import BackButton from 'assets/images/ic-back.png';
import RightButton from 'assets/images/ic-right.png';

const EnterpriseMenuBar = ({ changeBool, setCeckBool }) => {
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

export default EnterpriseMenuBar;
