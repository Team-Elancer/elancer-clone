import * as S from './style';

const InlineBlock = ({ h1, text, pages }) => {
  return (
    <S.FlexDiv>
      <S.H1>{h1}</S.H1>
      <S.TextSpan>
        <S.Padding>{text}</S.Padding>
        <S.BorderSpan>{pages}</S.BorderSpan>
      </S.TextSpan>
    </S.FlexDiv>
  );
};

export default InlineBlock;
