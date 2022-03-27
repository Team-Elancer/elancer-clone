import * as S from './style';

const MenuBar = () => {
  return (
    <S.Container>
      <S.Ultag>
        <S.UpLiTag>로그인</S.UpLiTag>
        <S.UpLiTag>회원가입</S.UpLiTag>
        <S.LineTag />
        <S.DownLiTag>커뮤니티</S.DownLiTag>
        <S.DownLiTag>이용안내</S.DownLiTag>
        <S.DownLiTag>코워킹 스페이스</S.DownLiTag>
        <S.DownLiTag>굿즈</S.DownLiTag>
      </S.Ultag>
    </S.Container>
  );
};

export default MenuBar;
