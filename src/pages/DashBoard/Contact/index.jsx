import * as S from './style';

const DashboardContact = () => {
  return (
    <S.Container>
      <S.FlexDiv>
        <S.H1 size="2.4rem">문의/요청</S.H1>
        <S.H1 size="1.4rem" cursor="pointer">
          문의하기
        </S.H1>
      </S.FlexDiv>
      <S.OverflowDiv>
        <S.WidthDiv>
          <S.EcardDiv mobileRight="1.5rem" tabletRight="1rem">
            <h1>hello</h1>
          </S.EcardDiv>
          <S.WhiteEcardDiv>
            <h1>hello</h1>
          </S.WhiteEcardDiv>
          <S.EcardDiv mobileRight="1.5rem" tabletRight="1rem">
            <h1>hello</h1>
          </S.EcardDiv>
          <S.EcardDiv>
            <h1>hello</h1>
          </S.EcardDiv>
        </S.WidthDiv>
      </S.OverflowDiv>
      <S.H1 size="2.4rem">원하는 질문을 검색해보세요.</S.H1>
    </S.Container>
  );
};

export default DashboardContact;
