import * as S from './style';
import BackButton from 'assets/images/ic-back.png';
import RightButton from 'assets/images/ic-right.png';

const MenuBar = () => {
  return (
    <S.Container>
      <S.Ultag>
        <S.DownLiTag>
          <img src={BackButton} alt="button" />
        </S.DownLiTag>
        <S.UpLiTag>
          <a href="/#">로그인</a>
          <img src={RightButton} alt="button" />
        </S.UpLiTag>
        <S.UpLiTag>
          <a href="/#">회원가입</a>
          <img src={RightButton} alt="button" />
        </S.UpLiTag>
        <S.LineTag />
        <S.DownLiTag>
          <a href="/#">커뮤니티</a>
          <img src={RightButton} alt="button" />
        </S.DownLiTag>
        <S.DownLiTag>
          <a href="/#">이용안내</a>
          <img src={RightButton} alt="button" />
        </S.DownLiTag>
        <S.DownLiTag>
          <a href="/#">코워킹 스페이스</a>
          <img src={RightButton} alt="button" />
        </S.DownLiTag>
        <S.DownLiTag>
          <a href="/#">굿즈</a>
          <img src={RightButton} alt="button" />
        </S.DownLiTag>
      </S.Ultag>
    </S.Container>
  );
};

export default MenuBar;
