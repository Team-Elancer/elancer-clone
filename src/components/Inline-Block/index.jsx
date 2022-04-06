import * as S from './style';

const InlineBlock = () => {
  return (
    <S.FlexDiv>
      <S.H1>회원가입</S.H1>
      <S.TextSpan>
        <S.Padding>회원선택</S.Padding>
        <S.BorderSpan>1 / 3</S.BorderSpan>
      </S.TextSpan>
    </S.FlexDiv>
  );
};

export default InlineBlock;
