import * as S from './style';

const BoardCardSpan = ({ setChangeList }) => {
  return (
    <S.OverFlowDiv>
      <S.FlexDiv width="129%">
        <S.CardSpan textSize="1.1rem" paddingHeight="1.2rem" paddingWidth="0.9rem" bgcolor="#7485c9" radiud="0.6rem">
          헤드헌팅 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#8a7fa4"
          radiud="0.6rem"
          id="지원현황"
          onClick={(e) => setChangeList(e.target.id)}
        >
          지원 현황 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#9f7985"
          radiud="0.6rem"
          id="인터뷰요청"
          onClick={(e) => setChangeList(e.target.id)}
        >
          인터뷰 요청 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#b57360"
          radiud="0.6rem"
          id="조율중"
          onClick={(e) => setChangeList(e.target.id)}
        >
          조율중 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#d56b2d"
          radiud="0.6rem"
          id="진행중"
          onClick={(e) => setChangeList(e.target.id)}
        >
          진행중 0
        </S.CardSpan>
        <S.CardSpan
          textSize="1.1rem"
          paddingHeight="1.2rem"
          paddingWidth="0.9rem"
          bgcolor="#f16300"
          radiud="0.6rem"
          id="완료프로젝트"
          onClick={(e) => setChangeList(e.target.id)}
        >
          완료 프로젝트 0
        </S.CardSpan>
      </S.FlexDiv>
    </S.OverFlowDiv>
  );
};

export default BoardCardSpan;
