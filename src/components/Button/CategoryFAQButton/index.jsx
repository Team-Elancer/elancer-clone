import * as S from './style';

const CategoryFAQButton = () => {
  return (
    <S.FrameList>
      <S.ContainerTopButton>
        <form>
          <S.FAQH1>FAQ</S.FAQH1>
          <S.TopButton type="button" primary>
            프로젝트
          </S.TopButton>
          <S.TopButton type="button"> 이력정보 </S.TopButton>
          <S.TopButton type="button"> 회원정보 수정 </S.TopButton>
          <S.TopButton type="button"> 개인회원가입 </S.TopButton>
          <S.TopButton type="button"> 아이디/비밀번호찾기 </S.TopButton>
          <S.TopButton type="button"> 기타 </S.TopButton>
        </form>
      </S.ContainerTopButton>
    </S.FrameList>
  );
};

export default CategoryFAQButton;
